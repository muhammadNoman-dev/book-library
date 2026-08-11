import { useState } from "react";

function SearchBar({ initialValue, onSearch }) {
  const [value, setValue] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault();

    const query = value.trim();

    if (!query) {
      return;
    }

    onSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
    >
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search books, authors..."
        className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none"
      />

      <button
        type="submit"
        className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;