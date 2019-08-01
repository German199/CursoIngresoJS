function mostrar()
{
    numero = parseInt(prompt("ingrese numero aqui"));
    for(i=1;i<=numero;i++){
        if(numero % i== 0){
            alert(i);
        }
    }    
}//FIN DE LA FUNCIÓN