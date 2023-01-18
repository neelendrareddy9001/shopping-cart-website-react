import React, {createContext} from 'react'
import './Cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';

export const CartContext = createContext();

const Cart = () => {
     // const [item, setItem] = useState(products);
    
    const [item, setItem] = useState(products);
    return (
        <>
           <CartContext.Provider value={products}>
           <ContextCart />
        </CartContext.Provider> 
        </>
    )
}

export default Cart
