const apikey = "113b8ef96513b3b203f7b7833df08137";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weathericon = document.querySelector(".weathericon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/H";
  console.log("woking");

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "img/rain (2).png";
  }
  else if (data.weather[0].main == "Clear") {
    weathericon.src = "img/rain (6).png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "img/rain (1).png";
  }
  else if (data.weather[0].main == "Mist") {
    weathericon.src = "img/rain (5).png";
  }
  else if (data.weather[0].main == "Rain") {
    weathericon.src = "img/storm.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";

  }
  
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});