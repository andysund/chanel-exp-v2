import './AllItems.css';
import allitemsback from '../assets/photos/allitemsback.png';

function AllItems() {
  return (
    <div className="AllItems" style={{ backgroundImage: `url(${allitemsback})` }}>
     <div className="allitems-content">
        <div className="allitems-display">

            <div className="allitems-cards">
                <div className="cards-video">
                    
                </div>
                <div className="cards-purchase">
                    
                    <div className="cards-purchase-images"></div>
                    <div className="cards-purchase-info"></div>

                    

                </div>
            </div>
        
        </div>
        <div className="allitems-info">   
      <h2>Explore the Full Collection</h2>
      <p>Discover the complete range of our latest fashion pieces, from timeless classics to contemporary styles. Each item is crafted with precision and designed to elevate your wardrobe.</p>
        </div>
     </div>
    </div>
  )
}

export default AllItems