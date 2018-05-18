const fetchSwapi = async url => {
  try {
    const fetched = await fetch(url);
    const response = await fetched.json();
    return response;
  } catch (error) {
    return 'fetchSwapi Error' + error;
  }
};

const peopleCards = async () => {
  const people = await fetchSwapi('https://swapi.co/api/people/');
  const peopleCards = await people.results.map(person => {
    return {
      name: person.name,
      species: person.species[0],
      homeworld: person.homeworld
    };
  });
  return species(peopleCards);
};

//peopleCards Helper Function
const species = async (people) => {
  const peopleCards = await Promise.all(people.map(async person => {
    const speciesFetch = await fetchSwapi(person.species);
    return {
      name: person.name,
      species: speciesFetch.name,
      homeworld: person.homeworld
    };
  }));
  return homeworld(peopleCards);
};

//peopleCards Helper Function
const homeworld = async (people) => {
  const peopleCards = await Promise.all(people.map(async person => {
    const homeworldFetch = await fetchSwapi(person.homeworld);
    return {
      name: person.name,
      species: person.name,
      homeworld: homeworldFetch.name,
      population: homeworldFetch.population
    };
  }));
  return peopleCards;
};

const planetCards = async () => {
  const planets = await fetchSwapi('https://swapi.co/api/planets/');
  const planetCards = planets.results.map(planet => {
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    };
  });
  console.log(planetCards);
  // return residents(planetCards);
};

// const residents = async() => {
//   const residentsArray = await Promise.all(
//     planet.map(async resident => {
//       const personFetch = await fetchSwapi(resident);
//       return {
//         name: planet.name,
//         terrain: planet.terrain,
//         population: planet.population,
//         climate: planet.climate,
//         residents: personFetch.name;
//       };
//     })
//   );
//   return residentsArray.join(', ');
// };

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
  const object = await {
    title: crawl.title,
    episodeId: crawl.episode_id,
    openingCrawl: crawl.opening_crawl,
    releaseDate: crawl.release_date
  };
  return object;
};

export default {
  fetchSwapi,
  peopleCards,
  planetCards,
  vehicleCards,
  fetchScrollingText
};