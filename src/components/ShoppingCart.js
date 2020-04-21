import React, { useContext } from "react";

// Components
import Item from "./ShoppingCartItem";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ShoppingCart = (props) => {
  const { removeItem } = useContext(ProductContext);

  console.log("shopping cart props: ", props);
  const cart = useContext(CartContext);
  console.log({ cart });

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item key={item.id} removeItem={removeItem} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
