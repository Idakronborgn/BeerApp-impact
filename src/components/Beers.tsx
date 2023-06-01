import React from "react";
import { useEffect, useState } from 'react'
import Beer from "./Beer";

export type BeerType = {
    id: number;
    name: string;
    image_url: string;
    tagline: string;
  }

  
function Beers() {
    const [beers, setBeers] = useState<BeerType[]>([]);

    useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(json => {
          setBeers(json);
          console.log(json);
          
      });  
  
    },[])
    return (

    <section className="beer-section">
    <ul className="grid-container">
        {beers?.map(beer => (
        <li >
        <Beer {...beer} />
        </li>
    ))};
    </ul>
    </section>
    
    )
    
}

export default Beers;


