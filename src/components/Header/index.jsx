import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { toogleModal } = useModal();
  const { currentUser, logout } = useAuth();

  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      {currentUser && (
        <>
          <p>{currentUser.name}</p>
          <button className={styles.cartButton} onClick={toogleModal}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button onClick={logout}>salir</button>
        </>
      )}
    </header>
  );
}
