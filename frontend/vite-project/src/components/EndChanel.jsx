import './EndChanel.css'
import gabrielleLogo from '../assets/photos/clogo.png';
import gabrielle from '../assets/photos/gabrielle.jpg';


function EndChanel() {
  return (
    <div className="end-chanel">
       <div className="gabrielle-songs">
        <ul>
          <li>1. "Gabrielle" by Johnny Hallyday</li>
          <li>2. "Chanel" by Frank Ocean</li>
          <li>3. "Vogue" by Madonna</li>
          <li>4. "Fashion" by David Bowie</li>
        </ul>
       </div>

      <div className="gabrielle-frame">

        <div className="gabrielle" style={{ backgroundImage: `url(${gabrielle})` }}>
        </div>
         <div className="gabrielle-chanel-logo" style={{ backgroundImage: `url(${gabrielleLogo})` }}></div>
         </div>
           <div className="gabrielle-songs">
        <ul>
          <li>5. "Style" by Taylor Swift</li>
          <li>6. "Suit & Tie" by Justin Timberlake</li>
          <li>  7. "Material  Girl" by Madonna</li>
          <li>8. "Fashion Killa" by A$AP Rocky</li>
        </ul> 
           </div>

    </div>
  )
}

export default EndChanel