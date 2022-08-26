import { useEffect, useRef } from "react";

export default function TableComponent({ id, title, html }) {
  const tableRef = useRef();
  useEffect(() => {
    if (html) {
      tableRef.current.innerHTML = html;
    }
  }, [html]);
  return (
    <>
      <h3 id={id} className="font-bold text-lg mb-1">
        {title}
      </h3>
      <table className="text-xs actions-table mb-3" ref={tableRef} />
    </>
  );
}
