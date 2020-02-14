var usuario = prompt("cual es tu Peso")
var peso = parseInt (usuario)

var g_tierra = 9.8
var g_marte = 3.7
var g_jupiter = 24.8
var peso_final

peso_final = peso * g_marte / g_tierra
peso_final = parseInt(peso_final)
document.write("Tu peso en Marte es de: <strong>" + peso_final + " Kilos <strong/>")