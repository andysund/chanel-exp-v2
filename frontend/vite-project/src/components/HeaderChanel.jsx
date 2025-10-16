import './HeaderChanel.css'
import chanelLogo from '../assets/chanel-logo.svg'
function HeaderChanel() {


  return (
    <>
     <header className="header">
        <div className="logo-icons">
           <div className="logochanel">
            <img className="logo" src ={chanelLogo} alt ="Brand-logo"/>
           </div>
           
           <div className="icons-links">

            <a href="/search" className="icon-link">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="/profile" className="icon-link">
            <i className="fa-regular fa-user"></i>
          </a>
          <a href="/favorites" className="icon-link">
            <i className="fa-regular fa-star"></i>
          </a>
          <a href="/cart" className="icon-link">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
            

           </div>
        </div>
        <div className="sections-links">
            <ul className="sections-names">
                <li>HAUTE COUTURE</li>
                <li>MODE</li>
                <li>HAUTE JOAILLERIE</li>
                <li>JOAILLERIE</li>
                <li>HORLOGERIE</li>
                <li>LUNETTES</li>
                <li>PARFUMS</li>
                <li>MAQUILLAGE</li>
                <li>SOIN</li>
            </ul>
        </div>
     </header>
    </>
  )
}

export default HeaderChanel
