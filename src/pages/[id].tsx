import { useRouter } from 'next/router';
import beers, { BeerType } from '@/components/Beers';



function BeerDetailPage() {
  const router = useRouter();
  const { id } = router.query; // Henter øllens ID fra URL'en

  // Find øllen baseret på ID i øllisten
  const beer = beers.find((beer: BeerType) => beer.id === null );

  if (!beer) {
    return <div>Øl ikke fundet</div>;
  }

  return (
    <>
      <h1>Detaljesiden for øl {beer.name}</h1>
      <div  key={beer.id}>
        <img src={beer.image_url} alt="beers" width="70" />
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        {/* Vis øllens detaljer her */}
      </div>
    </>
  );
}

export default BeerDetailPage;