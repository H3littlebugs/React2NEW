// FilteredList.js
import React from 'react';

function FilteredList({ elements, filterText }) {
  const filteredElements = elements.filter(element =>
    element.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="filtered-list">
      <ul>
        {filteredElements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
