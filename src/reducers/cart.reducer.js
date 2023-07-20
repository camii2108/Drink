import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
  cartItems: [],
};

export function cartReducer(state, { type, payload = {} }) {
  const { idDrink } = payload;
  const drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink);

  switch (type) {
    case actionTypes.ADD_TO_CART:
      // Verificar si el producto ya está en el carrito
      if (drinkInCart) {
        // Si el producto ya está en el carrito, incrementar la cantidad en 1
        const cartItemsUpdated = state.cartItems.map((item) => {
          if (item.idDrink === idDrink) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return {
          ...state,
          cartItems: cartItemsUpdated,
        };
      } else {
        // Si el producto no está en el carrito, agregarlo con una cantidad de 1
        const newItem = { ...payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    case actionTypes.REMOVE_ONE_FROM_CART:
      //exite el producto en el carrito
      // Disminuir en 1 la cantidad del producto en el carrito
      if (drinkInCart.quantity > 1) {
        //quantity >1 ? => resta 1
        const cartItemsUpdated = state.cartItems.map((item) => {
          if (item.idDrink === idDrink) {
            return { 
              ...item,
               quantity: item.quantity - 1,
            };
          }
          return item;
        });

        return {
          ...state,
          cartItems: cartItemsUpdated,
        };
      }else{
        //quantity <1  => quita del carrito
        let cartItemsUpdated = state.cartItems.filter(
          (item)=>item.idDrink !== idDrink );

        return {
          ...state,
          cartItems: cartItemsUpdated,
        };
      } 


    case actionTypes.REMOVE_ALL_FROM_CART:
      // Remover completamente el producto del carrito
      if (drinkInCart) {
        const cartItemsUpdated = state.cartItems.filter(
          (item) => item.idDrink !== idDrink
          );
        return {
          ...state,
          cartItems: cartItemsUpdated,
        };

      }
      return state;
    case actionTypes.CLEAR_CART:
      // Vaciar completamente el carrito
      return {
        ...state,
        cartItems: [],
      };

  }
}
