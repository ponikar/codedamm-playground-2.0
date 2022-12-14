import { FC, useMemo } from "react";
import { FileProps } from "../../../@types/file";
import { FILE_ICON_EXTENSIONS, getFileIcon } from "../../constants/file";
import { useFileContentActions } from "../../store/files/file-content";
import { FFClickable } from "./FFClickable";

interface Props {
  file: FileProps;
}

export const File: FC<Props> = ({ file }) => {
  const { name = "", level = 0, id } = file;

  const { selectAndActiveContent } = useFileContentActions();
  return (
    <FFClickable
      style={{ paddingLeft: level === 0 ? "15px" : `${level * 20}px` }}
      icon={{ src: getFileIcon(name), alt: "click" }}
      onClick={() => selectAndActiveContent(file)}
    >
      {name}
    </FFClickable>
  );
};
