import React, { useState } from "react";
import { FileProps, FolderProps } from "../../../@types/file";
import {
  useFileStructureActions,
  useFileStructureStore,
} from "../../store/files/file-structure";
import { CreateFF } from "./CreateFF";
import { RenderFF } from "./RenderFF";

export const FileManager = () => {
  const [showCreateFF, setShowCreateFF] = useState(false);
  const content = useFileStructureStore();

  const { createRootContent } = useFileStructureActions();

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const fileName = e.target.value;
    if (fileName) {
      createRootContent({
        name: fileName,
        type: fileName.split(".").length > 1 ? "file" : "folder",
        id: Math.random().toString(),
        level: 0,
      });
    }
    setShowCreateFF(false);
  };

  console.log("FILE CONTENT", content);

  return (
    <section
      onDoubleClick={() => setShowCreateFF(true)}
      className="bg-slate-800"
    >
      {showCreateFF && <CreateFF onBlur={onInputBlur} />}
      <RenderFF content={content} />
    </section>
  );
};
