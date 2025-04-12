import React from "react";
import Card from "./Card.jsx";

function Products() {
  function loadCards(amount) {
    const cards = [];
    for (let i = 0; i < amount; i++) {
      cards.push(<Card key={i} />);
    }
    return cards;
  }

  return (
    <div className="products-container">
      {loadCards(8)}
    </div>
  );
}
export default Products