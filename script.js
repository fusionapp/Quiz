// Teclado
montaTeclado();

function montaTeclado(){
	const letrasTeclado = 'QWERTYUIOP ASDFGHJKLÇ ZXCVBNM'.split('');
	const espacoTeclado = document.getElementById("teclado");
    espacoTeclado.innerHTML = "";
	
  for (let i = 0; i < letrasTeclado.length; i++) {
    if (letrasTeclado[i] === " ") {
		espacoTeclado.innerHTML = espacoTeclado.innerHTML + "<br>"
	}	
    else {
		espacoTeclado.innerHTML = espacoTeclado.innerHTML + "<button id=" + letrasTeclado[i] + " onclick=\"verificaTecla('" + letrasTeclado[i] + "')\">" + letrasTeclado[i] + "</button>"
    }
  }
}
function verificaTecla(letra){
  console.log(letra); 
}
 
 
 
 
 
 
 
 
