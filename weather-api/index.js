document.addEventListener("DOMContentLoaded",function(){
   let cityInput =  document.getElementById("city-input")
   let getInputBtn = document.getElementById("city-btn") 
   let cityName = document.getElementById("city-name")
   let Winfo = document.getElementById("weather-info")
   let tempreture = document.getElementById("tempreture")
   let desciption = document.getElementById("desciption")
   let errMsg = document.getElementById("error-message")

   const apiKey = "043d775049a1d9b3b1f756884e7c404e"

   getInputBtn.addEventListener("click", async () => {
      if(!cityInput) return ;
      let city = cityInput.value.trim()

      try{
         let data = await fetchWeather(city)
         displayData(data)
         cityInput.value = ""
      }catch(error){
         console.log("ERROR:",error)
         showError()
      }
   })

  async function  fetchWeather(city){
   try{
      let response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      if(!response.ok) {
         showError()
      }
      let data = response.json()
      console.log(data)
      return data
   }catch(err){
      console.log("ERROR:While Fetching data:",err)
   }

   }

   function displayData(data){
      

      cityName.innerHTML = `City: ${data.name}`;
      tempreture.innerHTML = `Tempreture: ${data.main.temp} °C`;
      desciption.innerHTML = `Description: ${data.weather[0].description}`

      Winfo.classList.remove("hidden")
      errMsg.classList.add("hidden")

   }
   function showError(){
      Winfo.classList.add("hidden")
      errMsg.classList.remove("hidden")

   }


})