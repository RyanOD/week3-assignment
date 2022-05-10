import React from "react";
import "./PropertyCard.css";

export default function PropertyCard({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  size,
  propertyData,
}) {
  let inCart = false;

  if (cartItems) {
    inCart = cartItems.find((property) => property.id === propertyData.id);
  }

  return (
    <div
      className={`property-card__container property-card__container--${size}`}
    >
      <div className="property-card__details">
        <h1 className={`property-card__title`}>{propertyData.title}</h1>
        <p className={`property-card__house-type`}>
          {propertyData.houseType} hosted by {propertyData.host.name}
        </p>
        <p className={`property-card__location`}>
          {propertyData.location.city}, {propertyData.location.country}
        </p>
        <p className={`property-card__details`}>
          {propertyData.rating.stars} stars | {propertyData.rating.reviews}{" "}
          reviews
        </p>
        <p className={`property-card__details`}>
          ${propertyData.payment.cost} / night (
          {propertyData.payment.description})
        </p>
        {!inCart && (
          <button
            className="property-card__button"
            onClick={() => onAddToCartHandler(propertyData)}
          >
            Add to cart
          </button>
        )}
        {inCart && (
          <button
            className="property-card__button"
            onClick={() => onRemoveFromCartHandler(propertyData)}
          >
            Remove from cart
          </button>
        )}
      </div>
      <img
        className={`property-card__image property-card__image--${size}`}
        src={propertyData.image}
        alt={propertyData.title}
      />
    </div>
  );
}
