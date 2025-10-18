import './Cart.css'
import cartbg from '../assets/photos/cartbgnext.jpg'
import cartlandscape from '../assets/photos/cartlandscape.webp'     


function Cart() {
  return (
    <div className="cart" >
        <div className="cart-display">
            <div className="cart-landscape" style={{backgroundImage: `url(${cartlandscape})`}}></div>
            <div className="cart-content"  style={{backgroundImage: `url(${cartbg})`}}></div>
        </div>
    </div>
  )
}

export default Cart