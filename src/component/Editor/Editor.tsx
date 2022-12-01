import Editor from "@monaco-editor/react";
import { Terminal } from "../Terminal/Terminal";

export const CodeEditor = () => {
  return (
    <div className="col-span-5">
      <Editor
        height="70%"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        // onMount={handleEditorDidMount}
        onChange={(value, event) => {
          console.log("onChange", value, event);
        }}
      />
      <Terminal />
    </div>
  );
};
