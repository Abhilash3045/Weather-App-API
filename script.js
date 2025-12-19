async function getWeather() {
    const location = document.getElementById("locationInput").value;
    const resultDiv = document.getElementById("result");

    if (location === "") {
        resultDiv.innerHTML = "⚠️ Please enter a location.";
        return;
    }

    const apiKey = "";    //Paste your own API key here.
    const url = ;   //Paste your own API link here to make the website work.

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = `❌ ${data.error.message}`;
        } else {
            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const icon = data.current.condition.icon;

            resultDiv.innerHTML = `
                🌍 Location: <b>${data.location.name}, ${data.location.country}</b><br>
                🌡️ Temperature: <b>${temp}°C</b><br>
                ☁️ Condition: <b>${condition}</b><br>
                <img src="https:${icon}" alt="${condition}" />
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = "❌ Error fetching weather data.";
        console.error(error);
    }
}


