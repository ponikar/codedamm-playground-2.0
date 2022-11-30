import Image from "next/image";
import React, { FC } from "react";
import { FFClickable } from "./FFClickable";

interface FolderProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;

  level?: number;
}
export const Folder: FC<FolderProps> = ({ name, level = 0, ...props }) => {
  return (
    <FFClickable
      icon={{ src: "/icons/folder.png", alt: "Click to expand src" }}
      {...props}
      style={{
        paddingLeft: level === 0 ? "10px" : `${level * 20}px`,
        ...props.style,
      }}
    >
      {name}
    </FFClickable>
  );
};
