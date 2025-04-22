function dropdown(){
  let dropdown = document.getElementById("dropdown");

  function updateValue() {
    let value = dropdown.value;
    document.getElementById("idk").innerHTML = value;
  }

  updateValue();
  dropdown.oninput = updateValue;

  
}


// Coordinates for Chicago
const latitude = 41.876042264152176
const longitude = -87.64262758302804




const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=today`

fetch(url)
  .then(response => response.json())
  .then(data => {
    let value = document.getElementById("dropdown").value;

    


    let test = data.results.date;
    let d = new Date(test);
    let text = d.toString();
    document.querySelector('#date1').innerHTML = text
    
    document.querySelector('#sr-time1').innerHTML = data.results.sunrise
    document.querySelector('#ss-time1').innerHTML = data.results.sunset
    document.querySelector('#dawn1').innerHTML = "Dawn: " + data.results.dawn
    document.querySelector('#dusk1').innerHTML = "Dusk: " + data.results.dusk
    document.querySelector('#daylength1').innerHTML = "Day Length: " + data.results.day_length
    document.querySelector('#sn1').innerHTML = "Solar Noon: " + data.results.solar_noon
    document.querySelector('#tz1').innerHTML = "Time Zone: " + data.results.timezone

    
  })
  .catch(error => console.error('Error:', error))


  window.addEventListener("load", () => {
    dropdown();
  });