function caricaDatiLocali() {
  var assente = localStorage.getItem('assente');
  var italiano = localStorage.getItem('italiano');
  var inglese = localStorage.getItem('inglese');
  var informatica = localStorage.getItem('informatica');
  var storia = localStorage.getItem('storia');
  var note = localStorage.getItem('note');

  // Popola la pagina con i dati locali, se disponibili
  if (assente !== null) {
    document.getElementById("opzione").checked = (assente === "true"); // Converti in booleano
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
// Funzione per salvare i dati localmente
function salvaDatiLocali() {
  // Seleziona il form corrente
  var form = this.closest(".sezioneInserimentoVoti");
  // Seleziona la riga corrente
  var row = form.closest("tr");

  // Ottieni l'ID dello studente corrente
  var studentId = row.dataset.studentId;

  // Ottieni i valori relativi allo studente corrente
  var assente = row.querySelector(".checkbox").checked;
  var italiano = parseFloat(row.querySelector("td:nth-child(3) button").textContent);
  var inglese = parseFloat(row.querySelector("td:nth-child(4) button").textContent);
  var informatica = parseFloat(row.querySelector("td:nth-child(5) button").textContent);
  var storia = parseFloat(row.querySelector("td:nth-child(6) button").textContent);
  var note = row.querySelector("td:nth-child(7) input").value;

  // Salva i dati localmente utilizzando localStorage
  localStorage.setItem('assente_' + studentId, assente.toString()); // Converti in stringa prima di salvare
  localStorage.setItem('italiano_' + studentId, italiano.toString()); // Converti in stringa prima di salvare
  localStorage.setItem('inglese_' + studentId, inglese.toString()); // Converti in stringa prima di salvare
  localStorage.setItem('informatica_' + studentId, informatica.toString()); // Converti in stringa prima di salvare
  localStorage.setItem('storia_' + studentId, storia.toString()); // Converti in stringa prima di salvare
  localStorage.setItem('note_' + studentId, note);
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
    salvaDatiLocali(); // Salva i dati quando viene aperto il form
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
    salvaDatiLocali(); // Salva i dati dopo l'invio del voto
  });
});

// Carica i dati locali quando la pagina viene caricata
caricaDatiLocali();

// Assicuriamoci che il codice venga eseguito solo dopo il caricamento del DOM
document.addEventListener('DOMContentLoaded', function() {
  // Aggiungiamo l'evento 'submit' al form solo se esiste
  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      if ((username === 'insegnante' || username === 'simone.giuliani@sarrocchi.it') && (password === 'insegnante' || password === 'GiulianTheBest')) {
        window.location.href = 'registro.html';
      } else {
        alert('Username or password is incorrect.');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Aggiungi un evento al pulsante "Salva Modifiche"
  document.getElementById('salvaModifiche').addEventListener('click', function() {
      salvaDatiLocali();
      stampaLocalStorage(); // Stampare il localStorage in console
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
          salvaDatiLocali(); // Salva i dati dopo l'invio del voto
      });
  });

  // Carica i dati locali quando la pagina viene caricata
  caricaDatiLocali();

  // Funzione per stampare tutto il contenuto di localStorage in console
  function stampaLocalStorage() {
      console.log("Contenuto di localStorage:");
      for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var value = localStorage.getItem(key);
          console.log(key + ": " + value);
      }
  }
});


// Aggiungi un evento al pulsante "Salva Modifiche"
document.getElementById('salvaModifiche').addEventListener('click', function() {
  salvaDatiLocali();
  stampaLocalStorage(); // Stampare il localStorage in console
  alert('Dati salvati con successo!');
});
