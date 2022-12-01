import React, { useState } from "react";
import { FileProps, FolderProps } from "../../../@types/file";
import { CreateFF } from "./CreateFF";
import { RenderFF } from "./RenderFF";

const FAKE_FILES: (FileProps | FolderProps)[] = [
  {
    id: "1",
    name: "src",
    type: "folder",
    files: [
      {
        name: "index.ts",
        id: "FAKE_ID",
        content: "console.log('hello world')",
        type: "file",
      },
      {
        name: "styles.css",
        id: "FAKE_ID_CSS",
        type: "file",
      },
      {
        name: "components",
        id: "componet",
        type: "folder",
        files: [{ name: "App.ts", id: "app", type: "file" }],
      },
    ],
  },
  {
    name: "index.html",
    id: "FAKE_ID_HTML",
    type: "file",
  },
];

export const FileManager = () => {
  const [showCreateFF, setShowCreateFF] = useState(false);
  return (
    <section
      onDoubleClick={() => setShowCreateFF(true)}
      className="bg-slate-800"
    >
      {showCreateFF && <CreateFF onBlur={() => setShowCreateFF(false)} />}
      <RenderFF content={FAKE_FILES} />
    </section>
  );
};
