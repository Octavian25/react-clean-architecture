import Swal from 'sweetalert2';

function Success(message) {
  Swal.fire({
    title: 'Yeaay..',
    text: message,
    icon: 'success',
  });
}

function Failed(message) {
  Swal.fire({
    title: 'Ops..',
    text: message,
    icon: 'error',
  });
}
const data = { Failed, Success };

export default data;
