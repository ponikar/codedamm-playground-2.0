import { FC, useMemo } from "react";
import { FileProps } from "../../../@types/file";
import { FILE_ICON_EXTENSIONS } from "../../constants/file";
import { FFClickable } from "./FFClickable";

interface Props extends FileProps {
  level?: number;
}

export const File: FC<Props> = ({ name = "", level = 0 }) => {
  const [_, extension] = useMemo(() => name.split("."), [name]) as [
    string,
    keyof typeof FILE_ICON_EXTENSIONS
  ];
  return (
    <FFClickable
      style={{ paddingLeft: level === 0 ? "15px" : `${level * 20}px` }}
      icon={{ src: FILE_ICON_EXTENSIONS[extension], alt: "click" }}
    >
      {name}
    </FFClickable>
  );
};
