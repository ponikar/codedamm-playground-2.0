import { FC, PropsWithChildren } from "react";
import { CodeEditor } from "../Editor/Editor";
import { FileManager } from "../FileManager/FileManager";

export const PlaygroundLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <section className="w-full h-full grid grid-cols-12">
      {/* for file */}
      <FileManager />
      {/* code editor */}
      <CodeEditor />

      {/* for output */}
      <div className="col-span-5 border">output</div>
    </section>
  );
};
