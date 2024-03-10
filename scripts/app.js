const search = document.getElementById("search");
const searchButton = document.getElementById("search__button");
const city = document.getElementById("city");
const text = document.getElementById("text");
const temp = document.getElementById("temp");
const uv = document.getElementById("uv");
const direction = document.getElementById("direction");
const direction2 = document.getElementById("direction2");
const humidity = document.getElementById("humidity");
const visibility = document.getElementById("visibility");
const feelsLike = document.getElementById("feels-like");
const rain = document.getElementById("rain");
const pressure = document.getElementById("pressure");
const icon = document.getElementById("icon");

search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        fetchData(search.value);
    }
});

const fetchData = (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=7291f7a733f440ed98455541241003&q=${city}&aqi=no`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            populateData(data);
        });
};

const populateData = (data) => {
    city.textContent = data.location.name;
    text.textContent = data.current.condition.text;
    icon.src = data.current.condition.icon;
    temp.textContent = data.current.temp_c + "˚";
    uv.textContent = data.current.uv;
    direction.textContent = data.current.wind_kph + " km/h";
    direction2.textContent = data.current.wind_dir;
    humidity.textContent = data.current.humidity + " %";
    visibility.textContent = data.current.vis_km + " km";
    feelsLike.textContent = data.current.feelslike_c + " ˚C";
    rain.textContent = data.current.precip_mm + " %";
    pressure.textContent = data.current.pressure_mb + " hPa";
};

fetchData("Mexico City");
