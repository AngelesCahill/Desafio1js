var num1 = parseInt(prompt("Ingrese una cantidad de dias: "));
var year = Math.floor(num1/365);
var semanas = Math.floor(((num1 - (year*365)))/7);
var dias = (num1 - ((year*365)-(semanas*7)));
alert("cantidad de años: " + year);
alert(semanas + " semanas");
alert(dias +" dias");
alert(`Son ${year} años, ${semanas} semanas y ${dias} dias`)