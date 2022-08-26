import axios from "axios";
import cheerio from "cheerio";
import { BASE_URL } from "../../src/constants/api";

export default async function servicesAPI(req, res) {
  const URL = `${BASE_URL}/reference_policies_actions-resources-contextkeys.html`;
  const result = await axios.get(URL);
  const html = result.data;
  const $ = cheerio.load(html);
  const services = [];
  $(".highlights ul li a").each(function () {
    const service = $(this).text().trim();
    const url = $(this).attr("href").trim();
    services.push({ service, url });
  });
  res.setHeader("Cache-Control", "max-age=86400, s-maxage=86400");
  res.status(200).json(services);
}
