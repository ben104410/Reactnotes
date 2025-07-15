function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
}

export default SearchBar;
