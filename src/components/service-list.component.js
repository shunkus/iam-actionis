export default function ServiceListComponent({
  service,
  services,
  handleOnClick,
}) {
  return (
    <ul>
      {services &&
        services.map((s) => (
          <li
            className={`p-2 border-b text-sm cursor-pointer ${
              s.service === service
                ? "bg-black text-white"
                : "hover:bg-gray-50 hover:text-black"
            }`}
            key={s.url}
            onClick={() => {
              handleOnClick(s);
            }}
          >
            {s.service}
          </li>
        ))}
    </ul>
  );
}
