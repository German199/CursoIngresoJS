function mostrar()
{

	/*var numero; 
	numero=parseInt(numero);
	numero=prompt("ingrese numeros entre 0 y 9.")
	while(isNaN(numero)||(numero<10||numero>0)){
		numero=prompt("reingrese numeros entre 9 y 0.")
	}
	document.getElementById("Numero").value=numero;*/
	var numero;
	numero=prompt("ingrese aqui un numero entre 0 y 10.");
	numero=parseInt(numero);//NaN
	while(numero<10 || numero>0){
		numero=prompt("ingrese aqui un numero entre 0 y 10.");
	}
	while(isNaN);
	

}//FIN DE LA FUNCIÓN