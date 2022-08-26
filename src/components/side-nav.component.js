import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { getFullUrl, getIdFromUrl } from "../utils/api";
import FilterServiceComponent from "./filter-service.component";
import LoadingComponent from "./loading.component";
import SelectLangComponent from "./select-lang.component";
import ServiceListComponent from "./service-list.component";

export default function SideNavComponent({
  service,
  lang,
  url,
  setLang,
  setService,
  setUrl,
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(async () => {
    setLoading(true);
    const res = await axios.get("/api/services");
    setServices(res.data);
    setFiltered(res.data);
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (filterText === "") {
      setFiltered(services);
      return;
    }
    let newList = [];
    for (const s of filtered) {
      const regex = new RegExp(filterText, "i");
      if (regex.test(s.service)) {
        newList.push(s);
      }
    }
    setFiltered(newList);
  }, [filterText]);
  useEffect(() => {
    if (lang !== undefined) {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);
  useEffect(() => {
    for (let s of services) {
      if (s.url === url) {
        setService(s.service);
      }
    }
  }, [url, services]);
  return (
    <div className="sticky top-3">
      <div className="max-h-screen overflow-y-auto">
        <h1 className="font-extrabold text-xl flex">
          IAM Actions
          <SelectLangComponent
            lang={lang}
            handleOnChange={(e) => {
              setLang(e.target.value);
            }}
          />
        </h1>
        <FilterServiceComponent
          filterText={filterText}
          handleOnChange={(e) => {
            setFilterText(e.target.value);
          }}
        />
        {loading && filtered.length === 0 && <LoadingComponent />}
        <ServiceListComponent
          service={service}
          services={filtered}
          handleOnClick={(s) => {
            router.push(`/list/${getIdFromUrl(s.url)}`);
          }}
        />
      </div>
    </div>
  );
}
