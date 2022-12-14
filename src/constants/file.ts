const FILE_LOCATION = "/icons";

type FileType = ["js", "ts", "html", "css", "json"];

export const FILE_ICON_EXTENSIONS: Record<FileType[number], string> = {
  js: `${FILE_LOCATION}/js.png`,
  ts: `${FILE_LOCATION}/ts.png`,
  html: `${FILE_LOCATION}/html.png`,
  css: `${FILE_LOCATION}/css.png`,
  json: `${FILE_LOCATION}/json.png`,
};

export const getFileIcon = (filename: string) => {
  const type = filename.split(".").pop() as FileType[number];
  if (!type) return `${FILE_LOCATION}/file.png`;
  // Todo: change icon
  return FILE_ICON_EXTENSIONS[type] || `${FILE_LOCATION}/js.png`;
};

const CODE_EDITOR_EXTENSIONS: Record<FileType[number], string> = {
  js: "javascript",
  ts: "typescript",
  html: "html",
  css: "css",
  json: "json",
};

export const getCodeEditorExtension = (filename: string) => {
  const type = filename.split(".").pop() as FileType[number];
  if (!type) return "text";
  return CODE_EDITOR_EXTENSIONS[type] || "text";
};
