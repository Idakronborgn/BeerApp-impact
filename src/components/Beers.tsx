import React, { Key } from "react";
import { useEffect, useState } from 'react'
import Beer from "./Beer";
import Link from "next/link";
import { FaLongArrowAltRight } from 'react-icons/fa';


export type BeerType = {
    BeerType: Key | null | undefined;
    id: number;
    name: string;
    image_url: string;
    tagline: string;
    to: string;
    first_brewed: string;
    ph: number;
    description: string;
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
      <div className="link-section">
    <p className="default-p-text">All beers</p>
    <Link href="/" className="catelog">To the catelog <FaLongArrowAltRight className='hiArrowIcon'/></Link>
    </div>
    <ul className="grid-container">
        {beers?.slice(0,4).map(beer => (
        <li>
        <Beer {...beer} />
        </li>
    ))};
    </ul>
    </section>
    
    )
    
}

export default Beers;


