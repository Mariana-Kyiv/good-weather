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



function search(event) {
  event.preventDefault();
  let cityType = document.querySelector("#h1");
  let cityInput = document.querySelector("#city-input");
  cityType.innerHTML = cityInput.value;

  let apiKey = "50c2acd53349fabd54f52b93c8650d37";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
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
  //let iconCode = response.data.weather[0].icon;
  //let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  //iconElem.innerHTML = iconUrl;

 }


