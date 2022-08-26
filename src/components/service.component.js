import { useEffect, useState } from "react";
import { getList } from "../utils/api";
import LoadingComponent from "./loading.component";
import ServiceHeaderComponent from "./service-header.component";
import TableComponent from "./table.component";

export default function ServiceComponent({ service, url, lang }) {
  const [loading, setLoading] = useState(false);
  const [actions, setActions] = useState();
  const [resources, setResources] = useState();
  const [conditions, setConditions] = useState();
  useEffect(async () => {
    console.log(service, url, lang);
    setLoading(true);
    setActions(null);
    setResources(null);
    if (service) {
      setConditions(null);
      const data = await getList(service, url, lang);
      setActions(data.actions);
      setResources(data.resources);
      setConditions(data.conditions);
      setLoading(false);
    }
  }, [service, lang]);
  return (
    <>
      <ServiceHeaderComponent service={service} url={url} lang={lang} />
      {loading && service !== "" && <LoadingComponent />}
      <div className="overflow-x-auto">
        {actions && (
          <TableComponent id="actions" title="Actions" html={actions} />
        )}
        {resources && (
          <TableComponent id="resources" title="Resources" html={resources} />
        )}
        {conditions && (
          <TableComponent
            id="conditions"
            title="Conditions"
            html={conditions}
          />
        )}
      </div>
    </>
  );
}
