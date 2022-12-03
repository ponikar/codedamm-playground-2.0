export interface FileProps {
  name: string;
  content?: string;
  id: string;
  type: "file";

  level: number;
  parent?: FolderProps;
}

export interface FolderProps {
  id: string;
  name: string;
  files?: (FolderProps | FileProps)[];

  level: number;

  parent?: FolderProps;

  type: "folder";
}
