import './App.css'
import HeaderChanel from './components/HeaderChanel.jsx'
import Diaporama from './components/Diaporama.jsx'
import Mainframe from './components/Mainframe.jsx'
import Nextone from './components/Nexton.jsx'
import Runway from './components/Runway.jsx'
import MarketPlace from './components/MarketPlace.jsx'

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
     
      </div>
    </>
  )
}

export default App
