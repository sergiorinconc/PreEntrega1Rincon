
import React from 'react';
import '../../styles/ItemsListContainer.css'; 

const ItemsListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemsListContainer;

