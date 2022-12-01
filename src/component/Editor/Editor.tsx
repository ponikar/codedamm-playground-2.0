import Editor from "@monaco-editor/react";
import Split from "react-split";
import { Terminal } from "../Terminal/Terminal";

export const CodeEditor = () => {
  return (
    <Split className="h-full" sizes={[70, 30]} direction="vertical">
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
    </Split>
  );
};
