import './App.css'
import HeaderChanel from './components/HeaderChanel.jsx'
import Diaporama from './components/Diaporama.jsx'
import Mainframe from './components/Mainframe.jsx'
import Nextone from './components/Nexton.jsx'
import Runway from './components/Runway.jsx'
import MarketPlace from './components/MarketPlace.jsx'
import Cart from './components/Cart.jsx'

function App() {
 

  return (
    <>
      <div className="main-container">
      <HeaderChanel />
      <Diaporama />
      <Runway />
      <Mainframe />
      <MarketPlace />
      <Nextone />
      <Cart />
     
      </div>
    </>
  )
}

export default App
