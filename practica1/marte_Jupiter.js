var usuario = prompt("Cual es tu Peso")
var planeta = parseInt (prompt("Elije tu Planeta \n 1 es marte, 2 es Jupiter"))
var peso = parseInt (usuario)

var g_tierra = 9.8
var g_marte = 3.7
var g_jupiter = 24.8
var peso_final

if(planeta == 1){
    peso_final = peso * g_marte / g_tierra
}else if (planeta == 2) {
    peso_final = peso * g_jupiter / g_tierra
}else{
    peso_final = 10000000
}

peso_final = parseInt(peso_final)
document.write("Tu peso en Marte es de: <strong>" + peso_final + " Kilos <strong/>")