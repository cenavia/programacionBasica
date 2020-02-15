var d =document.getElementById("dibujito");
var lienzo =  d.getContext("2d");

dibujarLinea(100, 100, 200, 200)

function dibujarLinea(xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = "red"
    lienzo.moveTo(xi, yi)
    lienzo.lineTo(xf, yf)
    lienzo.stroke()
    lienzo.closePath()
}