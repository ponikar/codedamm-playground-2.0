import React, { FC } from "react";
import { FolderProps } from "../../../@types/file";
import { Folder } from "./Folder";
import { RenderFF } from "./RenderFF";

interface Props {
  content: FolderProps;
}

export const RenderFolder: FC<Props> = ({ content }) => {
  const [expand, setExpand] = React.useState(false);
  return (
    <div key={content.id}>
      <Folder onClick={() => setExpand((e) => !e)} content={content} />
      {expand && content.files && (
        <div>
          <RenderFF content={content.files} />
        </div>
      )}
    </div>
  );
};
