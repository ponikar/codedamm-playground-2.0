import create from "zustand";
import { FileStructureProps } from "./file-store";
import { createContent, createRootContent } from "./file-structure-utility";

const usefileStructureStore = create<FileStructureProps>((set) => ({
  structure: [],
  actions: {
    createContent: (parentFolder, content) =>
      set((state) => ({
        ...state,
        structure: createContent(parentFolder, content, state.structure),
      })),
    createRootContent: (content) =>
      set((state) => ({
        ...state,
        structure: createRootContent(content, state.structure),
      })),
  },
}));

export const useFileStructureStore = () => {
  return usefileStructureStore((state) => state.structure);
};

export const useFileStructureActions = () => {
  return usefileStructureStore((state) => state.actions);
};
