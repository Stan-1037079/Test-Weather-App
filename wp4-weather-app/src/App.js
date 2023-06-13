import React, {useState} from 'react';
import axios from 'axios';

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="locatie">
            <p>Amsterdam</p>
        </div>
        <div className="temp">
          <h1>30°C</h1>
      </div>
      <div className='beschrijving'>
        <p>Cloudy</p>
      </div>
      </div>
      <div className="bottom"></div>
        <div className='gevoelstemperatuur'>
          <p>32°C</p>
        </div>
        <div className='luchtvochtigheid'>
          <p>34%</p>
        <div className='wind'>
          <p>30km/h</p>
        </div>
      </div>
    </div>  
  </div>
  );
}

export default App;
