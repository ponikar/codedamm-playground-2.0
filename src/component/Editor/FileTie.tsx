import Image from "next/image";
import React, { FC } from "react";
import { X } from "react-feather";
import { FileProps } from "../../../@types/file";
import { getFileIcon } from "../../constants/file";

interface FileTileProps {
  file: FileProps;
}

export const FileTie: FC = () => {
  return (
    <button className="flex min-w-[150px] items-center gap-3 py-1 px-2 border border-slate-500 bg-slate-600">
      <Image
        width={18}
        height={18}
        className="object-contain"
        src={getFileIcon("app.js")}
        alt="Select file tile"
      />
      <p className="text-sm text-white">app.js</p>
      <button className="-my-2  ml-auto -px-2 ">
        <X size={14} className="text-white" />
      </button>
    </button>
  );
};
