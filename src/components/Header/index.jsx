import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartProvider";
import styles from "./Header.module.css";

const Header = () => {
  const { cart, toggleCart } = useContext(CartContext);

  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      <button className={styles.cartButton} onClick={toggleCart}>
        <FaShoppingCart className={styles.cartIcon} />
        <span className={styles.cartItemCount}>{cart.cartItems.length}</span>
      </button>
    </header>
  );
};

export default Header;
