const fetchSwapi = async url => {
  try {
    const fetched = await fetch(url);
    const response = await fetched.json();
    return response;
  } catch (error) {
    this.setState({ errorStatus: 'fetchSwapi Error' });
  }
};

const peopleCards = async () => {
  const people = await fetchSwapi('https://swapi.co/api/people/');
  const peopleCards = people.results.map(async person => {
    let homeworldFetch = await fetchSwapi(person.homeworld);
    let speciesFetch = await fetchSwapi(person.species);
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
        const personFetch = await fetchSwapi(resident)
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

export default { fetchSwapi, peopleCards, planetCards };
