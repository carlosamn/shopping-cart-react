import { Component } from "react";

const styles = {
    button: {
        backgroundColor: 'black',
        color: '#fff',
        padding: '15px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
}


class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/>
        )
    }
    
}

export default Button