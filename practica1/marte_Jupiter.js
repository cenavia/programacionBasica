var usuario = prompt("Cual es tu Peso")
var planeta = parseInt (prompt("Elije tu Planeta \n 1 es marte, 2 es Jupiter"))
var peso = parseInt (usuario)

var g_tierra = 9.8
var g_marte = 3.7
var g_jupiter = 24.8
var nombrePlaneta
var peso_final

if(planeta == 1){
    peso_final = peso * g_marte / g_tierra
    nombrePlaneta = "Marte"
}else if (planeta == 2) {
    peso_final = peso * g_jupiter / g_tierra
    nombrePlaneta = "Jupiter"
}else{
    peso_final = 10000000
    nombrePlaneta = " "
}

peso_final = parseInt(peso_final)
document.write("Tu peso en "+nombrePlaneta+" es de: <strong>" + peso_final + " Kilos <strong/>")