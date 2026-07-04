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

MT-0008 - Definición de la metodología operativa para el desarrollo del proyecto

Durante las primeras actividades de organización del proyecto se revisó la forma en que se llevaría a cabo el desarrollo del sitio web institucional, concluyéndose que resultaba necesario establecer una metodología de trabajo que privilegiara la estabilidad del proyecto sobre la velocidad de implementación.

Como resultado de dicho análisis se acordó que el desarrollo se realizaría mediante un proceso incremental, ejecutando una única actividad a la vez y evitando avanzar hacia nuevas funcionalidades sin haber validado previamente el correcto funcionamiento de la etapa inmediata anterior.

Asimismo, se determinó que toda propuesta técnica relacionada con el desarrollo, la administración del repositorio o la utilización de GitHub deberá ir acompañada de instrucciones detalladas para su ejecución, permitiendo verificar paso a paso cada procedimiento antes de darlo por concluido.

Se acordó igualmente que toda actividad relevante deberá quedar asentada en la Memoria Técnica inmediatamente después de su validación, garantizando así la conservación del contexto y la trazabilidad de las decisiones adoptadas.

Estado: Concluido y validado.

Observaciones: La adopción de esta metodología responde al propósito de construir una base documental sólida desde las primeras etapas del proyecto, evitando la acumulación de cambios no documentados o decisiones cuya justificación pueda perderse con el tiempo.

⸻

MT-0009 - Revisión de la estructura documental existente

Con el propósito de iniciar la organización documental del proyecto, se propuso inicialmente crear una nueva estructura de directorios destinada a alojar la documentación técnica, de arquitectura y de gobernanza.

Sin embargo, durante la revisión de los recursos disponibles en el entorno local se constató que el proyecto ya contaba con una estructura de directorios previamente organizada, desarrollada antes de la creación del repositorio institucional.

Entre las carpetas identificadas se encuentran:
* Admin
* Contenido
* Desarrollo
* Gobierno
* Identidad
* Investigacion
* Publicacion
* Recursos
* Respaldos

Asimismo, dentro del directorio Admin se localizó la carpeta Actas, conteniendo el archivo denominado IAF-AC-001.md, el cual, aunque actualmente no contiene información, evidencia que desde etapas anteriores ya se contemplaba un sistema documental para el proyecto.

Derivado de este hallazgo se reconsideró la estrategia inicialmente propuesta para la organización documental, concluyéndose que resultaba más conveniente analizar y normalizar la estructura existente antes de sustituirla por una completamente nueva.

Estado: Concluido.

Observaciones: Este hallazgo confirmó que el proyecto posee antecedentes organizativos previos al inicio formal de la metodología SIGLUX, los cuales deberán ser preservados y evaluados durante el proceso de integración documental.

⸻

Asiento MT-0010 - Recuperación de antecedentes gráficos y conceptuales del proyecto

Como parte del proceso de revisión de la documentación histórica del proyecto, fueron recuperados diversos materiales desarrollados antes de la suspensión temporal de actividades ocasionada por la estructuración del ecosistema SIGLUX.

Entre los elementos localizados destacan:
* Propuesta gráfica del sello institucional de IAF.
* Documento descriptivo del sistema de identidad visual.
* Prototipo funcional (mockup) de la página principal del sitio web institucional.

El análisis preliminar de dichos materiales permitió constatar que el proyecto contaba con un grado considerable de avance conceptual antes de su interrupción, especialmente en lo relativo a identidad visual, organización de contenidos y experiencia de usuario.

No obstante, se reconoció que dichos materiales fueron elaborados bajo un contexto metodológico distinto al actualmente adoptado, por lo que deberán ser sometidos a revisión antes de incorporarse como referencia para el desarrollo definitivo del sitio.

Se acordó conservar dichos antecedentes como evidencia histórica del proyecto, reconociendo su valor documental y su utilidad para comprender la evolución conceptual de IAF.

Estado: Registrado.

Observaciones: La existencia de estos antecedentes confirma que el proceso actual constituye una continuidad del trabajo previamente desarrollado y no el inicio absoluto del proyecto. En consecuencia, la evolución futura del sitio deberá procurar conservar aquellos elementos conceptuales que continúen siendo compatibles con la visión institucional vigente.

⸻

MT-0011 - Reactivación formal del desarrollo del sitio web institucional

Concluidas las actividades iniciales de organización del repositorio,validación de la infraestructura tecnológica y recuperación de la documentación histórica disponible, se determinó que existían las condiciones mínimas necesarias para reanudar formalmente el desarrollo del sitio web institucional de Iter ad Fraternitatem (IAF).

Se acordó que el proyecto continuaría tomando como punto de partida la información previamente desarrollada, evitando reiniciar actividades que ya contaban con antecedentes documentales suficientes.

Asimismo, se estableció que todo desarrollo posterior deberá conservar la continuidad histórica del proyecto, procurando que cada nueva decisión técnica pueda relacionarse con los antecedentes que le dieron origen.

Estado: Concluido.

