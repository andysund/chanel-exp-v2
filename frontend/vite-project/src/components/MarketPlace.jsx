import './MarketPlace.css'

import Products from '../assets/data/products.json'

// Imports explicites des images présentes dans src/assets/photos
import trenchone from '../assets/photos/trenchone.webp';
import goldbag from '../assets/photos/goldbag.webp';
import cornflower from '../assets/photos/cornflower.webp';
import featherstroke from '../assets/photos/featherstroke.webp';
import winefield from '../assets/photos/winefield.webp';
// Mismatches JSON -> fichiers réels
import wollhug from '../assets/photos/wollhug.webp'; // JSON: wolfhug.webp
import spingpetunia from '../assets/photos/spingpetunia.webp'; // JSON: springpetunia.webp
import sanddress from '../assets/photos/sanddress.webp';
import scottskirt from '../assets/photos/scottskirt.webp';
import sherwood from '../assets/photos/sherwood.webp';
import marketFont from '../assets/photos/mpbackground.webp';

// (Optionnel) placeholder si une clé manque (mettre le fichier dans /public)
const PLACEHOLDER = '/placeholder.png';

// Table de correspondance entre le chemin du JSON et l’import réel
const imageMap = {
  '/assets/photos/trenchone.webp': trenchone,
  '/assets/photos/goldbag.webp': goldbag,
  '/assets/photos/cornflower.webp': cornflower,
  '/assets/photos/featherstroke.webp': featherstroke,
  '/assets/photos/winefield.webp': winefield,
  // Corrections de nom (on mappe le chemin du JSON vers le bon import)
  '/assets/photos/wollhug.webp': wollhug,
  '/assets/photos/spingpetunia.webp': spingpetunia,
  '/assets/photos/sanddress.webp': sanddress,
  '/assets/photos/scottskirt.webp': scottskirt,
  '/assets/photos/sherwood.webp': sherwood,
};

function resolveImage(path) {
  return imageMap[path] ?? PLACEHOLDER;
}


function MarketPlace() {
  return (
    <div className="marketplace" style={{backgroundImage: `url(${marketFont})`}}> 
     

        <div className="products-grid"> 
           {Products.map(product => (
             <div key={product.id} className="product">

                <div className="product-card">
                             <div className="product-image"> 
                             <img className="product-img" src={resolveImage(product.image)} alt={product.name} />
                             </div>
                             <div className="product-info">
                             <h3>{product.name}</h3>
                             <p>{product.price} {product.currency}</p>
                                <button className="add-to-cart">Add to Cart</button>
                             </div>
               </div>
         </div>
           ))}


        

        </div>

      

    </div>
  )
}

export default MarketPlace