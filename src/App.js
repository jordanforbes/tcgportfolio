import React, {useState, useEffect} from 'react';
import Deck from './Components/Deck';
import Inspect from './Components/Inspect'
import bern from './Assets/Bernie.jpg';
import armjet from './Assets/armjet.jpg'
import './App.css';

function App() {
  const [bigImg, setBigImg] = useState(null);
  
  useEffect(()=>{
    setBigImg(bern);
  })

  const changeBigImg=(img)=>{
    setBigImg(img);
  }
  
  return (
    <div className="App">
      <Deck />
      <Inspect imgSrc={bigImg}/>
    </div>
  );
}

export default App;
