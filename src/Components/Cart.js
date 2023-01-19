import React, {createContext} from 'react'
import './Cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const CartContext = createContext();
 
const initialState = {
    item : products,
    totalAmount : 0,
    totalItem : 0,
};

const Cart = () => {
     // const [item, setItem] = useState(products);
     const [state, dispatch] = useReducer(reducer, initialState);
 
   //To remove individual elements from an Item cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload : id,
        });
    };
  //Clear the Cart
    const clearCart = () => {
        return dispatch({type : "CLEAR_CART"});
    };
    
     // const [item, setItem] = useState(products);
    return (
        <>
           <CartContext.Provider value={{...state, removeItem, clearCart}}>
         
           <ContextCart />
        </CartContext.Provider> 
        </>
    )
}

export default Cart
