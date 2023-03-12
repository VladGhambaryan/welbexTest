import './App.css';
import {NavBar} from "./components/NavBar";
import {Content} from './components/Content'
import {Footer} from './components/Footer'
import smallIcon from './images/small.png'
import normallIcon from './images/normal.png'
import extraSmallIcon from './images/extraSmall.png'
import bigIcon from './images/big.png'
import lightIcon from './images/purpleLight.png'

function App() {

  return (
    <div className="App">
<NavBar/>
<Content/>

<div className='poeIconBig'><img src={bigIcon}/></div>
<div className='poeIconExtraSmall'><img src={extraSmallIcon}/></div>
<div className='poeIconnormal'><img src={normallIcon}/></div>
<div className='poeIconsmall'><img src={smallIcon}/></div>
<div className='purpleLight'><img src={lightIcon}/></div>
<Footer/>
    </div>
  );

}

export default App;