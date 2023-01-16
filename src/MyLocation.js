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




    return (
     <div>
        {latitude} {longitude}
     </div>   
    )

    
const lat = latitude

}



