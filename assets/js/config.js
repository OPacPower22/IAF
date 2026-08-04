/**
 * Configuración de enlaces externos del sitio.
 * Edita estas dos constantes cuando despliegues el ERP y la Biblioteca Virtual.
 */
const SITIO_CONFIG = {
  // URL de la web app de Fraternitas-ERP (deployment de producción @16).
  ERP_URL: "https://script.google.com/macros/s/AKfycbzPNHIyCb67VTfXHC8gIFvCj9a3E7KLxhwWcDcRBvyALYQ9974H0pDaVl25-4zc98R1/exec",

  // URL pública de la Biblioteca Virtual (proyecto en 20_BIBLIOTECA).
  // En desarrollo local, ambos proyectos viven en el mismo disco, así que se usa una ruta relativa.
  BIBLIOTECA_VIRTUAL_URL: "../../20_BIBLIOTECA/index.html"
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-enlace='erp']").forEach(function (el) {
    el.setAttribute("href", SITIO_CONFIG.ERP_URL);
  });
  document.querySelectorAll("[data-enlace='biblioteca']").forEach(function (el) {
    el.setAttribute("href", SITIO_CONFIG.BIBLIOTECA_VIRTUAL_URL);
  });
});
