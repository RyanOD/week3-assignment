import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart/Cart";
import Property from "./Components/Property/Property";
import Properties from "./Components/Properties/Properties";
import Collection from "./Components/Collections/Collection";
import ThemeContext from "./Components/Context/ThemeContext";

import propertyData from "./_data/bnbs.json";
import collectionsData from "./_data/locations.json";

export default function App() {
  const theme = "light";
  let [cartItems, setCartItems] = useState([]);

  const onAddToCartHandler = (property) => {
    setCartItems((prevState) => [...prevState, property]);
    localStorage.setItem("selectedProperties", cartItems);
  };

  const onRemoveFromCartHandler = (property) => {
    setCartItems(cartItems.filter((item) => item.id !== property.id));
    localStorage.setItem("selectedProperties", cartItems);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main className="main">
        <Link to="/">GetAway</Link> |{" "}
        <Link to="/properties/houses">Houses</Link> |&nbsp;
        <Link to="/properties/apartments">Apartments</Link> |&nbsp;
        <Link to="/properties/condos">Condos</Link> |&nbsp;
        <Link to="/properties/places">Places</Link> |&nbsp;
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                propertyData={propertyData}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                collectionsData={collectionsData}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
              />
            }
          ></Route>
          <Route
            path="/property/:propertyId"
            element={
              <Property
                cartItems={cartItems}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                data={propertyData}
              />
            }
          ></Route>
          <Route
            path="/properties/:propertiesType"
            element={<Properties />}
          ></Route>
          <Route
            path="/collection/:city"
            element={
              <Collection
                cartItems={cartItems}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                propertyData={propertyData}
                collectionsData={collectionsData}
              />
            }
          ></Route>
        </Routes>
      </main>
    </ThemeContext.Provider>
  );
}
