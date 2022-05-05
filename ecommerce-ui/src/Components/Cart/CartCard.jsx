import React from "react";
import "./CartCard.css";

export default function CartCard({ onRemoveFromCartHandler, property }) {
  return (
    <div className="cart-card">
      <img
        className="cart-card__image"
        src={property.image}
        alt={property.title}
      />
      <div className="cart-card__details">
        <h3 className="cart-card__title">{property.title}</h3>
        <p className="cart-card__location">
          {property.location.city}, {property.location.country}
        </p>
        <button
          className="cart-card__button"
          onClick={() => onRemoveFromCartHandler(property)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}