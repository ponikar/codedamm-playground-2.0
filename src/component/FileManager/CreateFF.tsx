import React, { FC } from "react";
import { useFileStructureActions } from "../../store/files/file-structure";

interface CreateFFProps {
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export const CreateFF: FC<CreateFFProps> = ({ onBlur }) => {
  return (
    <input
      ref={(ref) => ref?.focus()}
      onBlur={onBlur}
      onKeyUp={(e) => e.key === "Enter" && onBlur && onBlur(e)}
      className="bg-transparent text-sm border text-gray-200 border-slate-500 p-1 outline-none w-full"
    />
  );
};
