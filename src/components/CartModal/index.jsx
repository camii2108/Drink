import React from "react";
import styles from "./CartModal.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CartModal() {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
      <FontAwesoneIcon icon={faXmarkCircle} className={}/>
        <i className={styles.closeBtn}>x</i>
        <h2>Mi Carrito</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksList}>

          {/* Contenido adicional del modal */}
            <article className={styles.card}>
              <img src="ruta-de-la-imagen" alt="Nombre del producto" />
              <span>Nombre del producto</span>
              <span>Precio</span>
              <div className={styles.counter}>
                <button>-</button>
                <span>Cantidad</span>
                <button>+</button>
              </div>
             
            </article>
          </div>
          <aside className={styles.modalAside}>
            {/* Contenido adicional del modal */}
            <p> Subtotal: XXXXXXXX</p>
            <p> Total:XXXXXXX</p>
            <div className="styles.btnContainer">
            <button>Vaciar carrito</button>
            <button>Confirmar Compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default CartModal;
