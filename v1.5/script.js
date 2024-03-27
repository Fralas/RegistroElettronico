


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
  if (voti > 10) voti = 10; // Evita voti sopra al 10
  updateDisplay();
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function decrement() {
  voti -= 0.25;
  if (voti < 0) voti = 0; // Evita voti negativi
  updateDisplay();
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function toggleCalculator(wrapperId) {
  $('.calculator-overlay').fadeToggle(300);

  if ($('.calculator-overlay').is(':visible')) {
    getCalculatorContent(wrapperId);
    $('#calculator-overlay').show();
  } else {
    $('#calculator-overlay').hide();
  }
}

function getCalculatorContent(wrapperId) {
  $.ajax({
    url: 'voti.html', // URL della pagina da caricare
    type: 'GET',
    success: function(data) {
      $('#' + wrapperId).html(data); // Inserisce il contenuto della pagina nella wrapper div
      $('#' + wrapperId).show(); // Mostra il contenuto della wrapper div
    },
    error: function(xhr, status, error) {
      console.error(error.message);
    }
  });
}

$(document).ready(function () {
  updateDisplay();
});

function salvaVoto() {
  // Qui puoi inserire il codice per salvare il voto
  // Ad esempio, puoi inviare una richiesta AJAX al backend
  // e gestire la risposta in base alla tua applicazione
  // In this example, mostrerò solo un messaggio di conferma
  alert('Voto salvato con successo!');
  updateButtonLabel(); // Aggiorna il testo del bottone
}

function updateButtonLabel() {
  $('#calcolatrice-button').text(voti); // Aggiorna il testo del bottone con il voto corrente
}

$(document).ready(function () {
  updateDisplay();
});