import React from "react";
import { BeerType } from "./Beers";



function Beer(beer: BeerType) {
    return (
        <>
        
        <div className="beer-product" 
        key={beer.id} onClick={() => console.log(beer)} > 
        <img src={beer.image_url} alt="beers" width="70"></img>
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        </div>
        </>
    )
} 
export default Beer;

