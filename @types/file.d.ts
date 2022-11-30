export interface FileProps {
  name: string;
  content?: string;
  id: string;
  type: "file";
}

export interface FolderProps {
  id: string;
  name: string;
  files?: (FolderProps | FileProps)[];

  type: "folder";
}
