// Script.js

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === 'insegnante' || username === 'simone.giuliani@sarrocchi.it') && (password === 'insegnante' || password === 'GiulianTheBest')) {
      window.location.href = 'registro.html';
    } else {
      alert('Username or password is incorrect.');
    }
  });

  // Carica i dati locali quando la pagina viene caricata
  caricaDatiLocali();
});

// Funzione per caricare i dati locali
function caricaDatiLocali() {
  var assente = localStorage.getItem('assente');
  var italiano = localStorage.getItem('italiano');
  var inglese = localStorage.getItem('inglese');
  var informatica = localStorage.getItem('informatica');
  var storia = localStorage.getItem('storia');
  var note = localStorage.getItem('note');

  // Popola la pagina con i dati locali, se disponibili
  if (assente !== null) {
    document.getElementById("opzione").checked = assente === "true";
  }
  if (italiano !== null) {
    document.querySelector("tbody tr:first-child td:nth-child(3) button").textContent = italiano;
  }
  if (inglese !== null) {
    document.querySelector("tbody tr:first-child td:nth-child(4) button").textContent = inglese;
  }
  if (informatica !== null) {
    document.querySelector("tbody tr:first-child td:nth-child(5) button").textContent = informatica;
  }
  if (storia !== null) {
    document.querySelector("tbody tr:first-child td:nth-child(6) button").textContent = storia;
  }
  if (note !== null) {
    document.querySelector("tbody tr:first-child td:nth-child(7) input").value = note;
  }
}

// Funzione per salvare i dati localmente
function salvaDatiLocali() {
  var assente = document.getElementById("opzione").checked;
  var italiano = parseFloat(document.querySelector("tbody tr:first-child td:nth-child(3) button").textContent);
  var inglese = parseFloat(document.querySelector("tbody tr:first-child td:nth-child(4) button").textContent);
  var informatica = parseFloat(document.querySelector("tbody tr:first-child td:nth-child(5) button").textContent);
  var storia = parseFloat(document.querySelector("tbody tr:first-child td:nth-child(6) button").textContent);
  var note = document.querySelector("tbody tr:first-child td:nth-child(7) input").value;

  // Salva i dati localmente utilizzando localStorage
  localStorage.setItem('assente', assente);
  localStorage.setItem('italiano', italiano);
  localStorage.setItem('inglese', inglese);
  localStorage.setItem('informatica', informatica);
  localStorage.setItem('storia', storia);
  localStorage.setItem('note', note);
}

// Aggiungi un evento al pulsante "Salva Modifiche"
document.getElementById('salvaModifiche').addEventListener('click', function() {
  salvaDatiLocali();
  alert('Dati salvati con successo!');
});

// Script per gestire l'apertura del form
document.querySelectorAll(".apriInserimentoVoti").forEach(function(button) {
  button.addEventListener("click", function() {
    var cell = this.parentNode;
    var form = cell.querySelector(".sezioneInserimentoVoti");
    form.classList.toggle("hidden"); // Toggle la classe 'hidden' per mostrare/nascondere la sezione di inserimento
  });
});

// Associa l'evento di invio a ciascun formVoti separatamente
document.querySelectorAll(".formVoti").forEach(function(form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenire il comportamento di default del form
    var votoInserito = this.querySelector(".voto").value; // Ottenere il voto inserito dall'utente
    var button = this.closest("td").querySelector(".apriInserimentoVoti"); // Trovare il pulsante corrispondente
    // Validazione dell'input per assicurarsi che sia stato inserito un numero
    if (votoInserito === "" || isNaN(votoInserito) || votoInserito < 0 || votoInserito > 10) {
      alert("Per favore inserisci un voto valido tra 0.00 e 10.00.");
      return; // Interrompere l'esecuzione se il voto non è valido
    }
    button.textContent = parseFloat(votoInserito).toFixed(2); // Aggiornare il testo del pulsante con il voto inserito
    this.querySelector(".voto").value = ""; // Resetta il campo del voto dopo l'invio
    var form = this.closest(".sezioneInserimentoVoti");
    form.classList.add("hidden"); // Nascondere la sezione di inserimento dopo l'invio
  });
});
