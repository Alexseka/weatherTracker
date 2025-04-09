const apiKey = 'a31a471c802f4ab9a5b34916250904';
const baseURL = 'https://api.weatherapi.com/v1/current.json';

function getWeatherData(cityName) 
{
    const url = `${baseURL}?key=${apiKey}&q=${cityName}&aqi=no`;
    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            displayWeatherData(data);
        },
        error: function(xhr, status, error) {
            console.log('Error status:', status);
            console.log('Error response:', xhr.responseText);
            $('#weatherResult').text('Failed retrieving data. Please try again.');
        }
    });
}

function displayWeatherData(data) 
{
    const displayData = `
        <p>City: ${data.location.name}</p>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
    `;
    $('#weatherResult').html(displayData); 
}

$(document).ready(function() 
{
    $('#getWeatherBtn').click(function() {
        const cityName = $('#cityName').val();
        getWeatherData(cityName);
    });
});
