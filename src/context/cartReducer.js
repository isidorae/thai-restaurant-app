import { ACTIONS } from "./cartActions";

export const cartInitialState = {
    cart: []
}

export function cartReducer(state, action) {
    switch(action.type){
        case ACTIONS.ADD_TO_CART: {
            const isProductInCart = state.cart.some((item) => item.name === action.payload.name)

            if(isProductInCart) {
                alert('Producto ya esta en el carrito de compras')
                return state
            }
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        }
        case ACTIONS.ADD_ONE_QUANTITY: {
            console.log("add 1")
            console.log(action.payload.quantity)
          const updateItem = state.cart.map((item) => {
            return item.id === action.payload.id
            // ? {...item, quantity: item.quantity + 1 }
            ? {...item, quantity: action.payload.quantity + 1}
            : item
           })
           return {
            ...state,
            cart: updateItem
           }
        }
        case ACTIONS.REDUCE_ONE_QUANTITY: {
            console.log("reduce 1")
            //if quantity is 1, keep quantity in 1. 
            if (action.payload.quantity <= 1) {
                const dontUpdateItem = state.cart.map((item) => {
                    console.log("looping minus")
                    return item.id === action.payload.id
                    // ? {...item, quantity: item.quantity + 1 }
                    ? {...item, quantity: 1}
                    : item
                   })
                   return {
                    ...state,
                    cart:  dontUpdateItem
                   }
            }
          const updateItem = state.cart.map((item) => {
            console.log("looping minus")
            return item.id === action.payload.id
            // ? {...item, quantity: item.quantity + 1 }
            ? {...item, quantity: action.payload.quantity - 1}
            : item
           })
           return {
            ...state,
            cart: updateItem
           }
        }
        case ACTIONS.REMOVE_ONE_FROM_CART: {
            let newCart = state.cart.filter( el => {
                console.log(action.payload)
                    return el.id !== action.payload
               })
               return{
                ...state,
                cart: newCart
               }
        }
        case ACTIONS.GET_CART_TOTAL_VALUE: {
            let newTotal = 0;

            cart.cart.forEach((product) => {

                const quantity = product.quantity;
                const price = product.price;
                newTotal = newTotal + (price*quantity)
            })
            console.log(newTotal)
            return newTotal;
        }
        case ACTIONS.CONFIRM_CART_ORDER: {
            if(action.payload > 0){
              return confirm(`El total de tu orden es "$ ${action.payload}" , seras reedirigo para rellenar tus datos y realizar el pago`)
              ? cartInitialState
              : state
            }
            if (action.payload == 0) {
                alert('No hay productos en el carrito')
                return cartInitialState
            }

        }
        default: return cartInitialState;
    }
}
