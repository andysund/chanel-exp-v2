import './Diaporama.css'
import backone from '../assets/photos/back-one.webp'
import frontfive from '../assets/photos/front-five.webp'
import bagone from '../assets/photos/bag-one.webp'
import sidetwo from '../assets/photos/side-two.webp'

function Diaporama() {

  return (
    <>

      <div className="diaporama-container">

                <div className="diaporama">

        <div className="diaporama-slide">
            <img src={backone} alt="backone" className="diaporama-slide-img"/>
        </div>

        <div className="diaporama-slide">
              <img src={bagone} alt="bagone" className="diaporama-slide-img"/>
        </div>

        <div className="diaporama-slide">
              <img src={frontfive} alt="frontfive" className="diaporama-slide-img"/>
        </div>
        
        <div className="diaporama-slide">
              <img src={sidetwo} alt="sidetwo" className="diaporama-slide-img"/>
        </div>

             </div>

             <div className="diaporama-title">
                  <h2 className="CHANEL-text">CHANEL</h2>
                <h2 className="FASHION-text">SPRING SUMMER 2026</h2>
             </div>


      </div>

    </>
  )
}

export default Diaporama