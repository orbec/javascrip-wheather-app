import cities from "../model/Cities";
const initView = () => {
  let datalist = "";
  cities.forEach((element) => {
    const city = element.city.toLowerCase();
    datalist =
      datalist +
      `
        <option value="${city}">${city}</option>
    `;
  });

  return `
        <div class="initial container">
            <fieldset>
                <legend>Provide the city for its weather forecast</legend>
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="search" id="city" name="city" required list="cities">
                    <datalist id=cities>
                    ${datalist}
                    </datalist>
                </div>
            </fieldset>
            <div class="form-buttons">
                <button class="button">Get Weather Forecast</button>
            </div>
        </div>
    `;
};

const setForecastInfo = (forecast) => {
  return `
    <div class="main container">
      <div class="header">
        <button id="new-query">+ New Query</button>
        <h2>${forecast.city}</h2>
        
        <div>
          <div>
            <p><b>Temperature: </b>${forecast.temperature}</p>
            <p><b>Time: </b>${forecast.datetime}</p>
            <p><b>Sunrise: </b>${forecast.sunrise}</p>
          </div>
          <div>
            <p><b>Humidity: </b>${forecast.humidity}</p>
            <p><b>Timezone: </b>${forecast.timezone}</p>
            <p><b>Sunset: </b>${forecast.sunset}</p>
          </div>
        </div>
      </div>
      <div class="content container">
        <div class="header">
          <h2>Conditions: ${forecast.conditions}</h2>
          <h3>${forecast.description}</h3>
        </div>
        <div>
          <h2>Next 5 Days:</h2>
          ${setNextDaysForecast(forecast.nextDays)}
        </div>
      </div>
    </div>
   `;
};

const setNextDaysForecast = (days) => {
  let nextDays = "";

  days.forEach((day) => {
    nextDays = nextDays.concat(`
        <button class="collapsible">Day: ${day.datetime}</button>
        <div class="content">
          <div class="header">
            <p><b>Conditions: </b>${day.conditions}</p>
            <p>${day.description}<p>
            <div>
            <div>
              <p><b>Temperature: </b>${day.temperature}</p>
              <p><b>Sunrise: </b>${day.sunrise}</p>
            </div>
            <div>
              <p><b>Humidity: </b>${day.humidity}</p>
              <p><b>Sunset: </b>${day.sunset}</p>
            </div>
          </div>
        </div>
          </div>
          `);
  });
  return nextDays;
};

const displayLoading = () => {
  return `
      <div id="loading"></div>
    `;
};

export { initView, setForecastInfo, displayLoading };
