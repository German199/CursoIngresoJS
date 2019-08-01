function mostrar()
{
    numero=parseInt(prompt("ingrese numero aqui."));
    for(i=2;i<=numero;i++){
        if(numero%1==numero&&numero%numero==1){
            alert("el numero "+numero+" es primo");
            break;
        }else if(numero%i==0){
            alert("el numero "+numero+" no es primo");
            break;
        }
    }
}//FIN DE LA FUNCIÓN