/* import React from "react"; */
import styles from "./CartModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import {useCart} from "../../hooks/useCart";
import { ModalCard } from "./components/Card";



function CartModal() {
  const { isOpen, toogleModal } = useModal();
  const {
    cart, 
    clearCart,
    sendOrder, 
    orderTotal } = 
    useCart();

  

  if (isOpen) {
    return (
      <div className={styles.modalBg}>
        <div className={styles.modal}>
          <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal} />
          <h2>Mi Carrito</h2>
          <section className={styles.modalBody}>
            <div className={styles.modalDrinksListContainer}>
            {cart.cartItems.length === 0 &&(
              <h3>NO HAY PRODUCTOS EN EL CARRITO</h3>
            ) }
            {cart.cartItems.map((drink) => (
                  <ModalCard key={drink.idDrink}  drink={drink}/>
              ))
            }

            </div>
            {/* Resumen de los datos que queremos exponer al cliente */}
            <aside className={styles.modalAside}>
              <p>Total: {orderTotal}</p>
              <p>Subtotal: {orderTotal}</p>
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
