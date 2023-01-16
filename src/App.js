import MyLocation from './MyLocation';
import React from 'react';
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
      <MyLocation />
    </div>
  );
}

export default App;
