import React from "react";
import { BeerType } from "./Beers";
import Link from 'next/link';



function Beer(beer: BeerType) {
    return (
    
        <Link href={`/${beer.id}`} as={`/${beer.id}`} key={beer.id}>
        <div className="beer-product" 
        key={beer.id} onClick={() => console.log(beer)} > 
        <img src={beer.image_url} alt="beers" width="70"></img>
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        </div>
        </Link>
    
    )
} 
export default Beer;

