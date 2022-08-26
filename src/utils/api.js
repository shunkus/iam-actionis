import axios from "axios";
import { BASE_URL } from "../constants/api";

export function getBaseUrl(lang = "") {
  let url = BASE_URL;
  if (lang) {
    url = url.replace(/(docs\.aws\.amazon\.com)/, `$1/${lang}`);
  }
  return url;
}

export async function getList(service, url, lang) {
  try {
    const res = await axios.get("/api/list", {
      params: {
        url,
        lang,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export function getUrlFromId(id) {
  return `./list_${id}.html`;
}

export function getIdFromUrl(url) {
  const match = url.match(/^\.\/list_(.+)\.html$/);
  if (match.length > 1) {
    return match[1];
  }
  return "";
}

export function getFullUrl(url) {
  if (url) {
    const base = getBaseUrl();
    return base + url.replace(/^\./, "");
  }
  return "";
}
