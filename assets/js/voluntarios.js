const voluntariodiv = document.querySelector(".member-info")

async function ObtenerVoluntario(){
    const respuesta= await fetch('https://iee-uso.herokuapp.com/api/voluntarios');
    const data =  await respuesta.json();
    const voluntarios = data.payload.voluntarios;
    const result = voluntarios.filter(voluntario => voluntario.id == "62b61dd8088d243f27e3fb88");
    const h4 = document.createElement("h4")
    h4.textContent = result.nombres
    
    
}