Observaciones: La reactivación del proyecto no constituye el inicio absoluto del desarrollo, sino la continuación formal de un proceso previamente suspendido para permitir la consolidación metodológica del ecosistema SIGLUX.

⸻

MT-0012 - Definición de la línea base tecnológica

Durante el análisis previo al reinicio del desarrollo se revisaron las alternativas tecnológicas disponibles para la implementación del sitio web institucional.

Considerando el estado actual del proyecto, la necesidad de mantener una infraestructura sencilla y fácilmente administrable, así como la conveniencia de facilitar el desarrollo desde distintos entornos de trabajo, se decidió iniciar la implementación utilizando tecnologías web estándar.

La línea base tecnológica quedó integrada inicialmente por:
- HTML5.
- CSS3.
- JavaScript.
- Git como sistema de control de versiones.
- GitHub como repositorio institucional.
- GitHub Pages como plataforma inicial de publicación.

Se dejó constancia de que esta decisión corresponde únicamente a la etapa inicial del proyecto y podrá ser revisada conforme evolucionen los requerimientos funcionales del sistema.

Estado: Concluido.

Observaciones: Se privilegió una arquitectura tecnológica de baja complejidad con el propósito de concentrar los esfuerzos iniciales en la organización, estabilidad y documentación del proyecto antes de incorporar tecnologías adicionales.

⸻

MT0013 - Recuperación del prototipo funcional de la página principal

Como parte del proceso de revisión de antecedentes se recuperó el prototipo funcional desarrollado previamente para la página principal del sitio web institucional.

El análisis del material permitió identificar una propuesta integral que contempla, entre otros elementos:
- Encabezado institucional.
- Sistema de navegación.
- Imagen principal.
- Identidad visual.
- Presentación institucional.
- Línea del tiempo histórica.
- Sección de valores.
- Convocatoria para nuevos integrantes.
- Área destinada al acceso de miembros.

Asimismo, se recuperó la propuesta correspondiente al sistema de identidad visual de IAF, integrada por el sello institucional, principios gráficos, aplicaciones, paleta cromática y lineamientos tipográficos.

Ambos documentos fueron reconocidos como antecedentes relevantes para el desarrollo del proyecto y serán utilizados como referencia durante las siguientes etapas de análisis y diseño.

Estado: Registrado.

Observaciones: La recuperación de estos materiales permitió confirmar que el proyecto posee un grado importante de madurez conceptual, reduciendo significativamente el trabajo requerido durante las fases iniciales de diseño funcional.

⸻

MT-0014 - Reorientación de la estrategia de desarrollo

Como consecuencia del análisis de la documentación histórica recuperada, se reconsideró la estrategia inicialmente prevista para el desarrollo del sitio web.

En lugar de elaborar un nuevo diseño desde sus fundamentos, se determinó que el proceso consistirá en revisar, validar y perfeccionar el prototipo existente, conservando aquellos elementos que continúen siendo compatibles con los objetivos institucionales de IAF y adecuando aquellos que requieran mejoras técnicas, funcionales o de accesibilidad.

De igual forma, se acordó que el desarrollo del sitio deberá respetar la identidad institucional previamente definida, procurando mantener coherencia entre la arquitectura del sistema, la identidad gráfica y los contenidos históricos de la institución.

Estado: Concluido.

Observaciones: Esta decisión permitió transformar el enfoque del proyecto, pasando de un desarrollo basado en la creación de nuevos conceptos a un proceso de evolución controlada sobre una base previamente consolidada.

⸻

MT-0015 - Preparación para el inicio de la implementación funcional

Concluidas las actividades de recuperación documental, estabilización tecnológica y organización del proyecto, se determinó que la siguiente etapa consistirá en iniciar la implementación gradual de la página principal del sitio web institucional.

Se acordó que dicha implementación se desarrollará de manera incremental, verificando el funcionamiento de cada componente antes de continuar con el siguiente, procurando mantener permanentemente sincronizada la documentación técnica con el avance efectivo del proyecto.

Asimismo, se reconoció que el desarrollo funcional constituirá la primera fase de implementación efectiva posterior a la consolidación metodológica del ecosistema SIGLUX.

Estado: Pendiente de ejecución.

Observaciones: La conclusión de esta etapa marca el cierre del periodo de preparación y el inicio formal de la fase de implementación del sitio web institucional.

⸻

MT-0016 - Definición del flujo documental del proyecto

Durante el análisis de la organización documental del proyecto se revisó el papel que desempeña la Memoria Técnica dentro de la metodología de trabajo adoptada para el ecosistema SIGLUX.

Inicialmente se consideró que determinados principios, políticas o criterios arquitectónicos podrían incorporarse directamente a los documentos especializados correspondientes. Sin embargo, tras el análisis metodológico efectuado, se concluyó que dicho procedimiento rompería la trazabilidad documental del proyecto.

Como resultado de esta revisión se estableció que toda decisión relevante deberá registrarse en primera instancia en la Memoria Técnica, independientemente de que posteriormente sea desarrollada, formalizada o normada mediante otros documentos pertenecientes al sistema documental del proyecto.

