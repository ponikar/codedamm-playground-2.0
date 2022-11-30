import React, { FC } from "react";
import { FolderProps } from "../../../@types/file";
import { Folder } from "./Folder";
import { RenderFF } from "./RenderFF";

interface Props {
  content: FolderProps;
  level?: number;
}

export const RenderFolder: FC<Props> = ({ content, level = 0 }) => {
  const [expand, setExpand] = React.useState(false);
  return (
    <div key={content.id}>
      <Folder
        onClick={() => setExpand((e) => !e)}
        level={level}
        name={content.name}
      />
      {expand && content.files && (
        <div>
          <RenderFF level={level + 1} content={content.files} />
        </div>
      )}
    </div>
  );
};
