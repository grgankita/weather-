async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "4fee5a7f6e3e45158c943056252402";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weather").innerHTML = `
          <h3>${data.location.name}, ${data.location.country}</h3>
          <p>Temperature: ${data.current.temp_c}°C</p>
          <p>Humidity: ${data.current.humidity}%</p>
          <p>Wind Speed: ${data.current.wind_kph} kph</p>
          <p>Condition: ${data.current.condition.text}</p>
          <img src="${data.current.condition.icon}" alt="weather icon">
      `;
  } catch (error) {
    document.getElementById("weather").innerHTML =
      '<p style="color:red">City not found</p>';
  }
}
