MEMORIA TÉCNICA DEL PROYECTO

Sitio Web Institucional IAF (Iter ad Fraternitatem)

Código documental: IAF-GOB-001
Documento: Memoria Técnica del Proyecto
Versión: 0.1.0
Estado: En desarrollo
Fecha de inicio: 02 de julio de 2026

⸻

1. Objetivo del documento

La presente Memoria Técnica tiene por objeto registrar de manera cronológica, 
verificable y auditable todas las decisiones, actividades, validaciones, 
incidencias y acuerdos adoptados durante el desarrollo del Sitio Web Institucional
del proyecto Iter ad Fraternitatem (IAF).

De conformidad con la metodología SIGLUX, ninguna actividad se considerará 
concluida hasta que quede asentada en esta memoria y haya sido validada 
funcionalmente.

⸻

2. Alcance

Esta memoria comprende todas las fases del desarrollo del sitio web institucional,
incluyendo:

* Planeación.
* Gobierno del proyecto.
* Gestión del repositorio.
* Arquitectura del sitio.
* Desarrollo.
* Validación.
* Publicación.
* Mantenimiento.
* Versionamiento.

⸻

3. Metodología de trabajo

Se adopta la metodología institucional SIGLUX, basada en los siguientes 
principios:

1. Un objetivo por etapa.
2. Una implementación por vez.
3. Validación obligatoria antes de avanzar.
4. Trazabilidad completa de las decisiones.
5. Control estricto de versiones.
6. Evidencia documental de cada hito.
7. Reversibilidad de los cambios mediante Git.

⸻

4. Bitácora cronológica

Hito 001 — Creación del repositorio

Fecha: 02 de julio de 2026

Actividad

Se creó el repositorio oficial del proyecto en GitHub para alojar el código 
fuente del Sitio Web Institucional de IAF.

Resultado

Actividad concluida satisfactoriamente.

Estado

Validado.

⸻

Hito 002 — Estructura inicial del proyecto

Fecha: 02 de julio de 2026

Actividad

Se definió y creó la estructura base del proyecto, incorporando los archivos
y directorios mínimos necesarios para un desarrollo ordenado.

Se incluyeron, entre otros:

* index.html
* README.md
* LICENSE
* .gitignore
* assets/
* docs/
* .github/

Asimismo, se establecieron las carpetas destinadas a hojas de estilo, scripts,
imágenes, iconografía y tipografías.

Observación

Durante esta actividad se utilizó GitHub Desktop, el cual generó múltiples 
commits automáticos derivados de la creación progresiva de archivos.

Tras el análisis correspondiente, se determinó que esta situación no afecta 
la integridad del proyecto ni la trazabilidad del desarrollo, por lo que el
hito fue aceptado.

Estado

Validado.

⸻

Hito 003 — Definición de la estrategia de ramas

Fecha: 02 de julio de 2026

Actividad

Se estableció la política oficial de control de versiones.

Se definieron las ramas permanentes:

* main
* develop

Asimismo, se acordó que las ramas feature/* serán creadas únicamente cuando 
exista una funcionalidad concreta por desarrollar, evitando la generación 
anticipada de ramas sin propósito inmediato.

Resultado

Se creó exitosamente la rama develop a partir de main.

Se verificó la posibilidad de alternar entre ambas ramas sin incidencias.

Estado

Validado.

⸻

Hito 004 — Publicación inicial mediante GitHub Pages

Fecha: 02 de julio de 2026

Actividad

Se habilitó GitHub Pages para el repositorio institucional.

Se configuró el despliegue desde la rama main utilizando la carpeta raíz (/root).

Validación realizada

Se verificó que:

* GitHub Pages quedó habilitado.
* El despliegue concluyó sin errores.
* La URL pública respondió correctamente.
* El archivo index.html fue accesible desde un navegador.
* El contenido inicial del sitio se visualizó correctamente.

Estado

Validado.

⸻

5. Acuerdos metodológicos

Durante esta fase quedaron establecidos los siguientes acuerdos:

* El desarrollo se realizará mediante una metodología incremental.
* No se desarrollará una nueva funcionalidad hasta validar completamente la
anterior.
* Toda sugerencia relacionada con Git o GitHub deberá acompañarse de 
instrucciones detalladas para su ejecución.
* Cada procedimiento concluirá con una etapa formal de validación antes de 
continuar.
* El usuario utilizará preferentemente la versión web de GitHub para la 
administración del repositorio cuando trabaje desde una tableta.
* GitHub Desktop se utilizará principalmente en equipos de escritorio para 
operaciones locales cuando resulte conveniente.

⸻

6. Estado actual del proyecto

Componente	Estado
Repositorio GitHub	Validado
Estructura base	Validada
Rama develop	Validada
Estrategia de ramas	Validada
GitHub Pages	Operativo
Sitio de prueba	Publicado

⸻

7. Próximo hito

El siguiente hito consistirá en la creación de la primera rama de desarrollo 
específica (feature/*) destinada a implementar la arquitectura visual inicial
del sitio web, respetando el flujo de trabajo definido para SIGLUX.

⸻

8. Historial de versiones

Versión	Fecha	Descripción
0.1.0	02/07/2026	Primera emisión de la Memoria Técnica. Se documentan la 
creación del repositorio, la estructura inicial, la estrategia de ramas y la 
publicación inicial mediante GitHub Pages.

⸻
Política SIGLUX-DEV-001 – Diagnóstico previo a la corrección

Ninguna incidencia técnica será corregida sin antes identificar, documentar y validar su causa raíz. Quedan descartadas las correcciones por ensayo y error como metodología ordinaria de trabajo. Toda acción correctiva deberá sustentarse en evidencia técnica obtenida durante la fase de diagnóstico.

⸻
