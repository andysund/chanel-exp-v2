import './Mainframe.css';
import {useState} from 'react';

// 🔹 Imports des images
import backgroundMain from '../assets/photos/background-main.png';
import frontOne from '../assets/photos/front-one.webp';
import lowerOne from '../assets/photos/lower-one.webp';
import sideOne from '../assets/photos/side-one.webp';
import bagOne from '../assets/photos/bag-one.webp';
import frontFull from '../assets/photos/front-full.jpg';
import lowerTwo from '../assets/photos/lower-two.webp';
import frontFour from '../assets/photos/front-four.webp';
import logoClothing from '../assets/photos/chanelSVG.svg'
import fshVideo from '../assets/photos/FSH.webm';

function Mainframe() {

  let photoArrays = [frontOne, lowerOne, sideOne, bagOne, frontFull, lowerTwo, frontFour];

  function getRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photoArrays.length);
    return photoArrays[randomIndex];
  }
  const [currentPhoto, setCurrentPhoto] = useState(getRandomPhoto());
  
  function handleChangePhoto() {
    let newPhoto;
    // S'assurer d'avoir une photo différente
    do {
      newPhoto = getRandomPhoto();
    } while (newPhoto === currentPhoto && photoArrays.length > 1);
    
    setCurrentPhoto(newPhoto);
  }


  return (
    <div
      className="mainframe"
      style={{ backgroundImage: `url(${backgroundMain})` }}
    >
      <div className="mainframe-container"  style={{ backgroundImage: `url(${logoClothing})` }}>
        <div
          className="mainframe-one"
          style={{ backgroundImage: `url(${frontFull})` }}
        >
          
        </div>
        <div
          className="mainframe-two"
          style={{ backgroundImage: `url(${currentPhoto})` }}
          onClick={handleChangePhoto}
        ></div>
        <div
          className="mainframe-three"
          style={{ backgroundImage: `url(${sideOne})` }}
          
        ></div>
        <div
          className="mainframe-one"
          style={{ backgroundImage: `url(${bagOne})` }}
        ></div>
        <div
          className="mainframe-one"
          style={{ backgroundImage: `url(${frontFour})` }}
        ></div>
        <div
          className="mainframe-one"
          style={{ backgroundImage: `url(${lowerTwo})` }}
        ></div>
      </div>
    </div>
  );
}

export default Mainframe;