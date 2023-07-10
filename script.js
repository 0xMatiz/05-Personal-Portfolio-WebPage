// Obtener el formulario de contacto
const contactForm = document.getElementById('contact-form');

// Agregar un evento de escucha para enviar el formulario
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Realizar alguna acción con los datos del formulario
  // Por ejemplo, enviar una solicitud al servidor o mostrar un mensaje en la página
  console.log('Formulario enviado:');
  console.log('Nombre:', name);
  console.log('Apellido:', surname);
  console.log('Email:', email);
  console.log('Teléfono:', phone);
  console.log('Mensaje:', message);

  // Restablecer los valores del formulario
  contactForm.reset();
});