// Teclado
function montaTeclado(){
  const letrasTeclado = 'qwertyuiop asdfghjklç zxcvbnm'.split('');

  for (let i = 0; i < letrasTeclado.length; i++) {
    if (letrasTeclado[i] === " ") {
		document.write('<br>');
	}	
    else {
		document.write('<button type="button" value="' + letrasTeclado[i] + '">' + letrasTeclado[i] + '</button>');
    }
  }
}
 
 
 
 
 
 
 
 
 
