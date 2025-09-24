import { useRef, useState } from "react";

function SearchableList({ items, children, itemKeyFn }) {
  const [searchTerm, setSearchTerm] = useState("");
  const lastChange = useRef()

  const searchResults = items.filter((item) =>
    JSON.stringify(item)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout()
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null
      setSearchTerm(event.target.value);
    }, 500)  
  }


  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange}/>
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
          // Children functionina, sest see on erinev iga list itemi puhul. mitte tavaline {children}
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
