let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];
  let dat = date.getDate();
   if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${dat}, ${day}, ${hours}:${minutes}`;
}
let data = document.querySelector("#data");
let currTime = formatDate(currentTime);
data.innerHTML = currTime;


//let apiKey = "50c2acd53349fabd54f52b93c8650d37";
//let city = "Sydney";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function showTemperature(response) {
  let cityType = document.querySelector("#h1");
  cityType.innerHTML = response.data.name;
  console.log(response.data.name);
  let temperature = Math.round(response.data.main.temp);
  let tempElem = document.querySelector("#temperature");
  tempElem.innerHTML = temperature;
  let description = response.data.weather[0].description;
  console.log(description);
  let descriptionElem = document.querySelector("#description");
  descriptionElem.innerHTML = description;
  let humidity = response.data.main.humidity;
  console.log(humidity);
  let humidityElem = document.querySelector("#humidity");
  humidityElem.innerHTML = humidity;
  let wind = Math.round(response.data.wind.speed);
  console.log(wind);
  let windElem = document.querySelector("#wind");
  windElem.innerHTML = wind;
  let iconElem = document.querySelector("#icon");
  let iconCode = response.data.weather[0].icon;
  let iconUrl = `icon/${iconCode}.png`;
  iconElem.innerHTML = `<img src=${iconUrl} class="icon" />`;
  getForecast(response.data.name);
} 

function search (city) {
  let apiKey = "50c2acd53349fabd54f52b93c8650d37";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function holdOnSearch (event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}
function getForecast (city) {
    let apiKey = "61e78t5e8da33f463e603bao6f4c1cce";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios (apiUrl).then(displayForecast);
    console.log (apiUrl);
}

function displayForecast (response) {
  console.log(response.data);
  let forecastElem = document.querySelector("#forecast");

 
  let forecastHtml = "";
  response.data.daily.forEach(function (day){
forecastHtml =
forecastHtml+ 
` <div class="row">
    <div class="col-2">
      <div class="forecast-day">Tue</div>
         <div class="forecast-icon"><img src="icon/${day.condition.icon}.png" class="forecast-icon"/></div>
            <div class="forecast-temp">
              <span class="temp-1">${Math.round(day.temperature.maximum)}</span>
              <span class="temp-2">${Math.round(day.temperature.minimum)}</span>
            </div>
      </div>
  </div>`;

  });
forecastElem.innerHTML = forecastHtml;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", holdOnSearch);

search ("Kyiv");


