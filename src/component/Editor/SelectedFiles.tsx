import React from "react";
import { useSelectedContent } from "../../store/files/file-content";
import { FileTie } from "./FileTie";

export const SelectedFiles = () => {
  const files = useSelectedContent();

  return (
    <section className="max-w-full bg-slate-400 flex overflow-x-auto">
      {files.map((file, index) => (
        <FileTie key={index} />
      ))}
    </section>
  );
};
