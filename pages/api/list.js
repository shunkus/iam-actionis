import axios from "axios";
import cheerio from "cheerio";
import { Tabletojson } from "tabletojson";
import { ALLOWED_LANGS, LANG_TABLE_MAPPINGS } from "../../src/constants/api";
import { getBaseUrl } from "../../src/utils/api";

export default async function listAPI(req, res) {
  const { url } = req.query;
  let lang = "";
  if (
    typeof req.query.lang !== "undefined" &&
    ALLOWED_LANGS.map((lang) => lang.code).includes(req.query.lang)
  ) {
    lang = req.query.lang;
  }
  const URL = getBaseUrl(lang) + url.replace(/^\.\//, "/");
  const result = await axios.get(URL);
  const $ = cheerio.load(result.data);
  let actionsT, resourcesT, conditionsT;
  $(".table-contents table").each(function () {
    // const table = $.html($(this));
    const table = $(this).html();
    $(this)
      .find("th")
      .each(function () {
        if ($(this).text() === LANG_TABLE_MAPPINGS[lang]["Actions"]) {
          actionsT = table;
        }
        if ($(this).text() === LANG_TABLE_MAPPINGS[lang]["Resources"]) {
          resourcesT = table;
        }
        if ($(this).text() === LANG_TABLE_MAPPINGS[lang]["Conditions"]) {
          conditionsT = table;
        }
      });
  });
  //   const actions = Tabletojson.convert(actionsT)[0];
  //   const resources = Tabletojson.convert(resourcesT)[0];
  //   const conditions = Tabletojson.convert(conditionsT)[0];
  const actions = actionsT;
  const resources = resourcesT;
  const conditions = conditionsT;
  res.setHeader("Cache-Control", "max-age=86400, s-maxage=86400");
  res.status(200).json({ actions, resources, conditions });
}
