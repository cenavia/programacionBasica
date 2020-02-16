var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado)
var cuadrito = document.getElementById("area_de_dibujo")
var papel = cuadrito.getContext("2d")
var x = 150
var y = 150

dibujarLinea("red", x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.lineWidth = 3
    lienzo.moveTo(xi, yi)
    lienzo.lineTo(xf, yf)
    lienzo.stroke()
    lienzo.closePath()
}


function dibujarTeclado(evento){

    var colorsito = "blue"
    var moviento = 1

    switch (evento.keyCode) 
    {
        case teclas.UP:
            dibujarLinea("colorsito", x, y, x, y - moviento, papel)
            y = y - moviento
            break;
        case teclas.DOWN:
            dibujarLinea("colorsito", x, y, x, y + moviento, papel)
            y = y + moviento            
            break;
        case teclas.LEFT:
            dibujarLinea("colorsito", x, y, x - moviento, y, papel)
            x = x - moviento
            break;
        case teclas.RIGHT:
            dibujarLinea("colorsito", x, y, x + moviento, y, papel)
            x = x + moviento
            break;
    }
}