const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const convertButton = document.getElementById("convertButton"); 

convertButton.addEventListener("click", performConversion);

function performConversion() {
    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(celsius)) {
        fahrenheitInput.value = (celsius * 1.8) + 32;
        kelvinInput.value = celsius + 273.15;
    }

    if (!isNaN(fahrenheit)) {
        celsiusInput.value = (fahrenheit - 32) / 1.8;
        kelvinInput.value = ((fahrenheit - 32) / 1.8) + 273.15;
    }

    if (!isNaN(kelvin)) {
        celsiusInput.value = kelvin - 273.15;
        fahrenheitInput.value = ((kelvin - 273.15) * 1.8) + 32;
    }
}