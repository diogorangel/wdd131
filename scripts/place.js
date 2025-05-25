// Set current year in footer
const yearElement = document.querySelector("#current-year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Set last modified date in footer
const lastModifiedElement = document.querySelector("#last-modified");
lastModifiedElement.textContent = document.lastModified;

// Wind chill calculation function
function calculateWindChill(tempCelsius, windKmh) {
  // Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
  return (
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempCelsius * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Static temperature and wind speed (can be dynamic in future)
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Display wind chill if conditions are met
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill} °C`;
} else {
  windChillElement.textContent = "N/A";
}

// Set the current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display the last modified date
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

