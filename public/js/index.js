console.log("Client side js loaded");

//targeting all current field
let cTemp = document.querySelector("#cTemp");
let cCondition = document.querySelector("#cCondition");
let cWindSpeed = document.querySelector("#cWindSpeed");
let cWindDirection = document.querySelector("#cWindDirection");
let cHumidity = document.querySelector("#cHumidity");
let cCloud = document.querySelector("#cCloud");
let cRealFeel = document.querySelector("#cRealFeel");
let cAirIndex = document.querySelector("#cAirIndex");
let cConditionImg = document.querySelector("#cConditionImg");
let cName = document.querySelector("#cName");
let cCountry = document.querySelector("#cCountry");
let cRegion = document.querySelector("#cRegion");

//targeting next day
let tCondition = document.querySelector("#tCondition");
let tMaxTemp = document.querySelector("#tMaxTemp");
let tMinTemp = document.querySelector("#tMinTemp");
let tAvgTemp = document.querySelector("#tAvgTemp");
let tMaxWindSpeed = document.querySelector("#tMaxWindSpeed");
let tRainChance = document.querySelector("#tRainChance");
let tSunRise = document.querySelector("#tSunRise");
let tSunSet = document.querySelector("#tSunSet");
//targeting next day hourly divs
let hour1Img = document.querySelector("#hour1Img");
let hour1Condition = document.querySelector("#hour1Condition");
let hour5Img = document.querySelector("#hour5Img");
let hour5Condition = document.querySelector("#hour5Condition");
let hour9Img = document.querySelector("#hour9Img");
let hour9Condition = document.querySelector("#hour9Condition");

let hour13Img = document.querySelector("#hour13Img");
let hour13Condition = document.querySelector("#hour13Condition");
let hour17Img = document.querySelector("#hour17Img");
let hour17Condition = document.querySelector("#hour17Condition");

let hour20Img = document.querySelector("#hour20Img");
let hour20Condition = document.querySelector("#hour20Condition");

let hour23Img = document.querySelector("#hour23Img");
let hour23Condition = document.querySelector("#hour23Condition");
//2nd day data
let sCondition = document.querySelector("#sCondition");
let sMaxTemp = document.querySelector("#sMaxTemp");
let sMinTemp = document.querySelector("#sMinTemp");
let sAvgTemp = document.querySelector("#sAvgTemp");
let sMaxWindSpeed = document.querySelector("#sMaxWindSpeed");
let sRainChance = document.querySelector("#sRainChance");
let sSunRise = document.querySelector("#sSunRise");
let sSunSet = document.querySelector("#sSunSet");

let shour1Img = document.querySelector("#shour1Img");
let shour1Condition = document.querySelector("#shour1Condition");

let shour5Img = document.querySelector("#shour5Img");
let shour5Condition = document.querySelector("#shour5Condition");

let shour9Img = document.querySelector("#shour9Img");
let shour9Condition = document.querySelector("#shour9Condition");

let shour13Img = document.querySelector("#shour13Img");
let shour13Condition = document.querySelector("#shour13Condition");

let shour17Img = document.querySelector("#shour17Img");
let shour17Condition = document.querySelector("#shour17Condition");

let shour20Img = document.querySelector("#shour20Img");
let shour20Condition = document.querySelector("#shour20Condition");

let shour23Img = document.querySelector("#shour23Img");
let shour23Condition = document.querySelector("#shour23Condition");
//3rd day
let thCondition = document.querySelector("#thCondition");
let thMaxTemp = document.querySelector("#thMaxTemp");
let thMinTemp = document.querySelector("#thMinTemp");
let thAvgTemp = document.querySelector("#thAvgTemp");
let thMaxWindSpeed = document.querySelector("#thMaxWindSpeed");
let thRainChance = document.querySelector("#thRainChance");
let thSunRise = document.querySelector("#thSunRise");
let thSunSet = document.querySelector("#thSunSet");

let thhour1Img = document.querySelector("#thhour1Img");
let thhour1Condition = document.querySelector("#thhour1Condition");

let thhour5Img = document.querySelector("#thhour5Img");
let thhour5Condition = document.querySelector("#thhour5Condition");

let thhour9Img = document.querySelector("#thhour9Img");
let thhour9Condition = document.querySelector("#thhour9Condition");

