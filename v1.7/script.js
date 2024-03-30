//registro.html
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      if (username === 'insegnante' && password === 'insegnante') {
        window.location.href = 'registro.html';
      } else {
        alert('Username or password is incorrect.');
      }
    });
} );



// Voti.html (Gestione Calcolatrice)
var voti = 0;

function updateDisplay() {
  $('#display').text(voti);
  $('#votiInput').val(voti);
}

function setVoto(numero) {
  voti = numero;
  updateDisplay();
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function increment() {
  voti += 0.25;
  if (voti > 10 ) voti = 10; // Evita voti sopra al 10
  updateDisplay();
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function decrement() {
  voti -= 0.25;
  if (voti < 0) voti = 0; // Evita voti negativi
  updateDisplay();
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function toggleCalculator() {
  $('#calculator-container').toggle(); // Mostra o nasconde la calcolatrice
  if ($('#calculator-container').is(':visible')) {
    $('#calcolatrice-button').text('Chiudi Calcolatrice');
  } else {
  }
}

function salvaVoto() {
  // Qui puoi inserire il codice per salvare il voto
  // Ad esempio, puoi inviare una richiesta AJAX al backend
  // e gestire la risposta in base alla tua applicazione
  // In questo esempio, mostrerò solo un messaggio di conferma
  alert('Voto salvato con successo!');
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function updateButtonLabel() {
  $('#calcolatrice-button').text('Voto: ' + voti); // Aggiorna il testo del bottone con il voto corrente
}

$(document).ready(function(){
  updateDisplay();
});