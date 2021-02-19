var boton = document.getElementById("Throw");
var texto = document.getElementById("salida");
var dice = document.getElementById("dice");
var caras = document.getElementById("faces");
var registro = document.getElementById("history");
boton.addEventListener("click", tirarDado);

var historial = [];
registro.innerHTML="No hay jugadas";



function tirarDado(){
  console.log("help");
  var x = parseInt(dice.value);
  var dados=parseInt(x);
  var temp= caras.value;
  var max = parseInt(temp);

  texto.innerHTML="";
  
  for(var i = 0; i<dados;i++){
    texto.innerHTML = "|" + aleatorio(0,temp) + "|";
    historial.push(texto.innerText);
  }
  registro.innerHTML="";
  for(var i = 0;i<historial.length;i++){
      registro.innerHTML += historial[historial.length-1-i];
      registro.innerHTML += "<hr>";
    
  }   
}

function aleatorio(min,max){ // funcion que nos permite obtener numero aleatorios.
  var resultado;
   resultado=Math.floor(Math.random()*(max - min)+1)+min;
  return resultado;
}
