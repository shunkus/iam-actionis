import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { getUrlFromId } from "../../src/utils/api";
import SideNavComponent from "../../src/components/side-nav.component";
import ServiceComponent from "../../src/components/service.component";

export default function ListService() {
  const router = useRouter();
  const { id } = router.query;
  const [lang, setLang] = useState();
  const [service, setService] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (id) {
      setUrl(getUrlFromId(id));
    }
  }, [id]);
  return (
    <div className="p-4">
      <Head>
        <title>{service} | IAM Actions</title>
      </Head>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <SideNavComponent
            {...{ service, url, lang, setLang, setService, setUrl }}
          />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ServiceComponent {...{ service, url, lang }} />
        </div>
      </div>
    </div>
  );
}
