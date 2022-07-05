const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const formulario_email = document.querySelector("#formulario_email");



const enviar_mensaje = async (e)=>{
    e.preventDefault();
    try {
        var data = JSON.stringify({
            "nombre": nombre.value,
            "correo": email.value,
            "mensaje": "ASUNTO : "+subject.value +"\n Mensaje :" +message.value
          })
          console.log(data) 
          var config = {
            method: 'post',
            url: 'https://iee-uso.herokuapp.com/api/email',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          const respuesta = await axios(config)
          console.log(data) 
          const datita = respuesta.data
          console.log(datita) 
    
          if(datita.status==true){
            Swal.fire({

                icon: 'success',
                title: 'Se envio el correo correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            formulario_email.reset()
          }

    } catch (error) {
        Swal.fire({

            icon: 'error',
            title: 'Ocurrio un problema , intentalo mas tarde',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

formulario_email.addEventListener("submit",enviar_mensaje)