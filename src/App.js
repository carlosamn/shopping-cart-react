import {Component} from 'react'
import Products from './components/products'
import Layout from './components/layout'
import Title from './components/title'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    products: [
      {name: 'notebook', price: 1000, img: '/assets/notebook.jpg'},
      {name: 'desktop', price: 6000, img: '/assets/desktop.png'},
      {name: 'kindle', price: 4000, img: '/assets/kindle.jpg'}
    ],
    cart: [],
    isCartVisible: false
  }
  
  showCart = () => {
    if(!this.state.cart.length) {
      return 
    }
    this.setState({
      isCartVisible: !this.state.isCartVisible
    })
  }
  addToCart = (product) => {
    const { cart } = this.state;
    if( cart.find(x => x.name === product.name )) {
      const newCart = cart.map(x => x.name === product.name ? ({
        ...x,
        count: x.count + 1
      }): x)
      return this.setState({ cart: newCart })
    }
    
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        count: 1
      })
    })
  } 
  render() {
    const { isCartVisible } = this.state
    return(

      <div>
        <Navbar 
          cart= { this.state.cart } 
          isCartVisible={ isCartVisible } 
          showCart={this.showCart}/>
        <Layout>
        <Title/>
        <Products
          addToCart={this.addToCart}
          products={this.state.products}
        />
        </Layout>
      </div>
    )
  }
}


export default App;
