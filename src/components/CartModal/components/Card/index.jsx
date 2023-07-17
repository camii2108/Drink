import PropTypes from "prop-types";
import styles from "./CardModal.module.css";

export default function ModalCard ({drink}) {
    return (
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
    )
}
ModalCard.propTypes = {
    drink: PropTypes.object.isRequired
}