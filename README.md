# Iter ad Fraternitatem (IAF)

Repositorio oficial del proyecto. Desarrollado bajo la metodología SIGLUX.

IAF es el proyecto tecnológico mediante el cual se desarrolla el sitio web institucional de la **Resp.·. Log.·. Simb.·. Fraternidad No. 1**, Or.·. de Veracruz (MT-0020: la identidad institucional prevalece sobre la identidad del proyecto en la interfaz del sitio).

## Estructura

```
IAF/
├── index.html            Inicio
├── historia.html          Historia de la Logia
├── galeria.html            Galería (placeholders, listos para fotos reales)
├── biblioteca.html        Landing que enlaza a la Biblioteca Virtual y explica los préstamos internos
├── faq.html                  Preguntas frecuentes
├── contacto.html           Contacto + formulario "Solicitar Entrevista"
├── assets/css/style.css   Hoja de estilos única (paleta institucional MT-0021, responsiva)
├── assets/js/config.js     URLs del ERP y de la Biblioteca Virtual (edítalas aquí)
├── assets/js/main.js        Menú móvil, acordeón FAQ, envío del formulario de contacto
├── assets/img/               mark.svg y seal.svg (emblema en SVG)
└── Memoria_Tecnica.md      Registro de decisiones del proyecto (metodología SIGLUX)
```

## Paleta institucional (MT-0021)

| Color | Hex | Uso |
|---|---|---|
| Rojo institucional | `#C60800` | Identidad, énfasis (encabezados internos, héroe, pie) |
| Dorado institucional | `#EFB810` | Detalles decorativos, acentos |
| Blanco | `#FFFFFF` | Fondo principal de lectura |
| Verde institucional | `#7BB369` | Elementos secundarios (iconos de valores, categorías) |

Variables centralizadas en `assets/css/style.css` (`:root`).

## Cómo verlo localmente

Abre `index.html` directamente en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8000
```

## Conexión con Fraternitas-ERP y la Biblioteca Virtual

Edita `assets/js/config.js`:

- `ERP_URL`: URL de la web app de Apps Script (proyecto `Fraternitas-ERP-prototipo`). El botón "Acceso Miembros" del menú abre esta URL en una pestaña nueva.
- `BIBLIOTECA_VIRTUAL_URL`: URL pública del proyecto `20_BIBLIOTECA`. En desarrollo local apunta a la ruta relativa (`../../20_BIBLIOTECA/index.html`); reemplázala por la URL de producción al desplegar cada proyecto por separado.

## Reemplazar el arte del sello

`assets/img/seal.svg` y `assets/img/mark.svg` son un emblema construido en SVG a partir de la paleta institucional (no las artes originales recuperadas como antecedente, que no existen como archivo en este repositorio). Para usar las imágenes reales de la logia, sustituye ambos archivos conservando el nombre, o actualiza las referencias `src="assets/img/..."` en cada página si cambias la extensión.

## Trazabilidad

Las decisiones relevantes de este proyecto se registran en `Memoria_Tecnica.md`, conforme a la metodología SIGLUX (MT-0008).
