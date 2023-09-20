
function  calculaPeso(){
    var dig1 =parseFloat(document.getElementById("peso").value);
    var dig2 =parseFloat(document.getElementById("altura").value);
    var dig3 =document.getElementById("nombre").value;

    if (!isNaN(dig1) && !isNaN(dig2)) {
        var resultado = dig1/(dig2 *dig2);
        if(resultado > 0){
            if(resultado < 18.5){
                alert(dig3+" ustd esta bajo peso, su ICM es "+resultado );
            }else{
                if (resultado >= 18.5 && resultado < 24.9){
                    alert(dig3+" ustd esta peso normal su ICM es "+resultado );
                }else{
                    if (resultado >= 25 && resultado < 29.9){
           
           
                        alert(dig3+" ustd esta en sobrepeso su ICM es "+resultado );
                    }else{
                        alert(dig3+" ustd esta  obeso su ICM es "+resultado );
    
                    }
                }
            }
        }else{
            alert(" ingrese un numero valido");

        }
        
    }else{
        alert(" ingrese un numero  ");
    }
}
function limpiar() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("nombre").value = "";
}