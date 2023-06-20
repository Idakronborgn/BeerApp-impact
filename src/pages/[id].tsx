import { useRouter } from 'next/router';
import beers, { BeerType } from '@/components/Beers';
import React from 'react'; 
import Navbar from '@/components/Navbar';
import Link from 'next/link';


export const getStaticPaths = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers/1');
  const data = await res.json();

  const paths = data.map((beer: { id: { toString: () => any; }; }) => {
    return {
      params: { id: beer.id.toString()}
    }
  })
  return {
    paths,
    fallback: false
  }
}

type PageProps = {
  beer: BeerType
}

export const getStaticProps = async (context: { params: { id: any; }; }) => {
  const id = context.params.id;
  const res = await fetch('https://api.punkapi.com/v2/beers/' + id);
  const data = await res.json();
  const firstBeer = data.shift();

  return {
    props: {beer: firstBeer}
  }
}


function BeerDetailPage({beer}: PageProps) {

  return (
    <>
     <Navbar />
      <h1>Detaljesiden for øl {beer.name}</h1>
      <Link href="/" >Go back</Link>
      <div key={beer.id}>
        <img src={beer.image_url} alt="beers" width="70" />
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        <h6>{beer.first_brewed}</h6>
        <p>{beer.ph}</p>
        <p>{beer.description}</p>
      </div>
    
    </>
  );
}

export default BeerDetailPage;