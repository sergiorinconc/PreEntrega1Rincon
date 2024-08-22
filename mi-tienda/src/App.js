// src/App.js
import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a El Mercado de los Vrykul!" />
    </div>
  );
}

export default App;