En consecuencia, la Memoria Técnica se reconoce como el punto de origen documental de todas las decisiones institucionales adoptadas durante el ciclo de vida del proyecto.

Estado: Concluido y validado.

Observaciones: Los documentos especializados conservarán su función específica, pero deberán mantener una relación trazable con el registro correspondiente de la Memoria Técnica, constituyendo ésta la fuente primaria para la reconstrucción histórica del proyecto.

⸻

MT-0017 - Adopción del principio de crecimiento orgánico de la arquitectura

Como resultado del análisis efectuado sobre la estructura física del proyecto, se revisó la conveniencia de crear anticipadamente directorios destinados a albergar posibles desarrollos futuros.

Durante dicha revisión se observó que la creación preventiva de carpetas cuya utilización aún no ha sido definida incrementa innecesariamente la complejidad del proyecto, dificulta su mantenimiento y puede generar estructuras documentales carentes de contenido o propósito claramente identificado.

En atención a estas consideraciones se acordó que la estructura física del proyecto crecerá únicamente conforme exista una necesidad real de incorporar nuevos documentos, recursos o componentes funcionales.

En consecuencia, la creación de nuevos directorios dejará de responder a previsiones hipotéticas y estará condicionada a la existencia de un elemento concreto que requiera ser incorporado al proyecto.

Se determinó igualmente que toda nueva incorporación deberá justificarse por la existencia de un documento, recurso o componente cuya ubicación resulte necesaria dentro de la estructura del proyecto.

Estado: Concluido y validado.

Observaciones: Este criterio permitirá que la arquitectura física evolucione de forma controlada, manteniendo la simplicidad estructural durante las primeras etapas del proyecto y evitando reorganizaciones innecesarias en el futuro.

⸻

MT-0018 - Principio "La estructura sigue a la necesidad documentada"

Como consecuencia del análisis efectuado sobre el crecimiento orgánico de la arquitectura del proyecto, se identificó la necesidad de establecer un criterio rector que orientara la evolución futura de la estructura documental y física del sistema.

Después de evaluar diversas alternativas, se concluyó que la incorporación de nuevos elementos estructurales deberá responder siempre a una necesidad previamente identificada y documentada, descartando la creación de directorios, componentes o recursos cuya existencia no se encuentre plenamente justificada.

Como síntesis de este criterio se adoptó el principio:

"La estructura sigue a la necesidad documentada".

Este principio establece que la evolución de la arquitectura física del proyecto deberá producirse únicamente como consecuencia de requerimientos reales previamente analizados y registrados, procurando que cada nuevo elemento incorporado posea un propósito claramente identificado dentro del ecosistema.

Se acordó que este principio constituirá uno de los fundamentos metodológicos para el desarrollo del proyecto y que, en su oportunidad, será desarrollado dentro de los documentos especializados de arquitectura y gobernanza, manteniendo siempre como referencia el presente registro de la Memoria Técnica.

Estado: Concluido y validado.

Observaciones: Durante la discusión de este principio se identificó su estrecha relación con la filosofía general de SIGLUX, particularmente con la prioridad otorgada a la trazabilidad, la evolución controlada y la construcción progresiva del conocimiento institucional.

⸻

MT-0019 - Formalización del flujo de generación del conocimiento documental

Durante el proceso de actualización de la Memoria Técnica se realizó una revisión sobre la función que ésta desempeña dentro de la metodología documental del ecosistema SIGLUX.

Como resultado del análisis se confirmó que la Memoria Técnica constituye el documento primario de registro del conocimiento generado durante el desarrollo del proyecto, por lo que todo hecho, observación, análisis, discusión, decisión o acuerdo deberá quedar asentado inicialmente en ella antes de incorporarse, desarrollarse o formalizarse en cualquier otro documento especializado.

Se reconoció que la finalidad de este procedimiento no consiste únicamente en conservar un registro cronológico de las actividades realizadas, sino en preservar el razonamiento que condujo a cada decisión, permitiendo reconstruir posteriormente el contexto técnico, metodológico e institucional en el que fueron adoptadas.

Derivado de esta reflexión se acordó adoptar como principio rector del ecosistema la siguiente premisa:

"En SIGLUX quedará documentado también el razonamiento que produjo cada resultado."

Asimismo, durante esta sesión el asistente asumió formalmente el siguiente compromiso metodológico para el desarrollo del proyecto:

"Antes de proponer la creación, modificación o actualización de cualquier documento especializado, verificará que el hecho, análisis, discusión o decisión correspondiente haya sido previamente registrado en la Memoria Técnica. En caso contrario, propondrá como primera acción su incorporación a la Memoria Técnica y, posteriormente, su desarrollo en el documento especializado que corresponda, estableciendo las relaciones cruzadas necesarias para preservar la trazabilidad documental del ecosistema".

Se acordó igualmente que este criterio será observado durante todo el desarrollo del proyecto y servirá como referencia para la elaboración de la documentación técnica, arquitectónica, normativa y de gobernanza que se genere con posterioridad.

Estado: Concluido y validado.

