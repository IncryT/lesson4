function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#cityName");

  let citySearch = document.querySelector("#city");
  citySearch.innerHTML = `${searchInput.value}`;
}

let city = document.querySelector("#search-form");
city.addEventListener("submit", handleSearch);

let time = new Date();

let dateChange = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[time.getDay()];

let hours = time.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = time.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

dateChange.innerHTML = `${day} ${hours}:${minutes}`;

function celciusChange() {
  let temp1 = document.querySelector("#temperature");
  temp1.innerHTML = "22";
}
let celciusTemp = document.querySelector("#celsius");
celciusTemp.addEventListener("click", celciusChange);

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#cityName");
  searchCity(searchInput.value);
}

//
function searchCity(city) {
  let apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let citySearch = document.querySelector("#city");
  citySearch.innerHTML = `${response.data.name}`;
}
