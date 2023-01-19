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
    
     // const [item, setItem] = useState(products);
    return (
        <>
           <CartContext.Provider value={{...state}}>
         
           <ContextCart />
        </CartContext.Provider> 
        </>
    )
}

export default Cart
