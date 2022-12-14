import React, { FC, memo } from "react";
import { FolderProps } from "../../../@types/file";
import { useFileStructureActions } from "../../store/files/file-structure";
import { CreateFF } from "./CreateFF";
import { FFClickable } from "./FFClickable";

interface FolderFCProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: FolderProps;

  parent?: FolderProps;
}
export const Folder: FC<FolderFCProps> = memo(({ content, ...props }) => {
  const { level, name } = content;
  const [showCreateFF, setShowCreateFF] = React.useState(false);

  const { createContent } = useFileStructureActions();

  const onDoubleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setShowCreateFF(true);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const fileName = e.target.value;
    if (fileName) {
      createContent(
        // parent,
        content,
        // new content
        {
          name: fileName,
          type: fileName.split(".").length > 1 ? "file" : "folder",
          id: Math.random().toString(),
          level: level + 1,
        }
      );
    }
    setShowCreateFF(false);
  };
  return (
    <section onDoubleClick={onDoubleClick}>
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
      {showCreateFF && <CreateFF onBlur={onBlur} />}
    </section>
  );
});

Folder.displayName = "Folder";
