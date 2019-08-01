function mostrar()
{
    var sexo;
    var nota;
    var contador;
    var acumulador;
    var notamasbaja;
    var promedio;
    contador=0;
    acumulador=0;

    while(contador<5){
        sexo=prompt("ingrese m o f segun corresponda aqui.");
       
            while(sexo!='f'&&sexo!='m'){
            
            sexo=prompt("ingreso dato valido");
            }
       
        nota=parseInt(prompt("ingrese notas aqui."));

            acumulador+=nota;
        
            while(isNaN(nota) || nota<0 || nota>10){//isNaN noes numero
            
            nota=prompt("ingrese una nota valida");
       }
        contador++;
    }
        promedio=acumulador/contador;
        alert(promedio);
        notamasbaja=nota>acumulador;
        alert(notamasbaja);


}