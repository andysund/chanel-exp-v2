import './Mainframe.css';

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

function Mainframe() {
  return (
    <div
      className="mainframe"
      style={{ backgroundImage: `url(${backgroundMain})` }}
    >
      <div className="mainframe-container"  style={{ backgroundImage: `url(${logoClothing})` }}>
        <div
          className="mainframe-one"
          style={{ backgroundImage: `url(${frontFull})` }}
        ></div>
        <div
          className="mainframe-two"
          style={{ backgroundImage: `url(${lowerOne})` }}
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