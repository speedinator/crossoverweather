import MyLocation from './MyLocation';
import React, { useState, useEffect } from 'react';
// import test from MyLocation

function App() {
  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('')
  
  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
      }
  )}, [])


  
  
  return (
    <div className="App">
      {longitude} {latitude}
    </div>
  );
}

export default App;
