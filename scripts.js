
let weather = {
    "apiKey": "ec748d764642a636a5e61260d5043a2b"
}

const searchBtn = document.querySelector('button');
//! на текущее время
//*https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=ec748d764642a636a5e61260d5043a2b
//!на несколько дней
//*https://api.openweathermap.org/data/2.5/forecast?q=Kiev&units=metric&type=hour&appid=ec748d764642a636a5e61260d5043a2b

searchBtn.addEventListener('click', () => {
    const city = document.querySelector('.weather__right-input').value;
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&type=hour&appid=ec748d764642a636a5e61260d5043a2b`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".weather__main-location").innerHTML = data.city.name;
            document.querySelector(".weather__main-temp").innerHTML = Math.round(data.list[0].main.temp) + "℃";
            document.querySelector(".weather__main-icon").src = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
            document.querySelector(".weather__main-desc").innerHTML = data.list[0].weather[0].description;
            document.querySelector(".details__cloudy-num").innerHTML = data.list[0].clouds.all;
            document.querySelector(".details__humidity-num").innerHTML = data.list[0].main.humidity;
            document.querySelector(".details__wind-num").innerHTML = data.list[0].wind.speed + "m/s";
            document.querySelector(".details__pressure-num").innerHTML = data.list[0].main.pressure;
            document.querySelector(".forecast__date1").innerHTML = data.list[0].dt_txt;
            document.querySelector(".forecast__desc1").innerHTML = data.list[0].weather[0].description;
            document.querySelector(".forecast__temp1").innerHTML = Math.round(data.list[0].main.temp)+ "℃";
            document.querySelector(".forecast__date2").innerHTML = data.list[1].dt_txt;
            document.querySelector(".forecast__desc2").innerHTML = data.list[1].weather[0].description;
            document.querySelector(".forecast__temp2").innerHTML = Math.round(data.list[1].main.temp)+ "℃";
            document.querySelector(".forecast__date3").innerHTML = data.list[2].dt_txt;
            document.querySelector(".forecast__desc3").innerHTML = data.list[2].weather[0].description;
            document.querySelector(".forecast__temp3").innerHTML = Math.round(data.list[2].main.temp)+ "℃";
            document.querySelector(".forecast__date4").innerHTML = data.list[3].dt_txt;
            document.querySelector(".forecast__desc4").innerHTML = data.list[3].weather[0].description;
            document.querySelector(".forecast__temp4").innerHTML = Math.round(data.list[3].main.temp)+ "℃";
            document.querySelector(".forecast__date5").innerHTML = data.list[4].dt_txt;
            document.querySelector(".forecast__desc5").innerHTML = data.list[4].weather[0].description;
            document.querySelector(".forecast__temp5").innerHTML = Math.round(data.list[4].main.temp)+ "℃";
            document.querySelector(".forecast__date6").innerHTML = data.list[5].dt_txt;
            document.querySelector(".forecast__desc6").innerHTML = data.list[5].weather[0].description;
            document.querySelector(".forecast__temp6").innerHTML = Math.round(data.list[5].main.temp)+ "℃";
            document.querySelector(".forecast__date7").innerHTML = data.list[6].dt_txt;
            document.querySelector(".forecast__desc7").innerHTML = data.list[6].weather[0].description;
            document.querySelector(".forecast__temp7").innerHTML = Math.round(data.list[6].main.temp)+ "℃";
            document.querySelector(".forecast__date8").innerHTML = data.list[7].dt_txt;
            document.querySelector(".forecast__desc8").innerHTML = data.list[7].weather[0].description;
            document.querySelector(".forecast__temp8").innerHTML = Math.round(data.list[7].main.temp)+ "℃";
            document.querySelector(".forecast__date9").innerHTML = data.list[8].dt_txt;
            document.querySelector(".forecast__desc9").innerHTML = data.list[8].weather[0].description;
            document.querySelector(".forecast__temp9").innerHTML = Math.round(data.list[8].main.temp)+ "℃";
            document.querySelector(".forecast__date10").innerHTML = data.list[9].dt_txt;
            document.querySelector(".forecast__desc10").innerHTML = data.list[9].weather[0].description;
            document.querySelector(".forecast__temp10").innerHTML = Math.round(data.list[9].main.temp)+ "℃";
        });
})



