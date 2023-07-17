/* import React from "react"; */
import styles from "./CartModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import {useCart} from "../../hooks/useCart";


function CartModal() {
  const { isOpen, toogleModal } = useModal();
  const {
    cart,  
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
    sendOrder } = useCart();

  

  if (isOpen) {
    return (
      <div className={styles.modalBg}>
        <div className={styles.modal}>
          <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal} />
          <h2>Mi Carrito</h2>
          <section className={styles.modalBody}>
            <div className={styles.modalDrinksListContainer}>
            {cart.cartItems.map((drink) => (
                  
              <article key={drink.idDrink} className={styles.card}>
              <img
                src={drink.strDrinkThumb}
                alt={`Imagen de ${drink.strDrink}`}
              />
              <span>{drink.strDrink}</span>
              <span>{drink.price}</span>
              <div className={styles.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>-</button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>+</button>
              </div>
              <FontAwesomeIcon 
              icon={faTrash} 
              className={styles.iconTrash} 
              onClick={()=> removeAllFromCart(drink.idDrink)}
              />
            </article>
              ))
            }

            </div>
            {/* Resumen de los datos que queremos exponer al cliente */}
            <aside className={styles.modalAside}>
              <p>Subtotal: XXXXXXXX</p>
              <p>{/* Agrega el valor para el total */}</p>
              <div className={styles.btnContainer}>
                <button className={styles.clearCart} onClick={clearCart}>Vaciar carrito</button>
                <button className={styles.confirmOrder} onClick={sendOrder}>Confirmar Compra</button>
              </div>
            </aside>
          </section>
        </div>
      </div>
    );
  }

  return null;
}

export default CartModal;
