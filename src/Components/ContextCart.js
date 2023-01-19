import React, {useContext} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
// import { products } from './Products';
import { CartContext } from './Cart';

const ContextCart = () => {
    // const [item, setItem] = useState(products);

    const {item} = useContext(CartContext);
    if(item.legnth === 0) {
        return (
            <>
            <header>
            <div className='continue-shopping'>
                <img src="./images/arrow.png" alt="arrow" className='arrow-icon'></img>
                <h3>Continue Shopping</h3>
            </div>
            <div className='cart-icon'>
                <img src="./images/cart.png" alt="Cart"/>
                <p>0</p>
            </div>
        </header>

        <section className='main-cart-section'>
            <h1>shopping Cart</h1>
            <p className='total-items'>you have <span className='total-items-count'>0</span> items</p>
        </section>
            </>
        )
    }
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

export default ContextCart;
