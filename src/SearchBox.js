// SearchBox.js
import React from 'react';

function SearchBox({ filterText, onFilterTextChange }) {
  const handleChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar..."
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
