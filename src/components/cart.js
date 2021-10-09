import { Component } from "react";
import BubbleAlert from "./bubbleAlert";
import CartDetails from "./cartDetails"

const styles = {
    button: {
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        color: '#fff',
        backgroundColor: 'green',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: '15px',
        top: '20px'
    }
}

class Cart extends Component {

    render() {
        const { cart, isCartVisible, showCart } = this.props;
        const count = cart.reduce((acc, el) => acc +el.count, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {count !== 0 ?
                    <BubbleAlert value={count}/>
                    : null }
                </span>
                <button onClick={showCart} style={styles.button}>
                    Cart
                </button>
                { isCartVisible ? <CartDetails cart={cart}/> : null }
                
            </div>
        )
    }
}

export default Cart