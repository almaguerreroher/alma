
//variables principales
const url = "https://raw.githubusercontent.com/almaguerreroher/alma_API/master/";

//encontrar elementos HTML
const el_lista_actores = document.getElementById("actores-lista");

//encontrar desde nuestra propia base de datos

fetch(url + "datos.json").then(fuction(respuesta) {
    resturnrespuesta.json();
}).then(fuction(datos){
    //pasar por cada actor de la base de datos 
    for(let: 0 : i <datos.length; i += 1){

    //alimentar la lista de actores
     el_lista_actores.innerHTML "<button>" + datos [i].nombre + "</button>";
    } 

}).catch(funtion(error){
    console.log(error)
});