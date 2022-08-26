export default function FilterServiceComponent({ filterText, handleOnChange }) {
  return (
    <div className="mb-2">
      <input
        className="w-full text-xs px-0.5 block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
        type="text"
        placeholder="Filter by Service Name"
        value={filterText}
        onChange={handleOnChange}
      />
    </div>
  );
}