Observaciones: Este acuerdo fortalece el principio de trazabilidad documental del ecosistema SIGLUX al garantizar que toda pieza de conocimiento conserve evidencia de su origen, evolución y fundamento, permitiendo reconstruir de manera íntegra el proceso de toma de decisiones del proyecto.

⸻

Inicialmente se concebía la Memoria Técnica como un registro de actividades. Durante el desarrollo del proyecto se comprendió que su verdadero propósito es constituirse en el origen documental de todo el conocimiento generado por el ecosistema. Esta evolución conceptual modificó la metodología de trabajo y redefinió el papel de la Memoria Técnica como eje central de la trazabilidad institucional.

⸻

MT-0020 - Definición preliminar de la identidad institucional del sitio web

Como parte de las actividades previas al inicio del desarrollo funcional del sitio web institucional, se revisó la identidad que deberá comunicar la interfaz principal del sistema.

Durante el análisis inicial se propuso utilizar como elemento principal del encabezado el nombre del proyecto Iter ad Fraternitatem (IAF). Sin embargo, al revisar el propósito del sitio y el alcance institucional del proyecto, se concluyó que dicha propuesta no reflejaba correctamente la identidad de la institución a la cual estará dirigido el sitio.

Después de analizar el objetivo de la plataforma se determinó que el sitio web corresponde institucionalmente a la Respetable Logia Simbólica Fraternidad No. 1, siendo IAF el proyecto tecnológico mediante el cual se desarrolla e implementa la solución informática.

En consecuencia, se acordó que el encabezado principal del sitio identificará de manera visible a la institución mediante la siguiente composición:
* Logotipo institucional.
* Nombre: R.·.L.·.S.·. Fraternidad No. 1.
* Lema institucional: "Tradición, conocimiento y fraternidad al servicio del perfeccionamiento humano."
* Menú principal de navegación.

Con esta decisión se busca que el visitante identifique inmediatamente a la institución titular del sitio, manteniendo a IAF como el proyecto responsable de su desarrollo y evolución tecnológica.

Estado: Concluido y validado.

Observaciones: Se determinó que la identidad institucional del sitio deberá prevalecer sobre la identidad del proyecto tecnológico que le da origen, evitando generar confusión respecto del propósito y titularidad de la plataforma.

⸻

MT-0021 - Definición preliminar de la paleta cromática institucional

Como complemento a la definición de la identidad visual del sitio web, se revisaron las propuestas cromáticas desarrolladas durante etapas anteriores del proyecto y aquellas utilizadas recientemente en los materiales institucionales.

Derivado de dicho análisis se acordó adoptar como línea base para el desarrollo de la interfaz la siguiente paleta cromática institucional:

-------------------------------------------------------------------------------
| Color	                 Código hexadecimal	           Aplicación preliminar.  |
| Rojo institucional	      #C60800	                   - Color primario de     |
|                                                      identidad institucional |
|                                                      y elementos de énfasis. |
|                                                                              |
| Dorado institucional	    #EFB810	                   - Detalles decorativos, |
|                                                      elementos simbólicos y  |
|                                                      acentos visuales.       |
|                                                                              |
| Blanco	                   #FFFFFF	                 - Fondo principal del   |
|                                                      sitio y áreas de lectura|
|                                                                              |
| Verde institucional	       #7BB369	                 - Color de apoyo para   |
|                                                      elementos secundarios,  |
|                                                      referencias al          |
|                                                      crecimiento             |
|                                                      institucional y recursos|
|                                                      gráficos específicos.   |
--------------------------------------------------------------------------------

Se acordó igualmente que estos colores constituyen una definición preliminar para la implementación inicial del sitio web y que su utilización será posteriormente desarrollada y normalizada dentro del documento correspondiente al Sistema de Identidad Visual.

Asimismo, se consideró conveniente que la implementación técnica del sitio adopte desde sus primeras etapas un sistema centralizado de variables de estilo, con el propósito de facilitar futuras modificaciones a la identidad visual sin afectar la estructura general de la interfaz.

Estado: Concluido y validado.

Observaciones: La adopción de esta paleta responde a la necesidad de mantener coherencia entre el sitio web y los materiales institucionales previamente desarrollados, procurando fortalecer la identidad gráfica de la Respetable Logia Simbólica Fraternidad No. 1.

⸻

MT-0022 - Verificación de la documentación preexistente y establecimiento de la línea base documental

Con el propósito de determinar la existencia de documentación institucional desarrollada con anterioridad al inicio formal del proyecto, se realizó una revisión del entorno principal de trabajo utilizado durante las primeras etapas de desarrollo.

Como resultado de dicha revisión se confirmó que no existen documentos correspondientes a gobernanza, arquitectura, desarrollo, auditoría o demás series documentales institucionales del proyecto IAF.

En consecuencia, se determinó que la Memoria Técnica constituye el primer documento formal del proyecto generado bajo la metodología del ecosistema SIGLUX y que los documentos especializados serán elaborados a partir de la presente etapa, conservando como punto de origen los registros contenidos en la Memoria Técnica.

Paralelamente, se efectuó un respaldo de las carpetas históricas del proyecto en Google Drive con el propósito de preservar los antecedentes existentes antes del inicio de la línea base documental institucional.

