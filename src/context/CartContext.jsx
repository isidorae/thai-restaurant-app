import { createContext, useReducer, useState, useEffect } from 'react'
import { ACTIONS } from './cartActions'
import { cartInitialState, cartReducer } from './cartReducer'

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, cartInitialState)
    const [total, setNewTotal] = useState(0)
    const [totalItemsInCart, setTotalItemsInCart] = useState(0)

    useEffect(() => {
        updateTotalCart()
        sumNavBarItems()
    }, [cart])

    const addToCart = (product) => {
        console.log(product)
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: product})
    } 
    
    const removeFromCart = (id) => {
        console.log(id)
        dispatch({ type: ACTIONS.REMOVE_ONE_FROM_CART, payload: id})
    }

     const addOneQuantity = (product) => {
        console.log(product)
        dispatch({ type: ACTIONS.ADD_ONE_QUANTITY, payload: product})
    }

     const reduceOneQuantity = (product) => {
        console.log(product)
        dispatch({ type: ACTIONS.REDUCE_ONE_QUANTITY, payload: product})
    }

     const updateTotalCart = () => {
        let newTotal = 0;

        cart.cart.forEach((product) => {
            const quantity = product.quantity;
            const price = product.price;
            newTotal = newTotal + (price*quantity)
        })

        setNewTotal(newTotal)
    }

     const confirmOrder = (total) => {

        dispatch({ type: ACTIONS.CONFIRM_CART_ORDER, payload: total})
    
    }

    const sumNavBarItems = () => {
        let count = 0;
        console.log(cart.cart)
        for (let i = 0; i < cart.cart.length; i++) {
            let productQuant = cart.cart[i].quantity;
            count += productQuant
            console.log(count)
        }

        setTotalItemsInCart(count)
    }

    

    const data = {addToCart, removeFromCart, cart, addOneQuantity, reduceOneQuantity, total, confirmOrder, totalItemsInCart}
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }