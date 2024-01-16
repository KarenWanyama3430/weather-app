import axios from 'axios';

const GetWeatherByCityName = async(CityName,SetCityWeatherData) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://forecast9.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '6fa78c0b7emsh836972a11b8aa14p1a3975jsnddc360e93ccb',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
 

export default GetWeatherByCityNameData
