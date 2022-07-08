const nombre = document.querySelector("#name");
const tel = document.querySelector("#tel");
const email_p = document.querySelector("#email_p");
const email_i = document.querySelector("#email_i");
const carrera = document.querySelector("#carrera");
const pago = document.querySelector("#pago");
const capitulo = document.querySelector("#capitulo");
const message = document.querySelector("#message");
const formulario_email = document.querySelector("#formulario_email");



const enviar_mensaje = async (e)=>{
    e.preventDefault();
    try {
        var data = JSON.stringify({
            "nombre": nombre.value,
            "correo": "Personal: " + email_p.value + "  Institucional: " + email_i,
            "mensaje": "\n Telefono : "+tel.value +"\n Carrera :" +carrera.value + "\n Pago :" +pago.value + "\n Capitulo :" +capitulo.value + "\n Mesaje :" +message.value,
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