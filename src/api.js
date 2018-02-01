const fetchSwapi = async url => {
  try {
    const fetched = await fetch(url);
    const response = await fetched.json();
    return response;
  } catch (error) {
    this.setState({ errorStatus: 'fetchSwapi Error' });
  }
};

export default {fetchSwapi};
