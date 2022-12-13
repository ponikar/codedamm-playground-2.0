import create from "zustand";
import { FileProps } from "../../../@types/file";
import produce from "immer";

type FileContent = FileProps & { content: string };
interface FileContentStoreProps {
  content: Record<string, FileContent>;
  selectedContent: InstanceType<typeof Set<string>>;

  activeContent: FileProps | null;

  actions: {
    setContent: (id: string, content: FileContent) => void;
    selectAndActiveContent: (file: FileProps) => void;
    updateContent: (id: string, content: string) => void;
    setActiveContent: (id: FileProps) => void;
  };
}

export const useFileContentStore = create<FileContentStoreProps>((set) => ({
  content: {},
  selectedContent: new Set<string>(),
  activeContent: null,
  actions: {
    setContent: (id, content: FileContent) =>
      set((state) =>
        produce(state, (draft) => {
          draft.content[id] = content;
        })
      ),
    selectAndActiveContent: (file: FileProps) => {
      set((state) =>
        produce(state, (draft) => {
          if (!draft.content.hasOwnProperty(file.id)) {
            draft.content[file.id] = {
              ...file,
              content: "",
            };
          }
          if (!draft.selectedContent.has(file.id)) {
            draft.selectedContent.add(file.id);
          }
          draft.activeContent = file;
        })
      );
    },
    updateContent: (id, content) => {
      set((state) =>
        produce(state, (draft) => {
          draft.content[id].content = content;
        })
      );
    },
    setActiveContent: (file: FileProps) =>
      set((state) =>
        produce(state, (draft) => {
          draft.activeContent = file;
        })
      ),
  },
}));

export const useFileContent = () => {
  return useFileContentStore((state) => state.content);
};

export const useFileContentActions = () => {
  return useFileContentStore((state) => state.actions);
};

export const useSelectedContent = () => {
  const selectedFiles = useFileContentStore((state) => state.selectedContent);

  return Array.from(selectedFiles);
};

export const useActiveContent = () => {
  return useFileContentStore((state) => state.activeContent);
};
