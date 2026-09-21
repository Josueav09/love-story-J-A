# 🎀 Proyecto Web de Amor Coquette para Anita 💕
### *¿Casualidad, Suerte o Destino? (2021 — 2026)*

Página web romántica e interactiva diseñada con la estética **Coquette / Romantic Vintage** inspirada en marcos arqueados (*arched frames*), estampado vichy (*gingham*), ondas de satén rosa y separadores de lazo en magenta profundo (`#800f2f`), creada especialmente para **Anita** por **Josue (Abrham)**.

Está desarrollada exclusivamente con **HTML5, CSS3 y JavaScript nativo** (cero dependencias de backend), con **iconos vectoriales SVG limpios (sin emojis)** y optimizada para desplegarse gratis en **GitHub Pages**.

---

## 🌟 Funcionalidades y Capítulos Incluidos

### 1. Crónica Completa de Nuestro Amor (24 Hitos: 2021 a 2026)
Incorpora todas las cartas, escritos y memorias reales de los documentos:
- **2021**: Los inicios en secundaria y el círculo de estudios.
- **2024 (¿Casualidad, suerte o destino?)**:
  - Reencuentro en la panadería (22/06).
  - Coincidencia en el mercado (28/07).
  - Aniversario del colegio (19/09).
  - Examen de admisión UTP (22/09).
  - Primera cita oficial: doble exposición, póker de cinco y Cascanueces mencionado (03/10).
  - Charla a tres minutos de distancia en el parque (12/10).
  - Parque Kennedy & atardecer rosado en la playa (10/11).
  - Fiesta de cumpleaños & el primer beso bajo las estrellas (07-08/12).
  - La escalera a medianoche en su cumpleaños (10/12).
  - Parque Wiracocha: confesión sincera bajo el árbol (15/12).
  - Cascanueces en el Teatro Municipal (22/12).
  - Carta de fin de año 2024.
- **2025 (Nuestro Primer Año como Enamorados)**:
  - Oficialmente novios en el parque (22/01/2025).
  - Primer mes: Spider-Man, el lore de series y Rayuela de Cortázar.
  - Día de la Mujer 2025: *Lucky Vicky, cariño*.
  - Segundo mes & nuestro primer verano: la playa el 22/02, función exponencial y *A dónde vamos* de Morat.
  - Tercer mes: madurar juntos, Lima Centro y *Those Eyes*.
  - Seis meses: *El amor es elegirse todos los días* y no tener que estar al 100 para ser amados.
  - Nueve meses: *Simplemente pasan*, comer nubes y soñar con nuestra familia.
- **2026 (Primer Aniversario & Presente)**:
  - Primer aniversario: 365 días amándote (*"lo difícil para mí es no amarte"*).
  - Spider-Man & Gwen: almas gemelas, inicio de prácticas y orgullo mutuo.
  - Día de la Mujer 2026: *La Promesa* de Melendi y admiración por tu trabajo.
  - Nuestra ruta infinita: continuará...

### 2. Estética Coquette Visual
- Paneles continuos horizontales con fondo de cuadros vichy (gingham) y ondas satinadas.
- Retratos arqueados (*arched frames*) de alta fidelidad.
- Separadores de gran lazo de cinta magenta (`#800f2f`).
- Cero emojis unicode: reemplazados en su totalidad por iconos SVG delicados (lazos, rosas, corazones, estrellas, flechas).

### 3. Juegos & Experiencias Interactivas
- **Pinta Nuestro Ramo de Sanrio**: Cinnamoroll, Hello Kitty, Pompompurin, Kuromi y My Melody en un ramo envuelto en papel con lazo y jarrón, lienzo SVG interactivo con click-to-color, deshacer, coloreado mágico oficial y descarga en PNG.
- **Pupiletras (Sopa de Letras)**: 12 palabras secretas generadas dinámicamente en una cuadrícula 14x13 (nunca se repite la misma disposición), con selección táctil/ratón, resaltado pastel, pistas certeras y modal de felicitación.
- **Frasquito de Notas de Amor**: Extracción interactiva de pensamientos y cartas secretas.
- **Reproductor de Melodía Romántica**: Sintetizador con *Web Audio API* (funciona 100% offline).
- **Contador en Vivo**: Tiempo juntos desde el 22 de junio de 2024.
- **Menú móvil**: la barra de navegación se convierte en un menú hamburguesa desplegable en pantallas pequeñas.

### 4. Candado de Lanzamiento (se abre el 22/09 a las 00:00, hora de Perú)
La página completa permanece oculta detrás de una pantalla de cuenta regresiva hasta el instante exacto de nuestros veinte meses juntos (`2026-09-22T00:00:00-05:00`). Se controla desde `index.html` (constante `LAUNCH_TARGET` en el script del `<head>`) y `app.js` (`initLaunchLock`).

**Cómo ver el avance mientras editas (dos formas):**

1. **En tu propia computadora (localhost)**: el candado se salta automáticamente cuando abres la página desde `localhost`, `127.0.0.1` o directamente como archivo (`file://...`). Solo corre un servidor local en la carpeta del proyecto, por ejemplo:
   ```bash
   python -m http.server 8123
   ```
   y abre `http://localhost:8123/index.html` — verás el sitio completo, con un pequeño aviso oscuro abajo ("Vista previa...") recordándote que ese salto solo pasa ahí, no para Anita. No hace falta ningún parámetro extra.
2. **En el enlace real ya publicado (GitHub Pages)**: agrega `?preview=1` al final, por ejemplo `https://tu-usuario.github.io/tu-repo/?preview=1`. Eso omite el candado solo en esa carga de la página (no queda guardado en el navegador) y muestra el mismo aviso de vista previa.

Para confirmar que el candado sí funciona de verdad, abre el enlace normal — sin `localhost` y sin `?preview=1` — antes del 22/09: debe verse la pantalla de cuenta regresiva y no el resto del sitio. El enlace real que le compartas a Anita **no debe llevar `?preview=1`**.

Si alguna vez cambias la fecha de apertura, edítala en la constante `LAUNCH_TARGET` dentro del `<script>` del `<head>` de `index.html` (es la que realmente bloquea la carga).

---

## 🚀 Despliegue en GitHub Pages (3 Pasos Sencillos)

1. **Crear repositorio**: En [github.com](https://github.com), crea un nuevo repositorio público (ej. `anita` o `para-anita`).
2. **Subir archivos**: Sube todos los archivos y la carpeta `assets/` directamente:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `storyData.js`
   - `bouquetSvg.js`
   - `README.md`
   - `assets/` (`hero_portrait.jpg`, `cherry_swing.jpg`, `juntos.png`)
3. **Activar Pages**: En **Settings** > **Pages**, selecciona la rama `main` y la carpeta `/ (root)`. En 1 minuto tendrás tu enlace listo:
   `https://<tu-usuario>.github.io/<tu-repo>/`
