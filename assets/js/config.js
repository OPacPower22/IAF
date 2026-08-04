/**
 * Configuración de enlaces externos del sitio.
 * Edita estas dos constantes cuando despliegues el ERP y la Biblioteca Virtual.
 */
const SITIO_CONFIG = {
  // URL de la web app de Fraternitas-ERP (deployment de producción @16).
  ERP_URL: "https://script.google.com/macros/s/AKfycbzPNHIyCb67VTfXHC8gIFvCj9a3E7KLxhwWcDcRBvyALYQ9974H0pDaVl25-4zc98R1/exec",

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
