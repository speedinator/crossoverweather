import React, {useState, useEffect} from "react";

export default function MyLocation () {

    // if ('geolocation' in navigator) {
    //     console.log('works') /* geolocation is available */
    // } else {
    //     console.log('just not') /* geolocation is available */
    //     /* geolocation IS NOT available */
    //   }
    

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('')
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }
    )}, [])


    https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

    return (
     <div>
        {latitude} {longitude}
     </div>   
    )

    
const lat = latitude

}



