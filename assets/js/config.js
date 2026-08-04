/**
 * Configuración de enlaces externos del sitio.
 * Edita estas dos constantes cuando despliegues el ERP y la Biblioteca Virtual.
 */
const SITIO_CONFIG = {
  // URL de acceso a Fraternitas-ERP (sucesor del prototipo en Apps Script, ya descontinuado).
  ERP_URL: "http://fraternitas.local:8000/login/",

  // URL pública de la Biblioteca Virtual (repo biblioteca-virtual, GitHub Pages).
  BIBLIOTECA_VIRTUAL_URL: "https://opacpower22.github.io/biblioteca-virtual/"
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-enlace='erp']").forEach(function (el) {
    el.setAttribute("href", SITIO_CONFIG.ERP_URL);
  });
  document.querySelectorAll("[data-enlace='biblioteca']").forEach(function (el) {
    el.setAttribute("href", SITIO_CONFIG.BIBLIOTECA_VIRTUAL_URL);
  });
});
