
const apikey = "8aab0919289ae96e797033e7aa7aee2a";
const apiUrl = "https:api.openweathermap.org/data/2.5/weather?units=matric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkweather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apikey}`);
	const respons = await response.json();
	console.log(response);
    document.querySelector(".city").innerHTML = respons.name;
    document.querySelector(".temp").innerHTML = Math.round(respons.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = respons.main.humidity + "%";
    document.querySelector(".wind").innerHTML = respons.wind.speed + "km/h";

if(respons.weathers[0].main  == "clouds"){
    weatherIcon.src = "images/2pic.webp";


}
else if (respons.weathers[0].main  == "humidity"){
    weatherIcon.src = "images/3pic.webp";
}
else if (respons.weathers[0].main  == "clouds"){
    weatherIcon.src = "images/4pic.webp";
}
else if (respons.weathers[0].main  == "clouds"){
    weatherIcon.src = "images/i pic.webp";
}

	document.querySelector(".weathers").style.display = "block";

}
searchBtn.addEventListener("click", () => {

    checkweather(searchBox.value);
})
