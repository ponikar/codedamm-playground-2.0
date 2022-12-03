import { FileProps, FolderProps } from "../../../@types/file";

interface FileStructureProps {
  structure: (FileProps | FolderProps)[];

  actions: {
    createContent: (
      parentFoler: FolderProps,
      content: FileProps | FolderProps
    ) => void;

    createRootContent: (content: FileProps | FolderProps) => void;
  };
}
