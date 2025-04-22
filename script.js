function dropdown(){
  let dropdown = document.getElementById("dropdown");

  function updateValue() {
    changeLocation();
  }

  updateValue();
  dropdown.onchange = function(){
    updateValue();
  }
  
}


function changeLocation() {
  let value = document.getElementById("dropdown").value;

  let latitude = "";
  let longitude = "";

  if (value == "LA"){
    latitude = 34.050354557902516;
    longitude = -118.04288551174164;
  }else if (value == "CHI"){
    latitude = 41.876671225230574;
    longitude = -87.63815189446508;
  }else if (value == "NYC"){
    latitude = 40.706789024044824;
    longitude = -73.9919111443256;
  }else if (value == "MIA"){
    latitude = 25.76136701439495;
    longitude = -80.1920951114142;
  } else if (value == "SF"){
    latitude = 37.7757548611592;
    longitude = -122.44304251631901;
  }else if (value == "LV"){
    latitude = 36.17555772377041;
    longitude = -115.13935110938196;
  }else if (value == "SEA"){
    latitude = 47.60535636300709;
    longitude = -122.3404962939658;
  }else if (value == "AUS"){
    latitude = 30.26486666209656;
    longitude = -97.76324354786162;
  }else if (value == "DEN"){
    latitude = 39.73843836787016;
    longitude = -104.97702889098962;
  }else if (value == "ATL"){
    latitude = 33.746261961338035;
    longitude = -84.37282851153607;
  }

  let urlToday = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=today`;
  let urlTomorrow = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=tomorrow`;


  fetch(urlToday)
  .then(response => response.json())
  .then(data => {
    let value = document.getElementById("dropdown").value;

    let dateStr = data.results.date;
    let [year, month, day] = dateStr.split("-");
    let dateObj = new Date(year, month - 1, day); // Local time

    let formatted = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    document.querySelector('#date1').innerHTML = formatted;
    document.querySelector('#sr-time1').innerHTML = data.results.sunrise
    document.querySelector('#ss-time1').innerHTML = data.results.sunset
    document.querySelector('#dawn1').innerHTML = "Dawn: " + data.results.dawn
    document.querySelector('#dusk1').innerHTML = "Dusk: " + data.results.dusk
    document.querySelector('#daylength1').innerHTML = "Day Length: " + data.results.day_length
    document.querySelector('#sn1').innerHTML = "Solar Noon: " + data.results.solar_noon
    document.querySelector('#tz1').innerHTML = "Time Zone: " + data.results.timezone
  })
  .catch(error => console.error('Error:', error))




  fetch(urlTomorrow)
  .then(response => response.json())
  .then(data => {
    let value = document.getElementById("dropdown").value;

    let dateStr = data.results.date;
    let [year, month, day] = dateStr.split("-");
    let dateObj = new Date(year, month - 1, day); // Local time

    let formatted = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    
    document.querySelector('#date2').innerHTML = formatted;
    document.querySelector('#sr-time2').innerHTML = data.results.sunrise
    document.querySelector('#ss-time2').innerHTML = data.results.sunset
    document.querySelector('#dawn2').innerHTML = "Dawn: " + data.results.dawn
    document.querySelector('#dusk2').innerHTML = "Dusk: " + data.results.dusk
    document.querySelector('#daylength2').innerHTML = "Day Length: " + data.results.day_length
    document.querySelector('#sn2').innerHTML = "Solar Noon: " + data.results.solar_noon
    document.querySelector('#tz2').innerHTML = "Time Zone: " + data.results.timezone
  })
  .catch(error => console.error('Error:', error))
}


  window.addEventListener("load", () => {
    dropdown();
  });