var celsius = parseInt(prompt("Ingrese la temperatura en grados Celsius: "));
const c_k = 273.15;
const c_f = 32;
var kelvin = (c_k * celsius);
var fahrenheit = (c_f * celsius);
alert("La temperatura que usted ingresó corresponde a: " + kelvin + " grados Kelvin");
alert("La temperatura que usted ingresó corresponde a: " + fahrenheit + " grados Fahrenheit");