// Menú móvil
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".nav-alterna");
  const nav = document.querySelector(".nav");
  if (boton && nav) {
    boton.addEventListener("click", function () {
      nav.classList.toggle("abierto");
    });
  }

  // Marca el enlace de navegación activo según la página actual
  const pagina = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (enlace) {
    if (enlace.getAttribute("href") === pagina) {
      enlace.classList.add("activo");
    }
  });

  // Acordeón de preguntas frecuentes
  document.querySelectorAll(".faq-pregunta").forEach(function (boton) {
    boton.addEventListener("click", function () {
      boton.parentElement.classList.toggle("abierto");
    });
  });

  // Formulario de contacto (sin backend propio: abre el cliente de correo)
  const formulario = document.querySelector(".form-contacto");
  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();
      const datos = new FormData(formulario);
      const asunto = encodeURIComponent("Contacto desde el sitio — " + datos.get("nombre"));
      const cuerpo = encodeURIComponent(
        "Nombre: " + datos.get("nombre") +
        "\nCorreo: " + datos.get("correo") +
        "\nTeléfono: " + datos.get("telefono") +
        "\n\nMensaje:\n" + datos.get("mensaje")
      );
      window.location.href = "mailto:fraternidad.num1@gmail.com?subject=" + asunto + "&body=" + cuerpo;
    });
  }
});
