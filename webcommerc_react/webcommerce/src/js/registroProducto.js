const checkbox = document.querySelector('.my-form input[type="checkbox"]');

const btns = document.querySelectorAll('.my-form button');

checkbox.addEventListener('change', function () {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disable = false) : (btn.disable = true);
  }
});

function msgProducto() {
  document.alert("Producto Registrado");
}