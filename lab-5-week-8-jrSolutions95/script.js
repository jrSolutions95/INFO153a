function fahrenheitToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit_input").value;
    if(isNaN(fahrenheit) || fahrenheit.trim() == "") {/* Checks if it is an empty string(then there is no value to converte=invalid input) */
        document.getElementById("result").value = "Result: Invalid Input";
        return;
    }
    let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    document.getElementById("result").value = "Result: " + celsius + "°C";
}


function celsiusToFahrenheit() {
    let celsius = document.getElementById("celsius_input").value;
    if(isNaN(celsius) || celsius.trim() == "") {
        document.getElementById("result").value = "Result: Invalid Input";
        return;
    }
    let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
    document.getElementById("result").value = "Result: "+fahrenheit+"°F";
}