let thhour13Img = document.querySelector("#thhour13Img");
let thhour13Condition = document.querySelector("#thhour13Condition");

let thhour17Img = document.querySelector("#thhour17Img");
let thhour17Condition = document.querySelector("#thhour17Condition");

let thhour20Img = document.querySelector("#thhour20Img");
let thhour20Condition = document.querySelector("#thhour20Condition");

let thhour23Img = document.querySelector("#thhour23Img");
let thhour23Condition = document.querySelector("#thhour23Condition");
//target dates
let cDate = document.querySelector("#cDate");
let tDate = document.querySelector("#tDate");
let tDate2 = document.querySelector("#tDate2");
let sDate = document.querySelector("#sDate");
let sDate2 = document.querySelector("#sDate2");
let thDate2 = document.querySelector("#thDate2");
let thDate = document.querySelector("#thDate");
//target weather form
let weatherForm = document.querySelector("#weatherForm");
//targeting divs to display date properly
let displayUserData = document.querySelector("#displayUserData");
let dataStatusMsg = document.querySelector("#dataStatusMsg");
//FLAGS
let displayFlag = 0;
//UNCOMMENT BELOW LINE TO FETCH DATA
// fetch("/weather-data").then((response) => {
//   response.json().then((data) => {
//     //set date
//     let cDateString = data.location.localtime;
//     var stringArray = cDateString.split(/(\s+)/);
//     let date = stringArray[0];

//     cDate.innerHTML = date;
//     tDate.innerHTML = data.forecast.forecastday[0].date;
//     tDate2.innerHTML = data.forecast.forecastday[0].date;
//     sDate.textContent = data.forecast.forecastday[1].date;
//     sDate2.textContent = data.forecast.forecastday[1].date;
//     thDate.textContent = data.forecast.forecastday[2].date;
//     thDate2.textContent = data.forecast.forecastday[2].date;
//     //todays data
//     cTemp.textContent = data.current.temp_c;
//     cCondition.textContent = data.current.condition.text;
//     cWindSpeed.textContent = data.current.wind_kph;
//     cWindDirection.textContent = data.current.wind_dir;
//     cHumidity.textContent = data.current.humidity;
//     cCloud.textContent = data.current.cloud;
//     cRealFeel.textContent = data.current.feelslike_c;
//     cAirIndex.textContent = data.current.air_quality["gb-defra-index"];
//     cConditionImg.src = data.current.condition.icon;
//     cName.textContent = data.location.name;
//     cRegion.textContent = data.location.region;
//     cCountry.textContent = data.location.country;
//     //tommrows data
//     tCondition.textContent = data.forecast.forecastday[0].day.condition.text;
//     tMaxTemp.textContent = data.forecast.forecastday[0].day.maxtemp_c;
//     tMinTemp.textContent = data.forecast.forecastday[0].day.mintemp_c;
//     tAvgTemp.textContent = data.forecast.forecastday[0].day.avgtemp_c;
//     tMaxWindSpeed.textContent = data.forecast.forecastday[0].day.maxwind_kph;
//     tRainChance.textContent =
//       data.forecast.forecastday[0].day.daily_chance_of_rain;
//     tSunRise.textContent = data.forecast.forecastday[0].astro.sunrise;
//     tSunSet.textContent = data.forecast.forecastday[0].astro.sunset;

//     hour1Img.src = data.forecast.forecastday[0].hour[0].condition.icon;
//     hour1Condition.textContent =
//       data.forecast.forecastday[0].hour[0].condition.text;

//     hour5Img.src = data.forecast.forecastday[0].hour[5].condition.icon;
//     hour5Condition.textContent =
//       data.forecast.forecastday[0].hour[5].condition.text;

//     hour9Img.src = data.forecast.forecastday[0].hour[9].condition.icon;
//     hour9Condition.textContent =
//       data.forecast.forecastday[0].hour[9].condition.text;

//     hour13Img.src = data.forecast.forecastday[0].hour[13].condition.icon;
//     hour13Condition.textContent =
//       data.forecast.forecastday[0].hour[13].condition.text;

//     hour17Img.src = data.forecast.forecastday[0].hour[17].condition.icon;
//     hour17Condition.textContent =
//       data.forecast.forecastday[0].hour[17].condition.text;

