import { apis } from "../model/APIs";

const getApiData = async (URL, options) => {
  let response;
  if (!options) {
    response = await fetch(URL);
  } else {
    console.log(options);
  }

  return await response.json();
};

const getWeather = async (city) => {
  const weatherAPI = apis.find((element) => element.id === "weather");

  let urlParams = "";

  weatherAPI.queryStrings.forEach(
    (element) => (urlParams = `${urlParams}&${element.key}=${element.value}`)
  );

  const url = `${weatherAPI.endpoint}/${city}?${urlParams.slice(1)}`;
  const response = await getApiData(url);

  const days = [];

  for (let i = 1; i <= 5; i++) {
    days.push({
      conditions: response.days[i].conditions,
      datetime: response.days[i].datetime,
      humidity: response.days[i].humidity,
      sunrise: response.days[i].sunrise,
      sunset: response.days[i].sunset,
      temperature: response.days[i].temp,
      description: response.days[i].description,
    });
  }

  return {
    conditions: response.currentConditions.conditions,
    datetime: response.currentConditions.datetime,
    humidity: response.currentConditions.humidity,
    sunrise: response.currentConditions.sunrise,
    sunset: response.currentConditions.sunset,
    temperature: response.currentConditions.temp,
    nextDays: days,
    description: response.description,
    city: response.resolvedAddress,
    timezone: `${response.timezone} GMT${response.tzoffset}`,
  };
};

export { getWeather };
