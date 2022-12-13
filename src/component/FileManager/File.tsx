import { FC, useMemo } from "react";
import { FileProps } from "../../../@types/file";
import { FILE_ICON_EXTENSIONS } from "../../constants/file";
import { useFileContentActions } from "../../store/files/file-content";
import { FFClickable } from "./FFClickable";

interface Props {
  file: FileProps;
}

export const File: FC<Props> = ({ file }) => {
  const { name = "", level = 0, id } = file;

  const [_, extension] = useMemo(() => name.split("."), [name]) as [
    string,
    keyof typeof FILE_ICON_EXTENSIONS
  ];
  const { selectAndActiveContent } = useFileContentActions();
  return (
    <FFClickable
      style={{ paddingLeft: level === 0 ? "15px" : `${level * 20}px` }}
      icon={{ src: FILE_ICON_EXTENSIONS[extension], alt: "click" }}
      onClick={() => selectAndActiveContent(file)}
    >
      {name}
    </FFClickable>
  );
};