//     hour20Img.src = data.forecast.forecastday[0].hour[20].condition.icon;
//     hour20Condition.textContent =
//       data.forecast.forecastday[0].hour[20].condition.text;

//     hour23Img.src = data.forecast.forecastday[0].hour[23].condition.icon;
//     hour23Condition.textContent =
//       data.forecast.forecastday[0].hour[23].condition.text;
//     //2nd day data
//     sCondition.textContent = data.forecast.forecastday[1].day.condition.text;
//     sMaxTemp.textContent = data.forecast.forecastday[1].day.maxtemp_c;
//     sMinTemp.textContent = data.forecast.forecastday[1].day.mintemp_c;
//     sAvgTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c;
//     sMaxWindSpeed.textContent = data.forecast.forecastday[1].day.maxwind_kph;
//     sRainChance.textContent =
//       data.forecast.forecastday[1].day.daily_chance_of_rain;
//     sSunRise.textContent = data.forecast.forecastday[1].astro.sunrise;
//     sSunSet.textContent = data.forecast.forecastday[1].astro.sunset;
//     shour1Img.src = data.forecast.forecastday[1].hour[0].condition.icon;
//     shour1Condition.textContent =
//       data.forecast.forecastday[1].hour[0].condition.text;

//     shour5Img.src = data.forecast.forecastday[1].hour[5].condition.icon;
//     shour5Condition.textContent =
//       data.forecast.forecastday[1].hour[5].condition.text;

//     shour9Img.src = data.forecast.forecastday[1].hour[9].condition.icon;
//     shour9Condition.textContent =
//       data.forecast.forecastday[1].hour[9].condition.text;

//     shour13Img.src = data.forecast.forecastday[1].hour[13].condition.icon;
//     shour13Condition.textContent =
//       data.forecast.forecastday[1].hour[13].condition.text;

//     shour17Img.src = data.forecast.forecastday[1].hour[17].condition.icon;
//     shour17Condition.textContent =
//       data.forecast.forecastday[1].hour[17].condition.text;

//     shour20Img.src = data.forecast.forecastday[1].hour[20].condition.icon;
//     shour20Condition.textContent =
//       data.forecast.forecastday[1].hour[20].condition.text;

//     shour23Img.src = data.forecast.forecastday[1].hour[23].condition.icon;
//     shour23Condition.textContent =
//       data.forecast.forecastday[1].hour[23].condition.text;
//     //3rd day data
//     thCondition.textContent = data.forecast.forecastday[2].day.condition.text;
//     thMaxTemp.textContent = data.forecast.forecastday[2].day.maxtemp_c;
//     thMinTemp.textContent = data.forecast.forecastday[2].day.mintemp_c;
//     thAvgTemp.textContent = data.forecast.forecastday[2].day.avgtemp_c;
//     thMaxWindSpeed.textContent = data.forecast.forecastday[2].day.maxwind_kph;
//     thRainChance.textContent =
//       data.forecast.forecastday[2].day.daily_chance_of_rain;
//     thSunRise.textContent = data.forecast.forecastday[2].astro.sunrise;
//     thSunSet.textContent = data.forecast.forecastday[2].astro.sunset;

//     thhour1Img.src = data.forecast.forecastday[2].hour[0].condition.icon;
//     thhour1Condition.textContent =
//       data.forecast.forecastday[2].hour[0].condition.text;

//     thhour5Img.src = data.forecast.forecastday[2].hour[5].condition.icon;
//     thhour5Condition.textContent =
//       data.forecast.forecastday[2].hour[5].condition.text;

//     thhour9Img.src = data.forecast.forecastday[2].hour[9].condition.icon;
//     thhour9Condition.textContent =
//       data.forecast.forecastday[2].hour[9].condition.text;

//     thhour13Img.src = data.forecast.forecastday[2].hour[13].condition.icon;
//     thhour13Condition.textContent =
//       data.forecast.forecastday[2].hour[13].condition.text;

//     thhour17Img.src = data.forecast.forecastday[2].hour[17].condition.icon;
//     thhour17Condition.textContent =
//       data.forecast.forecastday[2].hour[17].condition.text;

//     thhour20Img.src = data.forecast.forecastday[2].hour[20].condition.icon;
//     thhour20Condition.textContent =
//       data.forecast.forecastday[2].hour[20].condition.text;

