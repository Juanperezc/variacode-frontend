import Swal from 'sweetalert2'

const alertSuccess = (title , msj)=>{

    Swal.fire(
        title,
        msj,
        'success'
      )
}

const alertError = (title, msj)=>{
    Swal.fire({
        icon: 'error',
        title: title,
        text: msj,
      })
}
// F funcion que se ejecuta si result.value
const alertConfirm = ( f )=>{
    
    Swal.fire({
        title: 'Está Seguro?',
        text: "No se puede Revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminalo!'
      }).then((result) => {
        if (result.value) {
          f()
        }
      })
}

const alertInfo = (title, msj)=>{
  Swal.fire({
    icon: 'info',
    title: title,
    text: msj
  })
}

export {
    alertSuccess,
    alertError,
    alertConfirm,
    alertInfo
}