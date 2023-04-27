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
/*
function displayWeatherCondition(response) {
  document.querySelector("#result").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  {
    event.preventDefault();
    let apiKey = "2ff29bed3181c3526c35cc5408037f85";
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
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(location);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submit);

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
*/
