import './EndChanel.css'
import gabrielleLogo from '../assets/photos/clogo.png';
import gabrielle from '../assets/photos/gabrielle.jpg';


function EndChanel() {
  return (
    <div className="end-chanel">

        <div className="gabrielle" style={{ backgroundImage: `url(${gabrielle})` }}>
        </div>
         <div className="gabrielle-chanel-logo" style={{ backgroundImage: `url(${gabrielleLogo})` }}></div>


    </div>
  )
}

export default EndChanel