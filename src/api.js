const fetchSwapi = async url => {
  try {
    const fetched = await fetch(url);
    const response = await fetched.json();
    return response;
  } catch (error) {
    return 'fetchSwapi Error';
  }
};

const peopleCards = async () => {
  const people = await fetchSwapi('https://swapi.co/api/people/');
  const peopleCards = people.results.map(async person => {
    const homeworldFetch = await fetchSwapi(person.homeworld);
    const speciesFetch = await fetchSwapi(person.species);
    return {
      name: person.name,
      species: speciesFetch.name,
      homeworld: homeworldFetch.name,
      population: homeworldFetch.population
    };
  });
  return peopleCards;
};

const planetCards = async () => {
  const planets = await fetchSwapi('https://swapi.co/api/planets/');
  const planetCards = planets.results.map(async planet => {
    const residentsArray = await Promise.all(
      planet.residents.map(async resident => {
        const personFetch = await fetchSwapi(resident);
        return personFetch.name;
      })
    );
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residentsArray
    };
  });
  return planetCards;
};

const vehicleCards = async () => {
  const vehicles = await fetchSwapi('https://swapi.co/api/vehicles/');
  const vehicleCards = vehicles.results.map(async vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
  });
  return vehicleCards;
};

const fetchScrollingText = async () => {
  const random = Math.round(Math.random() * 7);
  const crawl = await fetchSwapi(`https://swapi.co/api/films/${random}`);
  const object = await{
    title: crawl.title,
    episodeId: crawl.episode_id,
    openingCrawl: crawl.opening_crawl,
    releaseDate: crawl.release_date
  };
  return object;
};

export default { fetchSwapi, peopleCards, planetCards, vehicleCards, fetchScrollingText };
