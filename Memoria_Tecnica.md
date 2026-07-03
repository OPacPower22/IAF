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

MT 001 — Creación del repositorio

Fecha: 02 de julio de 2026

Actividad

Se creó el repositorio oficial del proyecto en GitHub para alojar el código 
fuente del Sitio Web Institucional de IAF.

Resultado

Actividad concluida satisfactoriamente.

Estado

Validado.

⸻

MT 002 — Estructura inicial del proyecto

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

MT 003 — Definición de la estrategia de ramas

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

MT 004 — Publicación inicial mediante GitHub Pages

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

Se incorpora oficialmente la política:

SIGLUX-DEV-001 – Diagnóstico previo a la corrección

Toda incidencia técnica deberá someterse a un proceso formal de diagnóstico y análisis de causa raíz antes de ejecutar cualquier acción correctiva. Se prohíbe como práctica ordinaria la corrección basada en ensayo y error. Toda medida correctiva deberá sustentarse en evidencia técnica suficiente y quedar documentada en la Memoria Técnica correspondiente.

⸻

Decisión 001 (Aprobada)

Se adopta la siguiente estructura documental para el proyecto del sitio web:

IAF/
│
├── docs/
│   ├── gobernanza/
│   │   ├── IAF-WEB-GOB-000
│   │   ├── IAF-WEB-GOB-001
│   │   ├── ADR/
│   │   └── politicas/
│   │
│   ├── arquitectura/
│   │
│   ├── desarrollo/
│   │
│   ├── manuales/
│   │
│   ├── memoria/
│   │   └── Memoria_Tecnica-Sitio_Web_IAF.md
│   │
│   └── anexos/
│
├── assets/
├── index.html
└── README.md

⸻

Se propone la siguiente nomenclatura:

* IAF-GOB-000 → Sistema de Clasificación Documental.
* IAF-GOB-001 → Memoria Técnica General del Proyecto.
* IAF-ADR-001 → Registro de Decisiones de Arquitectura.
* IAF-POL-001 → Políticas del proyecto.
* IAF-MAN-001 → Manuales.
* IAF-ANX-001 → Anexos.

⸻

MT-0005 - Consolidación del repositorio institucional

Con motivo del inicio formal del desarrollo del sitio web institucional de Iter ad Fraternitatem (IAF), se creó el repositorio oficial del proyecto en GitHub, estableciéndose como el medio institucional para el control de versiones, administración del código fuente y sincronización del desarrollo entre los distintos entornos de trabajo.

Durante esta etapa se definió la estrategia inicial de ramas, conservando una rama principal (main) para las versiones estables del proyecto y una rama de desarrollo (develop) destinada a concentrar las funcionalidades previamente validadas antes de su integración a la rama principal.

Como criterio metodológico, se acordó que las ramas de trabajo (feature/*) serán creadas únicamente cuando exista una funcionalidad específica por desarrollar, evitando la generación anticipada de ramas sin un propósito inmediato.

Asimismo, se estableció que ninguna implementación será considerada concluida hasta haber sido funcionalmente validada y asentada en la presente Memoria Técnica.

Estado: Concluido y validado.

⸻

MT-0006 - Verificación de la infraestructura de publicación

Como parte de la preparación del entorno de desarrollo, se habilitó el servicio GitHub Pages para la publicación del sitio institucional.

Durante las primeras pruebas de despliegue se presentó una incidencia en el proceso de publicación, reportándose un error durante la fase de deployment, pese a que la compilación y generación del artefacto se realizaban correctamente.

En atención al principio de diagnóstico previo a la corrección, se evitó realizar modificaciones inmediatas a la configuración del proyecto y se procedió a recopilar evidencia mediante la revisión de los registros de GitHub Actions, la configuración de GitHub Pages y el estado de los despliegues efectuados.

El análisis permitió determinar que la infraestructura del repositorio se encontraba correctamente configurada y que el sitio permanecía accesible mediante la URL pública asignada.

Posteriormente, la incidencia desapareció sin que fuera necesario modificar la configuración del proyecto, concluyéndose que el comportamiento observado correspondió a una falla temporal del propio servicio GitHub Pages.

Como resultado de esta experiencia se reafirmó la conveniencia de documentar previamente toda incidencia técnica antes de ejecutar acciones correctivas, evitando modificaciones basadas únicamente en prueba y error.

Estado: Incidencia cerrada.

⸻

MT-0007 - Identificación de documentación previa al inicio formal del proyecto

Durante la revisión de los recursos disponibles en los distintos entornos de trabajo se identificó la existencia de documentación y materiales desarrollados con anterioridad a la creación del repositorio institucional.

Entre los elementos localizados destacan:
- Prototipos gráficos del sitio web institucional.
- Desarrollo preliminar de la identidad visual de IAF.
- Propuestas de sello institucional.
- Organización inicial del directorio del proyecto.
- Documento IAF-AC-001.md, correspondiente a la carpeta de Actas.

Asimismo, se constató que el desarrollo había sido suspendido previamente con el propósito de estructurar el ecosistema SIGLUX antes de continuar con la implementación del sitio web.

Se reconoció que actualmente existen diferencias entre la información almacenada en la computadora personal y la disponible en la tableta, consecuencia de que el repositorio institucional aún no existía durante las primeras etapas del proyecto.

Por tal motivo, se acordó que la documentación previa será considerada material histórico del proyecto y será incorporada progresivamente al repositorio oficial conforme avance el proceso de revisión y normalización documental.

Estado: En proceso de integración.  

⸻