//     thhour23Img.src = data.forecast.forecastday[2].hour[23].condition.icon;
//     thhour23Condition.textContent =
//       data.forecast.forecastday[2].hour[23].condition.text;
//   });
// });

//adding eventlistner
weatherForm.addEventListener("submit", (e) => {
  displayFlag = 0;
  e.preventDefault();
  //datastatus msg="loading"
  if (displayFlag === 0) {
    dataStatusMsg.textContent = "loading...";
    displayUserData.style.display = "none";
  }
  const searchedLocation = document.querySelector("#searchedLocation");
  const location = searchedLocation.value;

  fetch("/weather-data?address=" + encodeURIComponent(location)).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          // error occured

          if (data.error.code === 1003) {
            //display msg in dataStatusMsg div
            return (dataStatusMsg.textContent = "Please enter a location...");
          } else if (data.error.code === 1006) {
            //display msg in dataStatusMsg div
            dataStatusMsg.textContent = "Please enter a valid location...";
          } else {
            //display msg in dataStatusMsg div
            dataStatusMsg.textContent = "We are facing some technical issue...";
          }
        } else {
          displayFlag = 1;
          if (displayFlag === 1) {
            //no error
            // set data status msg empty
            dataStatusMsg.textContent = "";
            //display user data div
            displayUserData.style.display = "block";
            //set date
            let cDateString = data.location.localtime;
            var stringArray = cDateString.split(/(\s+)/);
            let date = stringArray[0];

            cDate.innerHTML = date;
            tDate.innerHTML = data.forecast.forecastday[0].date;
            tDate2.innerHTML = data.forecast.forecastday[0].date;
            sDate.textContent = data.forecast.forecastday[1].date;
            sDate2.textContent = data.forecast.forecastday[1].date;
            thDate.textContent = data.forecast.forecastday[2].date;
            thDate2.textContent = data.forecast.forecastday[2].date;
            //todays data
            cTemp.textContent = data.current.temp_c;
            cCondition.textContent = data.current.condition.text;
            cWindSpeed.textContent = data.current.wind_kph;
            cWindDirection.textContent = data.current.wind_dir;
            cHumidity.textContent = data.current.humidity;
            cCloud.textContent = data.current.cloud;
            cRealFeel.textContent = data.current.feelslike_c;
            cAirIndex.textContent = data.current.air_quality["gb-defra-index"];
            cConditionImg.src = data.current.condition.icon;
            cName.textContent = data.location.name;
            cRegion.textContent = data.location.region;
            cCountry.textContent = data.location.country;
            //tommrows data
            tCondition.textContent =
              data.forecast.forecastday[0].day.condition.text;
            tMaxTemp.textContent = data.forecast.forecastday[0].day.maxtemp_c;
            tMinTemp.textContent = data.forecast.forecastday[0].day.mintemp_c;
            tAvgTemp.textContent = data.forecast.forecastday[0].day.avgtemp_c;
            tMaxWindSpeed.textContent =
              data.forecast.forecastday[0].day.maxwind_kph;
            tRainChance.textContent =
              data.forecast.forecastday[0].day.daily_chance_of_rain;
            tSunRise.textContent = data.forecast.forecastday[0].astro.sunrise;
            tSunSet.textContent = data.forecast.forecastday[0].astro.sunset;

            hour1Img.src = data.forecast.forecastday[0].hour[0].condition.icon;
            hour1Condition.textContent =
              data.forecast.forecastday[0].hour[0].condition.text;

            hour5Img.src = data.forecast.forecastday[0].hour[5].condition.icon;
            hour5Condition.textContent =
              data.forecast.forecastday[0].hour[5].condition.text;

            hour9Img.src = data.forecast.forecastday[0].hour[9].condition.icon;
            hour9Condition.textContent =
              data.forecast.forecastday[0].hour[9].condition.text;

            hour13Img.src =
              data.forecast.forecastday[0].hour[13].condition.icon;
            hour13Condition.textContent =
              data.forecast.forecastday[0].hour[13].condition.text;

            hour17Img.src =
              data.forecast.forecastday[0].hour[17].condition.icon;
            hour17Condition.textContent =
              data.forecast.forecastday[0].hour[17].condition.text;

            hour20Img.src =
              data.forecast.forecastday[0].hour[20].condition.icon;
            hour20Condition.textContent =
              data.forecast.forecastday[0].hour[20].condition.text;

            hour23Img.src =
              data.forecast.forecastday[0].hour[23].condition.icon;
            hour23Condition.textContent =
              data.forecast.forecastday[0].hour[23].condition.text;
            //2nd day data
            sCondition.textContent =
              data.forecast.forecastday[1].day.condition.text;
            sMaxTemp.textContent = data.forecast.forecastday[1].day.maxtemp_c;
            sMinTemp.textContent = data.forecast.forecastday[1].day.mintemp_c;
            sAvgTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c;
            sMaxWindSpeed.textContent =
              data.forecast.forecastday[1].day.maxwind_kph;
            sRainChance.textContent =
              data.forecast.forecastday[1].day.daily_chance_of_rain;
            sSunRise.textContent = data.forecast.forecastday[1].astro.sunrise;
            sSunSet.textContent = data.forecast.forecastday[1].astro.sunset;
            shour1Img.src = data.forecast.forecastday[1].hour[0].condition.icon;
            shour1Condition.textContent =
              data.forecast.forecastday[1].hour[0].condition.text;

            shour5Img.src = data.forecast.forecastday[1].hour[5].condition.icon;
            shour5Condition.textContent =
              data.forecast.forecastday[1].hour[5].condition.text;

            shour9Img.src = data.forecast.forecastday[1].hour[9].condition.icon;
            shour9Condition.textContent =
              data.forecast.forecastday[1].hour[9].condition.text;

            shour13Img.src =
              data.forecast.forecastday[1].hour[13].condition.icon;
            shour13Condition.textContent =
              data.forecast.forecastday[1].hour[13].condition.text;

            shour17Img.src =
              data.forecast.forecastday[1].hour[17].condition.icon;
            shour17Condition.textContent =
              data.forecast.forecastday[1].hour[17].condition.text;

            shour20Img.src =
              data.forecast.forecastday[1].hour[20].condition.icon;
            shour20Condition.textContent =
              data.forecast.forecastday[1].hour[20].condition.text;

            shour23Img.src =
              data.forecast.forecastday[1].hour[23].condition.icon;
            shour23Condition.textContent =
              data.forecast.forecastday[1].hour[23].condition.text;
            //3rd day data
            thCondition.textContent =
              data.forecast.forecastday[2].day.condition.text;
            thMaxTemp.textContent = data.forecast.forecastday[2].day.maxtemp_c;
            thMinTemp.textContent = data.forecast.forecastday[2].day.mintemp_c;
            thAvgTemp.textContent = data.forecast.forecastday[2].day.avgtemp_c;
            thMaxWindSpeed.textContent =
              data.forecast.forecastday[2].day.maxwind_kph;
            thRainChance.textContent =
              data.forecast.forecastday[2].day.daily_chance_of_rain;
            thSunRise.textContent = data.forecast.forecastday[2].astro.sunrise;
            thSunSet.textContent = data.forecast.forecastday[2].astro.sunset;

            thhour1Img.src =
              data.forecast.forecastday[2].hour[0].condition.icon;
            thhour1Condition.textContent =
              data.forecast.forecastday[2].hour[0].condition.text;

            thhour5Img.src =
              data.forecast.forecastday[2].hour[5].condition.icon;
            thhour5Condition.textContent =
              data.forecast.forecastday[2].hour[5].condition.text;

            thhour9Img.src =
              data.forecast.forecastday[2].hour[9].condition.icon;
            thhour9Condition.textContent =
              data.forecast.forecastday[2].hour[9].condition.text;

            thhour13Img.src =
              data.forecast.forecastday[2].hour[13].condition.icon;
            thhour13Condition.textContent =
              data.forecast.forecastday[2].hour[13].condition.text;

            thhour17Img.src =
              data.forecast.forecastday[2].hour[17].condition.icon;
            thhour17Condition.textContent =
              data.forecast.forecastday[2].hour[17].condition.text;

            thhour20Img.src =
              data.forecast.forecastday[2].hour[20].condition.icon;
            thhour20Condition.textContent =
              data.forecast.forecastday[2].hour[20].condition.text;

            thhour23Img.src =
              data.forecast.forecastday[2].hour[23].condition.icon;
            thhour23Condition.textContent =
              data.forecast.forecastday[2].hour[23].condition.text;
          }
        }
      });
    }
  );
});
