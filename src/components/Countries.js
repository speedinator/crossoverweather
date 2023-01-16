import { useEffect, useState } from "react";
import axios from "axios"
import Countrydetail from "./Countrydetail";

export default function Countries () {

    const [country, setCountry] = useState('paris,fr')
    const [countryData, setCountryData] = useState('')
    const [showData, setShowData] = useState(false)
    const [countryName, setCountryName] = useState('')

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=7510444d4298f1d3ad1bfbac62dcc286`)
        .then((response) => {
        setCountryData(response.data);
        console.log(countryData); 

        })
        .catch((err) => {
        console.log(err);
        });
        },
        [country]);

        const handleGetCountry = (e) => {
            console.log(e.target.value)
            setCountry(e.target.value)
            setShowData(true)
            setCountryName(e.target.innerText)
        }
        

    return(
        <>
            <div class="btn-group-vertical countries" role="group" aria-label="Vertical button group">
            <button type="button" className="btn btn-secondary" onClick={handleGetCountry}value="berlin,de">Germany</button>
            <button type="button" className="btn btn-secondary" onClick={handleGetCountry}value="paris,fr">France</button>
            <button type="button" className="btn btn-secondary" onClick={handleGetCountry}value="rom,it">Italy</button>
            <button type="button" className="btn btn-secondary" onClick={handleGetCountry}value="vienna,at">Austria</button>
            <button type="button" className="btn btn-secondary" onClick={handleGetCountry}value="basel,ch">Switzerland</button>
            <button type="button" className="btn btn-secondary" onClick={handleGetCountry}value="madrid,es">Spain</button>
            </div>
            <div className={showData ? '' : 'hidden'}>
            <Countrydetail countryData={countryData} countryName={countryName} />
            </div>
        </>
    )
}