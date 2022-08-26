import { useEffect, useRef } from "react";
import { getFullUrl } from "../utils/api";

export default function ServiceHeaderComponent({ service, url, lang }) {
  const headerRef = useRef();
  const href = url ? getFullUrl(url) : "";
  useEffect(() => {
    if (service && typeof headerRef.current !== "undefined") {
      window.scroll(0, headerRef.current.offsetTop - 16);
    }
  }, [service, lang]);
  return (
    <>
      {service && (
        <h2 ref={headerRef} className="font-extrabold text-xl">
          {service}
        </h2>
      )}
      {href && (
        <a
          className="text-base block mb-3 text-gray-600 break-all"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {href}
        </a>
      )}
    </>
  );
}
