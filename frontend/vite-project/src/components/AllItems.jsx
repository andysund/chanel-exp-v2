import './AllItems.css';
import allitemsback from '../assets/photos/allitemsback.png';
import models from '../assets/data/models.json';
import chanelBG from '../assets/photos/chanelBlueBackground.jpg'

// Mappe toutes les ressources sous src/assets/photos/ en URLs bundlées
const assets = import.meta.glob('../assets/photos/**/*', { eager: true, as: 'url' });

function resolveAsset(path) {
  if (!path) return '';
  // Les chemins du JSON commencent par "/assets/photos/..." -> clé attendue: "../assets/photos/..."
  const key = path.startsWith('/') ? `..${path}` : path;
  return assets[key] ?? path; // fallback sur path brut si non trouvé
}

function AllItems() {
  return (
    <div className="AllItems" style={{ backgroundImage: `url(${allitemsback})` }}>
     <div className="allitems-content">
        <div className="allitems-display">
          <div className="allitems-cards" style={{ backgroundImage: `url(${chanelBG})` }}>
            {models.map((m) => (
              <div key={m.id} className="card">
                <div className="cards-video">
                  {m.video ? (
                    <video
                      src={resolveAsset(m.video)}
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : null}
                </div>
                <div className="cards-purchase">
                  <div
                    className={`cards-purchase-images ${
                      m.pictures && m.pictures.length > 3 ? 'scroll' : 'row'
                    }`}
                  >
                    {m.pictures?.map((img, idx) => (
                      <img
                        key={idx}
                        src={resolveAsset(img)}
                        alt={`${m.name} ${idx + 1}`}
                        className="cards-purchase-img"
                      />
                    ))}
                  </div>
                  <div className="cards-purchase-info">
                    <span className="model-name">{m.name}</span>
                    <span className="model-price">{m.price} EUR</span>
                  </div>
                </div>
              </div>
            ))}
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