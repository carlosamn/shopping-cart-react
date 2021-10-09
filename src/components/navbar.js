import { Component } from "react";
import Logo from "./logo";
import Cart from "./cart";

const styles = {
    navbar: {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        hight:'100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '10px 50px 10px',
        boxShadow: '0 2px 3px rgb(0,0,0, 0.1)'
    }
}

class Navbar extends Component {
    
    render(){
        const { isCartVisible, showCart, cart } = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Cart 
                    cart= {cart} 
                    isCartVisible={isCartVisible} 
                    showCart={showCart}/>
            </nav>
            
        )
    }
}
export default Navbar