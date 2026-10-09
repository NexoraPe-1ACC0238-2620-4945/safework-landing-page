// Variables globales
let currentLang = 'en';
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

// Función para cargar archivo de traducción
async function loadLang(lang) {
  try {
    const response = await fetch(`i18n/${lang}.json`);
    const translations = await response.json();

    // Recorrer todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.innerHTML = translations[key];
      }
    });

    // Actualizar label del switcher
    langLabel.textContent = lang.toUpperCase();
    currentLang = lang;

  } catch (error) {
    console.error('Error cargando traducciones:', error);
  }
}

// Cambiar idioma al toggle
langToggle.addEventListener('change', () => {
  const newLang = langToggle.checked ? 'es' : 'en';
  loadLang(newLang);
});

// Cargar idioma por defecto
loadLang(currentLang);
