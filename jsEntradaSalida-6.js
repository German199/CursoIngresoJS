/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
    alert(resultado);
    

}

