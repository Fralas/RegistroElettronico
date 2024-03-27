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
  });