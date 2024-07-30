document.addEventListener("DOMContentLoaded", function() {
  // Détecter la langue de l'OS de l'utilisateur
  var userLang = navigator.language || navigator.userLanguage;

  // Rediriger en fonction de la langue détectée
  if (userLang.startsWith('fr')) {
    // Si la langue est le français, charger la page française
    window.location.href = "fr/index.html";
  } else {
    // Sinon, charger la page anglaise
    window.location.href = "en/index.html";
  }
});
