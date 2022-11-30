import { FC, memo } from "react";
import { FileProps, FolderProps } from "../../../@types/file";
import { File } from "./File";
import { RenderFolder } from "./RenderFolder";

interface RenderFFProps {
  content: (FileProps | FolderProps)[];

  level?: number;
}

export const RenderFF: FC<RenderFFProps> = memo(({ content, level = 0 }) => {
  return (
    <>
      {content.map((content) => {
        if (content.type === "folder") {
          return (
            <RenderFolder key={content.id} content={content} level={level} />
          );
        }

        return <File level={level} key={content.id} {...content} />;
      })}
    </>
  );
});

RenderFF.displayName = "RenderFF";
