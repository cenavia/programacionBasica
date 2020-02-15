var text = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")
var d =document.getElementById("dibujito");
var lienzo =  d.getContext("2d");

var lineas = 30
var l = 0
var colorBorder = "blue"

while (l < lineas) {
    yi = 10 * l
    xf = 10 * (1+l)
    dibujarLinea("blue", 0, yi, xf, 299)
    l = l + 1
}


dibujarLinea(colorBorder, 0, 1, 1, 300)
dibujarLinea(colorBorder, 1, 299, 299, 299)

// ciclo que dibuja la linea de forma inversa - desafio Freddy

for (l=0; l < lineas; l++){
    yf = 10 * l
    xi = 10 * (1+l)
    dibujarLinea("blue", xi, 0, 299, yf)
}

function dibujarLinea(color, xi, yi, xf, yf){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xi, yi)
    lienzo.lineTo(xf, yf)
    lienzo.stroke()
    lienzo.closePath()
}

