import { Component } from "react";


const styles = {
    detailCart: {
        backgroundColor: "#fff",
        position: 'absolute',
        marginTop: '10px',
        boxShadow: '1px 5px 5px rgb(0,0,0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: '0'
    },
    ul: {
        margin:0,
        padding:0
    },

    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom:'solid 1px #aaa'
    }
}
class CartDetails extends Component {

    
    render(){

        const { cart } = this.props;
        console.log(cart)
        return(
            <div style={styles.detailCart}>
                <ul style={styles.ul}>
                    { cart.map(x => 
                        <li style={styles.product} key={x.name}>
                            <img alt={x.name} src={x.img} width="50" height="32"/>
                            {x.name} <span>{x.count}</span>
                        </li> 
                    )}
                </ul>
            </div>
        )
    }
}

export default CartDetails