import { FileProps, FolderProps } from "../../../@types/file";
import { FileStructureProps } from "./file-store";

type Content = FileProps | FolderProps;

export const createContent = (
  parentFolder: FolderProps,
  folder: Content,
  structure: FileStructureProps["structure"]
): FileStructureProps["structure"] => {
  // base condition
  if (parentFolder.level === 0) {
    return structure.map((struct) => {
      if (struct.id === parentFolder.id && struct.type === "folder") {
        return {
          ...struct,
          files: [
            ...(struct?.files || []),
            { ...folder, parent: parentFolder },
          ],
        };
      }
      return struct;
    });
  }

  const paths: { id: string; level: number }[] = [];
  findPath(parentFolder, paths);
  const sortedPathByLevel = paths.sort((a, b) => a.level - b.level);
  return createFolderByPath(sortedPathByLevel, structure, parentFolder, folder);
};

const createFolderByPath = (
  paths: { id: string; level: number }[],
  structure: FileStructureProps["structure"],
  parentFolder: FolderProps,
  folder: Content
): FileStructureProps["structure"] => {
  console.log("CURRENT PATH", paths);
  if (paths.length === 0)
    return [...structure, { ...folder, parent: parentFolder }];

  structure.map((struct) => {
    if (struct.id === paths[0].id && struct.type === "folder") {
      if (struct.files) {
        const substruct = createFolderByPath(
          paths.slice(1),
          struct.files,
          struct,
          folder
        );
        struct.files = substruct;
      } else {
        struct.files = [folder];
      }
    }
    return struct;
  });

  return structure;
};

const findPath = (
  parentFolder: Content,
  paths: { id: string; level: number }[]
) => {
  if (parentFolder.level === 0) {
    return paths.push({ id: parentFolder.id, level: parentFolder.level });
  }

  /// add yourself
  paths.push({ id: parentFolder.id, level: parentFolder.level });

  // look if you have a parent
  if (parentFolder.parent) findPath(parentFolder.parent, paths);

  // otherwise return
  return;
};

export const createRootContent = (
  content: Content,
  structure: FileStructureProps["structure"]
) => {
  return [...structure, { ...content, level: 0 }];
};
