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
let celciusTemp = document.querySelector(".celsius");
celciusTemp.addEventListener("click", celciusChange);

//function fahrenheitChange() {
//let temp2 = document.querySelector("#temperature-change");
//emp2.innerHTML = "71.6";
//}

//let fahrenheitTemp = document.querySelector("#faren");
//fahrenheitTemp.addEventListener("click", fahrenheitChange);

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

//function change(event) {
//event.preventDefault();

/* let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();

if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
document.getElementById("date").innerHTML = day + "  " + hours + ":" + minutes;

let form = document.querySelector(" #search-form");

function updatedCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector(" #cityName");
  let usersCity = document.querySelector("#city");
  usersCity.innerHTML = inputCity.value;
  let apiKey = "08d842207dd6970085425c817646c9f4q";
  let unit = "metric";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=${unit}&appid=${apiKey}";
  axios.get(apiUrl).then(updateWeather);
}

form.addEventListener("submit", updatedCity);

// api response for temp and city
function updateWeather(response) {
  // retreiving api city temp
  let temp = document.querySelector("#temperature");
  temp.innerHTML = "Math.round(response.data.main.temp)";

  //  api city name
  document.querySelector("#city").innerHTML = response.data.name;
}
//function submit(event) {
//event.preventDefault();
l; //et city = document.querySelector("#cityName").value;
//searchCity(city);
//}

function location(position) {
  let apiKey = "08d842207dd6970085425c817646c9f4q";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric";

  axios.get(apiUrl).then(updateWeather);
}

function CurrentLocation(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(location);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = currentTime.value;

//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", submit);

let currentLocationButton = document.getElementById("#current");
currentLocationButton.addEventListener("click", CurrentLocation);

searchCity("New York");

/*


function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = minutes;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return day + hours + ":" + minutes;
}

function displayWeatherCondition(response) {
  document.querySelector("#result").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  {
    let apiKey = "bf54175800a55e59e6c4d6461deeef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
}
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName").value;
  searchCity(city);
}
function location(position) {
  let apiKey = "bf54175800a55e59e6c4d6461deeef12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function CurrentLocation(event) {
  event.preventDefault();
  
  navigator.geolocation.getCurrentPosition(location);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submit);

let currentLocationButton = document.getElementById("#current");
currentLocationButton.addEventListener("click", CurrentLocation);

searchCity("New York");
*/
