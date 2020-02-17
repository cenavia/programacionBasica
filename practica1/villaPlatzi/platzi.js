var z 

for (let i = 0; i < 10; i++) {
    z = aleatorio(20, 40)
    document.write(z +",")
}

function aleatorio(min, maxi){
    var resultado
    resultado = Math.floor(Math.random()*(maxi - min +1)) + min
    return resultado
}