// Função para exibir o spinner no botão especial
function mostrarSpinner(button) {
  // Remove o texto e insere o spinner do Bootstrap
  button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;
  button.disabled = true;
}

// Validação dos formulários utilizando a API de validação do Bootstrap
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation, #form-inputs');

  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});

// Oculta a tela de carregamento quando todos os recursos forem carregados
window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
});
