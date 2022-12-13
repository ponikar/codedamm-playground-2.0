import Editor from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import Split from "react-split";
import {
  useFileContentActions,
  useActiveContent,
  useFileContent,
} from "../../store/files/file-content";
import { Terminal } from "../Terminal/Terminal";

export const CodeEditor = () => {
  const activeFile = useActiveContent();
  const files = useFileContent();
  const { updateContent } = useFileContentActions();

  const isKeyboardEvent = useRef(false);

  useEffect(() => {
    let timer;

    window.addEventListener("keydown", (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      isKeyboardEvent.current = true;

      timer = setTimeout(() => (isKeyboardEvent.current = false), 1000);
    });

    () => {
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  const onChange = (val?: string) => {
    if (activeFile && val && isKeyboardEvent.current) {
      console.log("UPDATING FILE");
      updateContent(activeFile.id, val);
    }
  };

  if (!activeFile) {
    return (
      <div className="flex justify-center h-[70%] items-center bg-slate-500">
        Select File or create File
      </div>
    );
  }

  console.log("ACTIVE FILE", files[activeFile.id].content);

  return (
    <Split className="h-full" sizes={[70, 30]} direction="vertical">
      <Editor
        height="70%"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={files[activeFile.id].content}
        onChange={onChange}
      />
      <Terminal />
    </Split>
  );
};
