import React from "react"
function CardContent() {

    const title = "Monitor AOC 25G3ZM/BK, 24.5, 1920 x 1080 (FullHD)"
    const price = "179.50 €"
    const priceThen = "309.50 €"

    return (
        <div className="card-content">
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h4>{priceThen}</h4>
        </div>
    );
}

export default CardContent;