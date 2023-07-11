import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const cartInitialState= {
    cartItems:[],
}
/* es una buena practica, que te trae un objet con clave valo. Que me trae todas las acciones */
const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",

}
/*  */
function cartReducer (state, action) {
    const payload = action.payload;
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
             return{
                /* traeme el estado actual pero con la propiedad cartItems */
                ...state,
                /* quiero que me traiga el array con el producto agregado */
                cartItems: [...state.cartItems, payload]
             }
    }
}

/* cada una de las acciones que estan en el carrito */
function CartProvider ({children}) {
    /* todas las acciones del carrito, que impactan en el reducer son las que representan las acciones del carrito */
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function addToCart (drink) {
        dispatch({ type:actionTypes.ADD_TO_CART, payload: drink})

    }

    function removeOneFromCart () {
        
    }
    /* saca todos los elementos de un solo ccat*/
    function removeAllFromCart () {

    }
    /* me limpia todo el carrito */
    function clearCart () {

    }
/* guardamos en una var a parte  */
    const cartValues = {
        cart : state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart
    }
/* nuestro provider retorna los valores  */
    return (
        <CartContext.Provider value={cartValues}>
        { children }    
        </CartContext.Provider>
    )
}


CartProvider.proptypes = {
    children: PropTypes.node.isRequired,
}

export { CartProvider, CartContext};