Estado: Validado.

Observaciones: La verificación realizada elimina la incertidumbre respecto a la existencia de documentación paralela y permite establecer como línea base oficial del proyecto la documentación alojada en el repositorio institucional.

⸻

MT-0023 - Determinación del orden de generación de la documentación especializada

Concluida la verificación de la documentación existente y establecida la línea base documental del proyecto, se analizó el orden en que deberán elaborarse los documentos especializados que conformarán el sistema documental de IAF.

Durante dicho análisis se descartó la conveniencia de generar simultáneamente todos los documentos previstos por la metodología SIGLUX, al considerarse que ello produciría una estructura documental anticipada cuya utilidad aún no se encuentra plenamente justificada.

En su lugar, se acordó que cada documento especializado será elaborado únicamente cuando exista una necesidad real derivada del avance del proyecto, observando el principio metodológico previamente adoptado de que la estructura sigue a la necesidad documentada.

Como consecuencia de este acuerdo, se determinó que el siguiente documento institucional por elaborar será IAF-ARC-000 – Arquitectura Física del Proyecto, por constituir el instrumento necesario para definir la organización física del proyecto antes de iniciar el desarrollo funcional del sitio web.

Se acordó igualmente que los documentos posteriores serán desarrollados conforme las necesidades del proyecto lo requieran, evitando la creación anticipada de documentación sin aplicación inmediata.

Estado: Validado.

Observaciones: Este acuerdo consolida el modelo de crecimiento orgánico de la documentación institucional, garantizando que cada documento surja como respuesta a una necesidad concreta y previamente identificada.

⸻

MT-0024 - Metodología para la elaboración de documentos especializados

Como parte del proceso de consolidación metodológica del proyecto se revisó la forma en que deberán elaborarse los documentos especializados que integrarán el sistema documental de IAF.

Durante el análisis se consideró la posibilidad de desarrollar dichos documentos de manera integral desde su primera versión. Sin embargo, tras evaluar la naturaleza evolutiva del proyecto y los principios metodológicos previamente adoptados, se concluyó que dicho procedimiento resultaría incongruente con la filosofía del ecosistema SIGLUX.

En consecuencia, se acordó que los documentos especializados serán desarrollados de manera incremental, mediante un proceso de construcción por consenso, abordando cada uno de sus capítulos, apartados o secciones de forma independiente.

Cada sección será objeto de análisis, discusión, revisión y validación antes de continuar con la siguiente, procurando que el documento evolucione de manera orgánica conforme avance la comprensión del proyecto y se consolide el conocimiento institucional.

Asimismo, se determinó que ninguna sección será considerada definitiva hasta haber sido revisada y aprobada, pudiendo ser modificada durante el proceso de elaboración cuando el desarrollo del proyecto así lo justifique.

Estado: Validado.

Observaciones: Esta metodología permitirá que la documentación especializada refleje fielmente la evolución del proyecto y mantenga coherencia con los principios de trazabilidad, crecimiento orgánico y mejora continua establecidos para el ecosistema SIGLUX.

⸻

MT-0025 - Determinación de la estrategia para la construcción de la arquitectura documental

Como consecuencia de la consolidación metodológica alcanzada durante las primeras etapas del proyecto, se revisó la forma en que serán elaborados los documentos especializados que integrarán la arquitectura documental de IAF.

Durante dicha revisión se confirmó que el desarrollo de cada documento especializado deberá responder a una necesidad previamente identificada y documentada, descartándose la elaboración anticipada de documentos cuya existencia no se encuentre plenamente justificada.

Se acordó igualmente que la elaboración de dichos documentos se realizará mediante un proceso incremental, desarrollando cada capítulo, apartado o sección de manera consensuada y validando su contenido antes de continuar con el siguiente.

Con el propósito de preservar la trazabilidad documental del proyecto, se determinó que toda decisión arquitectónica incorporada a los documentos especializados deberá poder relacionarse con el registro correspondiente de la Memoria Técnica que documentó su origen, análisis y justificación.

Como resultado de este acuerdo se determinó iniciar formalmente la serie documental correspondiente a Arquitectura mediante la elaboración del documento IAF-ARC-001, el cual constituirá el primer documento especializado del proyecto desarrollado íntegramente bajo la metodología del ecosistema SIGLUX.

Estado: Validado.

Observaciones: Se reconoce que el inicio de la serie documental de Arquitectura representa la transición formal entre la etapa de consolidación metodológica y el inicio del desarrollo estructurado del proyecto.

⸻

MT-0026 - Inicio de la etapa de documentación especializada

Concluidas las actividades correspondientes a la organización inicial del proyecto, la consolidación metodológica y el establecimiento de la línea base documental, se analizó la oportunidad de iniciar la elaboración de los documentos especializados que integrarán el sistema documental de IAF.

Durante dicho análisis se confirmó que las condiciones necesarias para comenzar esta nueva etapa se encuentran plenamente satisfechas, al haberse establecido previamente la infraestructura tecnológica, la metodología de trabajo, los principios de trazabilidad documental y la Memoria Técnica como documento primario del proyecto.

