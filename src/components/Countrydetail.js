

export default function Countrydetail({countryData, countryName}) {

    return(
        <>
        <h4>The temperature in {countryName}</h4>
        <div> Current temperature: {countryData.main?.temp} Celsius<br></br>
        Feels like: {countryData.main?.feels_like} Celsius <br></br>
        Maximum temperature: {countryData.main?.temp_max} Celsius<br></br>
        Minimum temperature: {countryData.main?.temp_min} Celsius<br></br>
        </div>
        </>
    )
}