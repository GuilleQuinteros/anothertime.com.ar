// Obtén referencias a los elementos del DOM
const messageForm = document.getElementById('message-form');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

// Agrega un evento al formulario para enviar mensajes
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtén los valores del nombre y mensaje del formulario
  const name = nameInput.value;
  const message = messageInput.value;

  // Crea un nuevo elemento de mensaje y añádelo a la lista de mensajes
  const messageItem = document.createElement('div');
  messageItem.innerHTML = `<strong>${name}:</strong> ${message}`;
  messageList.appendChild(messageItem);

  // Limpia los campos del formulario
  nameInput.value = '';
  messageInput.value = '';
});
