import Editor from "@monaco-editor/react";

export const CodeEditor = () => {
  return (
    <div className="col-span-5 resize">
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        // onMount={handleEditorDidMount}
        onChange={(value, event) => {
          console.log("onChange", value, event);
        }}
      />
    </div>
  );
};
