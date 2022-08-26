import { ALLOWED_LANGS } from "../constants/api";

export default function SelectLangComponent({ lang, handleOnChange }) {
  return (
    <select
      value={lang}
      onChange={handleOnChange}
      className="p-1 pr-7 ml-2 text-xs border-gray-200 focus:ring-0 focus:border-black"
    >
      {ALLOWED_LANGS.map((LANG) => (
        <option key={LANG.code} value={LANG.code}>
          {LANG.name}
        </option>
      ))}
    </select>
  );
}
