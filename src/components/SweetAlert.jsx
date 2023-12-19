import Swal from "sweetalert2";

function SweetAlert(icon, title) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
}

export default SweetAlert;
