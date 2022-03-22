

let categ =  prompt('Ingrese su sueldo basico mensual: 1) u$s 1000, 2) u$s 1500, ó 3) u$s 2000)');
let subCat = prompt('Informe la subcategoría: A, B ó C').toLocaleUpperCase();

let resultado;
switch (categ) { 



    case '1':
        categ = 1000;
        break;

    case '2':
        categ = 1500;    
        break;

    case  '3':
        categ = 2000;
        break;

        default:
            alert(`La categoria ingresada ${categ} no es válida`);


}



switch (subCat) { 


    case 'A':
        subCat = 1.5; 
        break;

    case 'B':
        subCat = 2;    
        break;

    case 'C':
        subCat = 2.5;
        break;

        default:
            alert(`La Sub-categoria ingresada ${subCat} no es válida`);


}
 resultado = categ * subCat;

if( resultado >= 1500 && resultado <=3000 ){
    alert('TU RANGO ES INICIAL');
} else if(resultado > 3000 && resultado <= 4000){
    alert('TU RANGO ES INTERMEDIO');
}
else if (resultado > 4000){
    alert('TU RANGO ES AVANZADO');
}

 
   

 