En consecuencia, se determinó iniciar formalmente la generación de la documentación especializada de IAF, desarrollándola conforme a las necesidades reales del proyecto y observando el principio de crecimiento orgánico previamente adoptado.

Se acordó que el primer documento especializado será IAF-ARC-001, correspondiente a la Arquitectura Física del Proyecto, por constituir el instrumento necesario para definir la organización estructural del proyecto antes de continuar con el desarrollo funcional del sitio web.

Estado: Validado.

Observaciones: La elaboración de este documento representa la transición entre la etapa de consolidación metodológica y el inicio formal de la arquitectura institucional del proyecto.

⸻

MT-0027 - Criterio para la elaboración de la documentación especializada

Durante la preparación del documento IAF-ARC-001 se revisó nuevamente el procedimiento mediante el cual deberán desarrollarse los documentos especializados del proyecto.

Como resultado del análisis se acordó que dichos documentos no serán redactados de forma integral en una sola etapa, sino mediante un proceso progresivo de construcción por consenso.

Cada capítulo, apartado o sección será analizado, discutido y validado individualmente antes de proceder con el siguiente, permitiendo que el contenido evolucione conforme aumente el conocimiento del proyecto y se consoliden sus fundamentos metodológicos.

Asimismo, se determinó que ningún capítulo será considerado definitivo hasta haber sido expresamente aprobado, pudiendo ser revisado y ajustado durante el proceso de elaboración cuando existan elementos técnicos o metodológicos que así lo justifiquen.

Finalmente, se acordó que toda decisión incorporada a los documentos especializados deberá mantener una relación trazable con el registro correspondiente de la Memoria Técnica que documentó su origen, análisis y justificación.

Estado: Validado.

Observaciones: Este procedimiento garantiza que la arquitectura documental del proyecto evolucione de forma controlada, preservando la coherencia entre la documentación especializada y la historia metodológica registrada en la Memoria Técnica.

⸻

MT-0028 - Incorporación del fundamento documental como elemento de los documentos especializados

Durante la preparación del documento IAF-ARC-001 se analizó la forma en que los documentos especializados deberán mantener la trazabilidad respecto de las decisiones que les dieron origen.

Como resultado de dicho análisis se observó que, si bien la metodología del ecosistema SIGLUX establece que toda decisión debe originarse en la Memoria Técnica, resultaba conveniente que dicha relación pudiera identificarse de manera explícita dentro de cada documento especializado.

Derivado de esta reflexión se propuso incorporar, como parte de la estructura de los documentos especializados, un apartado denominado "Fundamento documental", cuya finalidad será identificar los registros de la Memoria Técnica que dieron origen al contenido desarrollado en cada capítulo, apartado o sección.

Se determinó que este apartado no sustituye las referencias cruzadas ni los mecanismos de control documental establecidos por el ecosistema, sino que constituye un elemento adicional destinado a fortalecer la trazabilidad histórica del conocimiento y facilitar la reconstrucción del proceso de análisis y toma de decisiones.

En consecuencia, se acordó que la incorporación de este apartado será considerada durante la elaboración de los documentos especializados que integren el proyecto, quedando su definición formal sujeta a la documentación normativa que en su momento corresponda.

Estado: Validado.

Observaciones: La presente determinación fortalece el principio metodológico conforme al cual el conocimiento institucional conserva evidencia de su origen y evolución, permitiendo identificar con precisión los registros de la Memoria Técnica que sustentan cada decisión incorporada a la documentación especializada.

⸻

MT-0029 - Criterio de redacción para los documentos especializados

Durante la preparación del primer documento especializado del proyecto (IAF-ARC-001) se analizó el estilo de redacción que deberá observar la documentación normativa generada dentro del ecosistema SIGLUX.

Como resultado de dicho análisis se determinó que los documentos especializados cumplen una finalidad distinta a la de la Memoria Técnica.

Mientras que la Memoria Técnica tiene por objeto registrar cronológicamente los hechos, análisis, discusiones, decisiones y circunstancias que acompañan la evolución del proyecto, los documentos especializados tienen como finalidad establecer disposiciones, criterios, reglas, procedimientos o especificaciones con carácter permanente.

En consecuencia, se acordó que los documentos especializados deberán redactarse en tiempo presente, utilizando un lenguaje normativo, objetivo y atemporal, evitando incorporar referencias cronológicas, narrativas o circunstanciales propias del proceso histórico de desarrollo.

Los antecedentes, razonamientos, discusiones, alternativas evaluadas y demás elementos históricos permanecerán exclusivamente documentados en la Memoria Técnica, desde donde podrán establecerse las relaciones documentales correspondientes.

Esta separación permitirá distinguir claramente entre el registro histórico del proyecto y la documentación normativa que regula su funcionamiento.

Estado: Validado.

Observaciones: La adopción de este criterio fortalece la separación funcional entre la Memoria Técnica y los documentos especializados, preservando la naturaleza propia de cada uno y facilitando su mantenimiento, consulta y evolución.

⸻

MT-0030 - Procedimiento para la incorporación inmediata de propuestas metodológicas

