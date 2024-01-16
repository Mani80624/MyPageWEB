//var precios;
function ElementID() {
    // Obtén todos los elementos con la clase "plan-price"
    precios = document.getElementsByClassName("plan-price");
    console.log(precios);
    return precios;
}
//console.log(precios);

function SegundaPagina(){
    var precios = ElementID();
    Wtf(precios);
    function Wtf(precios){
        console.log(precios);
    
        // Verifica si hay al menos un elemento con la clase "plan-price"
        if (precios.length > 0) {
            // Obtén el primer precio (puedes ajustar esto según tu estructura HTML)
            var primerPrecio = precios[0].textContent;
    
            // Actualiza el contenido del elemento con el ID "precio-producto"
            document.getElementById("precio-producto").innerHTML = primerPrecio;
    
            // Agrega el precio a la URL del enlace de compra
            var comprarBtn = document.getElementById("comprarBtn");
            comprarBtn.href = 'assets/html/login-compra.html?precio=' + encodeURIComponent(primerPrecio);
        }
    }
}
// Llama a la función cuando se carga la página
//window.onload = ElementID;


/*function ElementID(){
    var precio = document.getElementsByClassName("plan-price");
    document.getElementById("precio-producto").innerHTML = precio;
}*/
