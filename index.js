var x = document.getElementsByClassName("div-1");

document.write("Hello World");
console.log(x, document.getElementsByClassName("div-1"))
fetch("https://ipapi.co/json/")
.then(function(response){
   return response.json()
    .then(jsonData=>{
      console.log(jsonData)
      lat = jsonData.latitude
      lon = jsonData.longitude
      Info(lat, lon);
    });
})
.catch(function(error){
console.log("You got an error")
})


function Info(lat, lon){
  console.log(lat, lon)
  const _appId = '7563c579b7ff20a834d7afdb616d45c0'
  const Url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+_appId
  fetch(Url)
    .then(data=>{return data.json()})
    .then(res=>{

      console.log(res)
      console.log(res.main.temp_min, res.main.temp_max)
      console.log(res.wind.speed)
      console.log(res.weather[0].main, res.weather[0].description)
      console.log((res.main.temp -273).toFixed(2))

      x.innerHTML = "temp_min: "+ res.main.temp_min +"temp_max: "+res.main.temp_max + "temprature: "+(res.main.temp -273).toFixed(2)+"weather: " + res.weather[0].main+"Description: "+ res.weather[0].description+"wind speed: "+res.wind.speed;
    })
    .catch(function(error){
      console.log("you had next error", error)
    })
}

