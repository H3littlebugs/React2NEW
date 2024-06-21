// App.js
import React, { useState } from 'react';
import './App.css'; // Archivo de estilos

import SearchBox from './SearchBox';
import FilteredList from './FilteredList';

function App() {
  const [filterText, setFilterText] = useState('');
  const [elements, setElements] = useState([
    'TITANIC', 'Padrino 2', 'Padrino 3', 'Rapido y Furioso  1', 'Rapido y Furioso 2', 'Rapido y Furioso 3', 'Rapido y Furioso 4'
  ]);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const handleAddElement = () => {
    // Ejemplo de uso de setElements para agregar un nuevo elemento
    const newElement = prompt('Ingrese un nuevo elemento:');
    if (newElement) {
      setElements(prevElements => [...prevElements, newElement]);
    }
  };

  return (
    <div className="App">
      <h1>Filtrado de Listas</h1>
      <button onClick={handleAddElement}>Agregar Elemento</button>
      <SearchBox filterText={filterText} onFilterTextChange={handleFilterTextChange} />
      <FilteredList elements={elements} filterText={filterText} />
    </div>
  );
}

export default App;
