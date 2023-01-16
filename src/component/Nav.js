import {useState} from 'react'
import "./Nav.css"
import axios from "axios"


function Nav() {
    
    const [search, setSearch] = useState()
    


 console.log(search)
      
    function weatherSearch(e) {
        e.preventDefault();
        console.log(search); 
    }

 return (
   <div className='nav--container'>
       <div className='nav--logo'>WeatherApp</div>  
         <div className='nav--search'>
             <form>
                 <input type="text" onChange={(e)=> setSearch(e.target.value)}></input>
                 <button onClick={searchLocation}>Search</button>
             </form>
         </div>
   </div>
  )
}

export default Nav