import React, {createContext} from 'react'
import './Cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';

export const CartContext = createContext();

const Cart = () => {
    
    const [item, setItem] = useState(products);
    return (
        <>
        <header>
            <div className='continue-shopping'>
                <img src="./images/arrow.png" alt="arrow" className='arrow-icon'></img>
                <h3>Continue Shopping</h3>
            </div>
            <div className='cart-icon'>
                <img src="./images/cart.png" alt="Cart"/>
                <p>7</p>
            </div>
        </header>

        <section className='main-cart-section'>
            <h1>shopping Cart</h1>
            <p className='total-items'>you have <span className='total-items-count'>7</span> items</p>

            <div className='cart-items'>
                <div className='cart-items-container'>
                    <Scrollbars>
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem} />
                            })
                        }
                       
                    </Scrollbars>
                </div>
            </div>
            
            <div className='card-total'>
                <h3>Card Total : <span>2200rs</span></h3>
                <button>checkout</button>
            </div>
        </section>

        </>
    )
}

export default Cart
