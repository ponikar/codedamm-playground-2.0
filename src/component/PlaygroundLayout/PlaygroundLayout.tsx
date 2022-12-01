import { FC, PropsWithChildren } from "react";
import Split from "react-split";
import { CodeEditor } from "../Editor/Editor";
import { FileManager } from "../FileManager/FileManager";

export const PlaygroundLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Split sizes={[20, 45, 25]} className="h-full flex" direction="horizontal">
      <FileManager />
      <CodeEditor />
      <div className="">OUTPUT SCREEN</div>
    </Split>
  );
};
