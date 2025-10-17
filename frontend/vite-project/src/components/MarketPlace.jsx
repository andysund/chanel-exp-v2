import './MarketPlace.css'

import Products from '../assets/data/products.json'

function MarketPlace() {
  return (
    <div className="marketplace">
      {Products.map(product => (

        <div key={product.id} className="product">

                <div className="product-card">
                             <div className="product-image"> 
                             <img className="product-img" src={product.image} alt={product.name} />
                             </div>
                             <div className="product-info">
                             <h3>{product.name}</h3>
                             <p>{product.price} {product.currency}</p>
                                <button>Add to Cart</button>
                             </div>
               </div>



        

        </div>

      ))}
    </div>
  )
}

export default MarketPlace