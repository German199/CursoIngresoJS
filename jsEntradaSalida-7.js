/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var NumeroUno;
    var NumeroDos;
    var resultado;
    NumeroUno=document.getElementById("numeroUno").value;
    NumeroDos=document.getElementById("numeroDos").value;
    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    resultado=(NumeroUno)+(NumeroDos);
    alert("la suma es "+resultado);

}

function restar()
{
	var NumeroUno;
    var NumeroDos;
    var resultado;
    NumeroUno=document.getElementById("numeroUno").value;
    NumeroDos=document.getElementById("numeroDos").value;
    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    resultado=(NumeroUno)-(NumeroDos);
    alert("la resta es "+resultado);

}

function multiplicar()
{ 
	var NumeroUno;
    var NumeroDos;
    var resultado;
    NumeroUno=document.getElementById("numeroUno").value;
    NumeroDos=document.getElementById("numeroDos").value;
    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    resultado=(NumeroUno)*(NumeroDos);
    alert("la multiplicacion es "+resultado);

}

function dividir()
{
	var NumeroUno;
    var NumeroDos;
    var resultado;
    NumeroUno=document.getElementById("numeroUno").value;
    NumeroDos=document.getElementById("numeroDos").value;
    NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
    resultado=(NumeroUno)/(NumeroDos);
    alert("la divicion es "+ resultado);
    
}

