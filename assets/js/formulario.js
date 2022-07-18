const nombre = document.querySelector("#name");
const tel = document.querySelector("#tel");
const email_p = document.querySelector("#email_p");
const email_i = document.querySelector("#email_i");
const carrera = document.querySelector("#carrera");
const pago = document.querySelector("#pago");
const CS = document.querySelector("#CS");
const IAS = document.querySelector("#IAS");
const PES = document.querySelector("#PES");
const RAS = document.querySelector("#RAS");
const message = document.querySelector("#message");
const formulario_email = document.querySelector("#formulario_email");
let capitulo = "";
CS.addEventListener('click', function() {
  if(CS.checked) {
    capitulo += " " + CS.value;
  }
})
  
IAS.addEventListener('click', function() {
  if(IAS.checked) {
    capitulo += " " + IAS.value;
  }
})
PES.addEventListener('click', function() {
  if(PES.checked) {
    capitulo += " " + PES.value;
  }
})
RAS.addEventListener('click', function() {
  if(RAS.checked) {
    capitulo += " " + RAS.value;
  }
})


const enviar_mensaje = async (e)=>{
    e.preventDefault();
    try {
        var data = JSON.stringify({
            "nombre": nombre.value,
            "correo": email_p.value,
            "mensaje": "\n Personal: " + email_p.value + "  Institucional: " + email_i.value + "\n Telefono : "+tel.value +"\n Carrera :" +carrera.value + "\n Pago :" +pago.value + "\n Capitulo :" +capitulo + "\n Mensaje :" +message.value,
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
      console.log(error.name)
      console.log(error.message)
      console.log(error.stack) 

        Swal.fire({

            icon: 'error',
            title: 'Ocurrio un problema , intentalo mas tarde',
            showConfirmButton: false,
            timer: 1500
          })
    }
}

formulario_email.addEventListener("submit",enviar_mensaje)