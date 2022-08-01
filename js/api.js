const url = "https://raw.githubusercontent.com/almaguerreroher/alma_API/master/";

fetch(url + "datos.json").then(fuction(respuesta){
    resturnrespuesta.json();
}).then(fuction(datos){
    console.log(datos)
}).catch(funtion(error){
    console.log(error)
});