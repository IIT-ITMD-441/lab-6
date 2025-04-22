function dropdown(){
  let dropdown = document.getElementById("dropdown");

  function updateValue() {
    let value = dropdown.value;
    document.getElementById("idk").innerHTML = value;
    changeLocation();
  }

  updateValue();
  dropdown.oninput = updateValue;
}


function changeLocation() {

  // Coordinates for Chicago
  let latitude = 41.876671225230574
  let longitude = -87.63815189446508
  let url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=today`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    let value = document.getElementById("dropdown").value;

    if (value == "LA"){
      let latitude = 34.086270433804835
      let longitude = -117.47405803626951

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
    }    
  })
  .catch(error => console.error('Error:', error))

}



  window.addEventListener("load", () => {
    dropdown();
    changeLocation();
  });