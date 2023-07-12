import React from "react";
import styles from "./CartModal.module.css";

function CartModal() {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <i className={styles.closeBtn}>x</i>
        <h2>Mi Carrito</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksList}>
            <article>
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
          </aside>
        </section>
      </div>
    </div>
  );
}

export default CartModal;