Durante el proceso de elaboración de la documentación especializada se identificó la necesidad de fortalecer el cumplimiento del principio de trazabilidad documental establecido para el ecosistema SIGLUX.

Se observó que, durante la discusión técnica del proyecto, pueden surgir propuestas relacionadas con la metodología, la arquitectura, la gobernanza, los procedimientos de trabajo o cualquier otro aspecto susceptible de incorporarse posteriormente a la documentación especializada.

Con el propósito de preservar íntegramente el origen de dichas propuestas y evitar que su registro dependa de una acción posterior, se acordó que toda propuesta de esta naturaleza deberá presentarse inmediatamente en formato de registro para la Memoria Técnica, antes de continuar con el desarrollo de cualquier otro documento o actividad.

En consecuencia, cada vez que durante el desarrollo del proyecto se identifique un criterio, principio, política, procedimiento, metodología o cualquier otra aportación susceptible de convertirse en conocimiento institucional, ésta será presentada directamente como un nuevo registro de la Memoria Técnica, permitiendo su incorporación inmediata y manteniendo la continuidad del proceso de trazabilidad documental.

Estado: Validado.

Observaciones: Este procedimiento fortalece el papel de la Memoria Técnica como documento primario del ecosistema SIGLUX y evita que el conocimiento generado durante las sesiones de trabajo permanezca temporalmente fuera del sistema documental.

⸻

MT-0031 - Validación del bloque inicial de IAF-ARC-001 y refinamiento de la estructura de los principios arquitectónicos.

Durante la elaboración del documento IAF-ARC-001 – Arquitectura Física del Proyecto, se desarrolló y validó el primer bloque estructural del documento, integrado por los capítulos correspondientes al Control Documental, Naturaleza del Documento, Objeto, Alcance y Principios de la Arquitectura Física.

Durante la revisión técnica del Capítulo 5 se analizó la estructura utilizada para documentar cada uno de los principios arquitectónicos, observándose que, además del enunciado, su desarrollo y el fundamento documental correspondiente, resultaba conveniente incorporar un elemento que facilitara la interpretación práctica de cada principio dentro del proyecto.

Como resultado de dicho análisis se acordó que cada principio incorporado a los documentos especializados podrá incluir un apartado denominado "Implicaciones", cuya finalidad consistirá en describir las consecuencias prácticas derivadas de la aplicación del principio correspondiente.

Se determinó que este apartado no constituye una regla independiente ni introduce nuevas disposiciones normativas, sino que facilita la correcta interpretación del principio y orienta su aplicación dentro del proyecto.

Con esta incorporación se busca fortalecer la claridad de los documentos especializados, favoreciendo una interpretación uniforme de sus disposiciones sin alterar la naturaleza conceptual de los principios arquitectónicos.

Estado: Validado.

Observaciones: La incorporación del apartado "Implicaciones" representa un refinamiento de la metodología de redacción de los documentos especializados y mejora la transición entre los principios generales y las reglas específicas que posteriormente desarrollarán dichos documentos.

⸻

MT-0032 - Conclusión y validación del Capítulo 6 de IAF-ARC-001

Como parte de la elaboración del documento IAF-ARC-001 – Arquitectura Física del Proyecto, se desarrolló y validó el Capítulo 6, correspondiente a la arquitectura del directorio raíz del proyecto.

Durante su elaboración se definieron los criterios generales que regulan la organización estructural del nivel superior de la arquitectura física, estableciendo que el directorio raíz constituye el punto de organización principal del proyecto y que su evolución deberá responder a criterios de simplicidad, coherencia y crecimiento orgánico.

Asimismo, se establecieron los criterios para la incorporación de nuevos directorios de primer nivel, determinándose que su creación deberá responder a una necesidad previamente documentada y que, antes de incorporar nuevas categorías estructurales, deberá evaluarse la posibilidad de integrar los nuevos recursos dentro de la estructura existente.

Finalmente, se definieron las bases para la evolución controlada de la arquitectura física, procurando preservar la estabilidad estructural del proyecto y minimizar el impacto derivado de futuras reorganizaciones.

Estado: Validado.

Observaciones: La conclusión del Capítulo 6 establece las bases que permitirán definir la estructura física autorizada del proyecto sin depender de implementaciones particulares o circunstancias temporales.

⸻

MT-0033 - Distinción entre arquitectura autorizada y estructura física implementada

Durante la revisión del contenido correspondiente al Capítulo 6 de IAF-ARC-001, se analizó la conveniencia de incorporar de manera inmediata la relación de directorios existentes dentro del proyecto.

Como resultado del análisis se concluyó que un documento de arquitectura no debe limitarse a describir la estructura física existente en un momento determinado, sino establecer el marco estructural autorizado dentro del cual podrá evolucionar el proyecto.

En consecuencia, se acordó distinguir conceptualmente entre la arquitectura autorizada y la estructura física implementada.

La arquitectura autorizada define los directorios y categorías estructurales que podrán formar parte del proyecto cuando exista una necesidad documentada que justifique su incorporación.

