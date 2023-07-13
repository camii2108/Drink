import React from "react";
import styles from "./CartModal.module.css";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"; */

function CartModal() {
  const {isOpen, toogleModal } = useModal();
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
     
      <h2>Mi Carrito</h2>
      <section className={styles.modalBody}>
      <i className={styles.icon}>x</i>
          <div className={styles.modalDrinksListContainer}>

          {/* Contenido adicional del modal */}
            <article className={styles.card}>
              <img src="https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg" alt="Nombre del producto" />
              <span>Nombre del producto</span>
              <span>Precio</span>
              <div className={styles.counter}>
                <button>-</button>
                <span>Cantidad</span>
                <button>+</button>
              </div>
              {/* icono tachito de basura */}
             
            </article>
          </div>
          <aside className={styles.modalAside}>
            {/* Contenido adicional del modal */}
            <p> Subtotal: XXXXXXXX</p>
            <p> Total:XXXXXXX</p>
            <div className={styles.btnContainer}>
            <button className={styles.clear}>Vaciar carrito</button>
            <button className={styles.confirmOrder}>Confirmar Compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default CartModal;
