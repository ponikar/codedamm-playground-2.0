import React from "react";
import { CodeEditor } from "./Editor";
import { SelectedFiles } from "./SelectedFiles";

export const EditorArea = () => {
  return (
    <section className="w-full h-full">
      <SelectedFiles />
      <CodeEditor />
    </section>
  );
};
