import './Mainframe.css';

// 🔹 Imports des images
import backgroundMain from '../assets/photos/background-main.png';
import frontOne from '../assets/photos/front-one.webp';
import lowerOne from '../assets/photos/lower-one.webp';
import sideOne from '../assets/photos/side-one.webp';

function Mainframe() {
  return (
    <div
      className="mainframe"
      style={{ backgroundImage: `url(${backgroundMain})` }}
    >
      <div className="mainframe-container">
        <div
          className="mainframe-one"
          style={{ backgroundImage: `url(${frontOne})` }}
        ></div>
        <div
          className="mainframe-two"
          style={{ backgroundImage: `url(${lowerOne})` }}
        ></div>
        <div
          className="mainframe-three"
          style={{ backgroundImage: `url(${sideOne})` }}
        ></div>
      </div>
    </div>
  );
}

export default Mainframe;