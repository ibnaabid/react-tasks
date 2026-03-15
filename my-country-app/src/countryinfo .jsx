import { useState } from 'react';
import './country.css';

export default function CountryInfo({name,image,id}){
    const[visited, setVisted] = useState(false);

    function Handler(){
        if(visited){
            setVisted(false)
        }
        else{
            setVisted(true)
        }
    }


    return(
    <div className={`container ${visited ?  "btn" : "btn-not"}`}>
            <img src={image} alt="" srcset="" />
            <p>id : {id}</p>
            <h2>name : {name}</h2>
            <button className='btn' onClick= {Handler}>
                {visited? "visited" : "not visited"}
            </button>

        </div>
    )
}