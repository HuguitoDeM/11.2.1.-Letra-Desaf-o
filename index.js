document.addEventListener("DOMContentLoaded",()=>{

document.getElementById("boton").addEventListener("click", ()=>{ 
let nombre = document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let nacimiento= document.getElementById("fecha_nacimiento").value


const url = "https://jsonplaceholder.typicode.com/users"
const datos = {
    nombre: nombre,
    apellido: apellido,
    nacimiento:nacimiento
}

const configuracion = {
    method: "POST",
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify(datos)
}
fetch(url,configuracion)
.then(res=> {
    if(!res.ok){
  throw new Error("la solicitud no fue exitoso")
}
 return res.json()
})
.then(data => {
    alert("Respuesta Del servidor exitosa: ",data);
    console.log(data);
})

})
})