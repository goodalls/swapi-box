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

export default { fetchSwapi, peopleCards };
