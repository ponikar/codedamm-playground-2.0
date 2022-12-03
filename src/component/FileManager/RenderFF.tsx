import { FC, memo } from "react";
import { FileProps, FolderProps } from "../../../@types/file";
import { File } from "./File";
import { RenderFolder } from "./RenderFolder";

interface RenderFFProps {
  content: (FileProps | FolderProps)[];
}

export const RenderFF: FC<RenderFFProps> = memo(({ content }) => {
  return (
    <>
      {content.map((content) => {
        if (content.type === "folder") {
          return <RenderFolder key={content.id} content={content} />;
        }

        return <File key={content.id} {...content} />;
      })}
    </>
  );
});

RenderFF.displayName = "RenderFF";