Por su parte, la estructura física implementada representa únicamente aquellos elementos que han sido efectivamente materializados dentro del repositorio en un momento determinado.

Derivado de esta distinción se determinó que el siguiente capítulo de IAF-ARC-001 contendrá un Catálogo de Directorios Autorizados, el cual establecerá las categorías estructurales aprobadas por la arquitectura sin implicar que todas ellas deban existir físicamente desde el inicio del proyecto.

Se acordó igualmente que la materialización de dichos directorios continuará observando el principio metodológico conforme al cual la estructura sigue a la necesidad documentada.

Estado: Validado.

Observaciones: Esta determinación fortalece la separación entre la arquitectura normativa y la implementación física del proyecto, permitiendo que ambas evolucionen de manera consistente sin perder coherencia metodológica ni trazabilidad documental.

⸻

MT-0034
Auditoría del repositorio local y recuperación de documentación preexistente

Durante la revisión del entorno local de desarrollo se llevó a cabo una auditoría de la estructura física del proyecto IAF con el propósito de verificar la existencia de documentación elaborada con anterioridad al establecimiento del repositorio institucional.

Como resultado de dicha auditoría se confirmó la existencia de directorios, documentos y recursos previamente desarrollados, algunos de ellos con contenido y otros únicamente como estructura inicial o plantillas de trabajo.

Derivado de esta verificación se dejó sin efectos la hipótesis de inexistencia absoluta de documentación previa y se determinó que dichos elementos deberán ser objeto de revisión individual antes de decidir su incorporación, actualización, sustitución o eliminación.

Se acordó que ningún documento preexistente será descartado o incorporado automáticamente. Cada uno será sometido a un proceso de auditoría documental con el propósito de determinar su vigencia, compatibilidad con la metodología SIGLUX y utilidad para el desarrollo del proyecto.

Asimismo, se determinó que los directorios y archivos carentes de contenido o de una finalidad plenamente justificada podrán ser eliminados, procurando mantener una arquitectura física consistente con el principio de crecimiento orgánico previamente adoptado.

Estado: Validado.

Observaciones: La auditoría documental permitirá recuperar el conocimiento previamente generado, evitando duplicidades y preservando únicamente aquellos elementos compatibles con la arquitectura metodológica vigente del proyecto.

⸻

MT-0035
Criterio para el orden de ejecución de la Auditoría de Recuperación Documental

Como parte de la planificación de la Auditoría de Recuperación Documental se analizó el orden en que deberán revisarse los directorios y documentos recuperados del proyecto.

Inicialmente se consideró comenzar por aquellos documentos que contenían mayor desarrollo. Sin embargo, tras revisar la organización existente del repositorio, se determinó que resulta metodológicamente más adecuado iniciar la auditoría por el directorio 00_IAF-REP, por constituir el nivel inicial de la estructura documental del proyecto.

Se acordó que la auditoría seguirá el orden lógico de la arquitectura física, iniciando por los directorios de menor numeración y avanzando progresivamente hacia los niveles siguientes, procurando comprender primero la estructura general del proyecto antes de evaluar el contenido particular de cada documento.

Asimismo, se determinó que el documento ESTRUCTURA-PROYECTO será objeto de revisión prioritaria, por estimarse que puede contener información relevante para comprender la organización originalmente prevista para el proyecto y facilitar su comparación con la arquitectura actualmente en desarrollo.

Finalmente, se acordó que los archivos auxiliares o de referencia que no contengan información sustancial, tales como README.md, CHANGELOG.md, LICENSE o .gitignore, serán evaluados posteriormente para determinar si procede su actualización, sustitución o eliminación conforme a la metodología vigente del ecosistema SIGLUX.

Estado: Validado.

Observaciones: El orden de la auditoría privilegiará la comprensión progresiva de la arquitectura del proyecto sobre la revisión aislada de documentos individuales.

⸻

MT-0036
Auditoría simplificada de directorios con documentación sin contenido

Como parte de la Auditoría de Recuperación Documental del proyecto IAF, se revisaron los directorios que contienen documentos previamente creados pero sin contenido sustancial.

Durante la revisión se confirmó que dichos documentos corresponden a estructuras iniciales elaboradas antes de la adopción de la metodología documental del ecosistema SIGLUX y que, en su estado actual, no contienen información susceptible de ser auditada desde el punto de vista técnico o metodológico.

En consecuencia, se determinó que la auditoría de estos directorios se realizará mediante un procedimiento simplificado, consistente en verificar la finalidad de la categoría documental, confirmar la existencia de los documentos correspondientes y emitir un dictamen respecto de su permanencia dentro del proyecto.

Se acordó igualmente que los documentos vacíos no serán eliminados durante la auditoría, sino que conservarán su identificador documental y serán desarrollados únicamente cuando la evolución del proyecto justifique su elaboración, observando en todo momento el principio conforme al cual la estructura sigue a la necesidad documentada.

Estado: Validado.

Observaciones: La aplicación del procedimiento simplificado permitirá concentrar el esfuerzo de auditoría en aquellos documentos que contengan información sustancial, sin afectar la integridad de la arquitectura documental del proyecto.

⸻

