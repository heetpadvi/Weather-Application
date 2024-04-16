let url = "https://api.weatherapi.com/v1/current.json?key=a1e8cfba17c14418a25175911232404&q=Pune"
// let key1 = a1e8cfba17c14418a25175911232404
// let url = "https://api.open-meteo.com/v1/forecast?latitude=18.620023&longitude=73.750363&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
let report = document.getElementById("report")
let search = document.querySelector("#searchL")
let locationName = document.getElementById("locationName")
let input = document.querySelector("#inputL")
const byDefault = (async () => {

    let default1 = await fetch(url)
    let response1 = await default1.json()
    report.innerHTML = `current temperature: ${response1.current.temp_c}°C<br>
                      weather: ${response1.current.condition.text}<br>
                      wind speed(kph): ${response1.current.wind_mph}<br>
                      precipitation(mm): ${response1.current.precip_mm}<br>
                      humidity: ${response1.current.humidity}<br>
                      uv: ${response1.current.uv}<br>`
    console.log(response1)
  })
  byDefault()
  const byCall = async(url1) => {
    let callResponse = await fetch(url1)
    let callResponse1 = await callResponse.json()
    // locationName.innerHTML = `${input.value}`
      report.innerHTML = `current temperature: ${callResponse1.current.temp_c}°C<br>
                        weather: ${callResponse1.current.condition.text}<br>
                        wind speed(kph): ${callResponse1.current.wind_mph}<br>
                        precipitation(mm): ${callResponse1.current.precip_mm}<br>
                        humidity: ${callResponse1.current.humidity}<br>
                        uv: ${callResponse1.current.uv}<br>`
      console.log(callResponse1)
    }
search.addEventListener('click', ()=>{
    let searchedValue = input.value
    locationName.innerHTML = `${input.value}`
    let url1 = `https://api.weatherapi.com/v1/current.json?key=a1e8cfba17c14418a25175911232404&q=${searchedValue}`
    byCall(url1)
})