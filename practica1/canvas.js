var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")

// instruccion para ejecutar una funcion al evento click.
boton.addEventListener("click", dibujoPorClick )

var d =document.getElementById("dibujito");
var lienzo =  d.getContext("2d");
var ancho = d.width


function dibujarLinea(color, xi, yi, xf, yf){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xi, yi)
    lienzo.lineTo(xf, yf)
    lienzo.stroke()
    lienzo.closePath()
}

// funcion que maneja los eventos por click
function dibujoPorClick(){
    var x =parseInt(texto.value)
    
    var lineas = x
    var l = 0
    var colorBorder = "blue"
    var espacio = ancho / lineas

    while (l < lineas) {
        yi = espacio * l
        xf = espacio * (1+l)
        dibujarLinea("blue", 0, yi, xf, 299)
        l = l + 1
    }

    dibujarLinea(colorBorder, 0, 1, 1, 300)
    dibujarLinea(colorBorder, 1, 299, 299, 299)

    // ciclo que dibuja la linea de forma inversa - desafio Freddy

    for (l=0; l < lineas; l++){
        yf = espacio * l
        xi = espacio * (1+l)
        dibujarLinea("blue", xi, 0, 299, yf)
    }

}

