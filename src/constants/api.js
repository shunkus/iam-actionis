export const BASE_URL =
  "https://docs.aws.amazon.com/service-authorization/latest/reference";

export const ALLOWED_LANGS = [
  {
    name: "English",
    code: "",
  },
  {
    name: "Japanese",
    code: "ja_jp",
  },
];

export const LANG_TABLE_MAPPINGS = {
  "": {
    Actions: "Actions",
    Resources: "Resource types",
    Conditions: "Type",
  },
  ja_jp: {
    Actions: "アクション",
    Resources: "リソースタイプ",
    Conditions: "タイプ",
  },
};
