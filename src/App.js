import './App.css';

import Prenavbar from './components/Prenavbar';
import Navbar from './Navbar';
import Slider from './components/Slider.js';
import {banner} from './data/data.json'


function App() {
  return (

       <div>
          <Prenavbar/>
          <Navbar />
          <Slider start={banner.start}/>
       </div>
  );
}

export default App;
