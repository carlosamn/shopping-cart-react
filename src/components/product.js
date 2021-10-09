import { Component } from "react";
import Button from "./button";

const styles = {
    img: {
        width: '300px',
        height: '200px',
        
    },
    container: {
        border: "solid 1px #eee",
        padding: '15px'
    }
}

class Product extends Component {
    
    render() {
        const {product, addToCart} = this.props
        return(
            <div style={styles.container}>
                <img  style={styles.img} src={product.img} alt={product.name}/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={()=>addToCart(product)}>Add to cart</Button>
            </div>
        )
    }
}

export default Product