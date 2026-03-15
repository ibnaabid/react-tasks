import { use } from "react";
import CountryInfo from "./countryinfo ";
import './country.css'

export default function Country({apiMessage}){

    const country = use(apiMessage)

    const countryName = country.countries;
    console.log(countryName)

    return(
        <div>
            
            <h2 className="head">All Countries here : {countryName.length}</h2>
     
        <div className="country">
            {
                countryName.map((items)=>
                    <CountryInfo
                    key={items.name?.common}
                    name={items.name?.common}
                    image={items.flags?.flags.png}
                    svg={items.flags?.flags.svg}
                    id={items.ccn3?.ccn3}
                    
                    >

                    </CountryInfo>
                
                )
            }

        </div>
           </div>
    )
}