import Head from "next/head";
import { useState } from "react";
import ServiceComponent from "../src/components/service.component";
import SideNavComponent from "../src/components/side-nav.component";

export default function Home() {
  const [lang, setLang] = useState();
  const [service, setService] = useState("");
  const [url, setUrl] = useState("");
  return (
    <div className="p-4">
      <Head>
        <title>IAM Actions</title>
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
