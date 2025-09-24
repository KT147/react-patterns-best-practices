import { useState } from "react";

function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange}/>
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
          // Children functionina, sest see on erinev iga list itemi puhul. mitte tavaline {children}
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
