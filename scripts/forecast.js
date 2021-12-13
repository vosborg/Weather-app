
const key = 'CQJnEfEDogXlTWeCGslRc4sAgiueCjEH';

// Get weather information
// async --> because we make a request and we that to return a promise
const getWeather = async (id) => {

    const base = 'dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// Get City Information
const getCity = async (city) => {

    const base = 'dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

