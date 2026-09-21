/**
 * ============================================================================
 * 🎨 RAMO DE FLORES SANRIO VECTORIAL INTERACTIVO PARA PINTAR
 * ============================================================================
 * Personajes: Cinnamoroll (arriba), Hello Kitty (centro), Pompompurin/Pochacco (izq),
 * Kuromi (der), My Melody (abajo centro), rodeados de tulipanes, margaritas,
 * papel de regalo y un gran lazo.
 * 
 * Cada elemento con clase "colorable" puede ser pintado individualmente al hacer clic.
 * ============================================================================
 */

const defaultBouquetColors = {
  // Envoltorio y lazos
  "wrap-bg-main": "#ffe5ec",
  "wrap-fold-left": "#ffc2d1",
  "wrap-fold-right": "#ffb3c6",
  "wrap-cone-left": "#ffb3c6",
  "wrap-cone-center": "#ffe5ec",
  "wrap-cone-right": "#ffc2d1",
  "wrap-cone-base": "#ff8fab",
  "main-bow-loop-l": "#ff4d6d",
  "main-bow-loop-r": "#ff4d6d",
  "main-bow-knot": "#c9184a",
  "main-bow-tail-l": "#ff758f",
  "main-bow-tail-r": "#ff758f",

  // Cinnamoroll (Arriba)
  "cinna-face": "#ffffff",
  "cinna-ear-l": "#ffffff",
  "cinna-ear-r": "#ffffff",
  "cinna-ear-in-l": "#ffccd5",
  "cinna-ear-in-r": "#ffccd5",
  "cinna-flower-c": "#ffd166",
  "cinna-flower-p1": "#ffffff",
  "cinna-flower-p2": "#ffffff",
  "cinna-flower-p3": "#ffffff",
  "cinna-flower-p4": "#ffffff",
  "cinna-flower-p5": "#ffffff",
  "cinna-blush-l": "#ffb3c6",
  "cinna-blush-r": "#ffb3c6",

  // Hello Kitty (Centro)
  "kitty-face": "#ffffff",
  "kitty-ear-l": "#ffffff",
  "kitty-ear-r": "#ffffff",
  "kitty-bow-l": "#ff4d6d",
  "kitty-bow-r": "#ff4d6d",
  "kitty-bow-knot": "#c9184a",
  "kitty-nose": "#ffd166",
  "kitty-blush-l": "#ffccd5",
  "kitty-blush-r": "#ffccd5",
  "kitty-body": "#ffe5ec",

  // Pompompurin / Amigo (Izquierda)
  "purin-face": "#fff1b0",
  "purin-ear-l": "#7f4f24",
  "purin-ear-r": "#7f4f24",
  "purin-cap": "#7f4f24",
  "purin-blush-l": "#ffb3c6",
  "purin-blush-r": "#ffb3c6",
  "purin-paw-l": "#fff1b0",
  "purin-paw-r": "#fff1b0",

  // Kuromi (Derecha)
  "kuromi-hood": "#3d3442",
  "kuromi-ear-l": "#3d3442",
  "kuromi-ear-r": "#3d3442",
  "kuromi-ball-l": "#ff758f",
  "kuromi-ball-r": "#ff758f",
  "kuromi-face": "#ffffff",
  "kuromi-skull": "#ff85a1",
  "kuromi-collar-1": "#3d3442",
  "kuromi-collar-2": "#3d3442",
  "kuromi-collar-3": "#3d3442",
  "kuromi-blush-l": "#ffb3c6",
  "kuromi-blush-r": "#ffb3c6",

  // My Melody (Abajo Centro)
  "melody-hood": "#ff758f",
  "melody-ear-l": "#ff758f",
  "melody-ear-r": "#ff758f",
  "melody-ear-in-l": "#ffe5ec",
  "melody-ear-in-r": "#ffe5ec",
  "melody-face": "#ffffff",
  "melody-nose": "#ffd166",
  "melody-bow-l": "#ffffff",
  "melody-bow-r": "#ffffff",
  "melody-bow-knot": "#ffd166",
  "melody-blush-l": "#ffb3c6",
  "melody-blush-r": "#ffb3c6",
  "melody-collar": "#ffffff",

  // Flores: Tulipanes y Margaritas
  "tulip-l-left": "#ff8fab",
  "tulip-l-center": "#ff4d6d",
  "tulip-l-right": "#ff8fab",
  "tulip-l-stem": "#95d5b2",
  "tulip-l-leaf": "#74c69d",

  "tulip-r-left": "#c8b6ff",
  "tulip-r-center": "#9d4edd",
  "tulip-r-right": "#c8b6ff",
  "tulip-r-stem": "#95d5b2",
  "tulip-r-leaf": "#74c69d",

  "daisy-1-c": "#ffd166",
  "daisy-1-p1": "#ffffff", "daisy-1-p2": "#ffffff", "daisy-1-p3": "#ffffff", "daisy-1-p4": "#ffffff", "daisy-1-p5": "#ffffff",
  "daisy-2-c": "#ffd166",
  "daisy-2-p1": "#ffffff", "daisy-2-p2": "#ffffff", "daisy-2-p3": "#ffffff", "daisy-2-p4": "#ffffff", "daisy-2-p5": "#ffffff",

  "leaf-1": "#74c69d",
  "leaf-2": "#74c69d",
  "leaf-3": "#95d5b2",
  "leaf-4": "#95d5b2",

  // Jarrón / base del ramo
  "vase-cup": "#fdf0d5",
  "vase-stem": "#d4a373",
  "vase-base": "#d4a373"
};

const bouquetSvgContent = `
<svg id="sanrio-bouquet-svg" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" class="bouquet-svg">
  <defs>
    <filter id="soft-shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#ffb7c5" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- ================= BACKGROUND PAPER WRAPPING (COLLAR DETRÁS DE LOS PERSONAJES) ================= -->
  <g id="wrapping-background">
    <!-- Papel envoltorio fondo amplio: forma de collar redondeado que enmarca a todos los personajes -->
    <path id="wrap-bg-main" class="colorable" d="M 70,240 Q 300,50 530,240 Q 560,340 480,560 Q 300,610 120,560 Q 40,340 70,240 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>

    <!-- Pliegue izquierdo del papel envoltorio -->
    <path id="wrap-fold-left" class="colorable" d="M 70,240 L 25,330 Q 70,410 120,560 L 70,240 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>

    <!-- Pliegue derecho del papel envoltorio -->
    <path id="wrap-fold-right" class="colorable" d="M 530,240 L 575,330 Q 530,410 480,560 L 530,240 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <!-- ================= FOLIAGE & FLOWERS (ASOMANDO ENTRE LOS PERSONAJES) ================= -->
  <g id="flowers-background">
    <!-- Hojas decorativas -->
    <g id="leaf-1-group" transform="translate(-25,-10)">
      <path id="leaf-1" class="colorable" d="M 80,260 Q 60,210 110,200 Q 120,240 80,260 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    </g>
    <g id="leaf-2-group" transform="translate(25,-10)">
      <path id="leaf-2" class="colorable" d="M 520,260 Q 540,210 490,200 Q 480,240 520,260 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    </g>
    <g id="leaf-3-group" transform="translate(0,-25)">
      <path id="leaf-3" class="colorable" d="M 160,160 Q 180,110 220,130 Q 200,170 160,160 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    </g>
    <g id="leaf-4-group" transform="translate(0,-25)">
      <path id="leaf-4" class="colorable" d="M 440,160 Q 420,110 380,130 Q 400,170 440,160 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    </g>

    <!-- Tulipán Izquierdo: en el hueco entre Cinnamoroll y Pompompurin -->
    <g id="tulip-l-group" transform="translate(78,50)">
      <path id="tulip-l-stem" class="colorable" d="M 125,270 Q 120,330 140,360 L 132,362 Q 112,330 117,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="tulip-l-leaf" class="colorable" d="M 120,330 Q 90,300 95,270 Q 115,290 125,320 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <g id="tulip-l-flower">
        <path id="tulip-l-left" class="colorable" d="M 105,270 C 85,250 85,220 105,200 C 115,225 115,250 105,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
        <path id="tulip-l-right" class="colorable" d="M 135,270 C 155,250 155,220 135,200 C 125,225 125,250 135,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
        <path id="tulip-l-center" class="colorable" d="M 105,270 Q 120,280 135,270 C 145,240 135,190 120,185 C 105,190 95,240 105,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
      </g>
    </g>

    <!-- Tulipán Derecho: en el hueco entre Cinnamoroll y Kuromi -->
    <g id="tulip-r-group" transform="translate(-78,50)">
      <path id="tulip-r-stem" class="colorable" d="M 475,270 Q 480,330 460,360 L 468,362 Q 488,330 483,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="tulip-r-leaf" class="colorable" d="M 480,330 Q 510,300 505,270 Q 485,290 475,320 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <g id="tulip-r-flower">
        <path id="tulip-r-left" class="colorable" d="M 465,270 C 445,250 445,220 465,200 C 475,225 475,250 465,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
        <path id="tulip-r-right" class="colorable" d="M 495,270 C 515,250 515,220 495,200 C 485,225 485,250 495,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
        <path id="tulip-r-center" class="colorable" d="M 465,270 Q 480,280 495,270 C 505,240 495,190 480,185 C 465,190 455,240 465,270 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
      </g>
    </g>

    <!-- Margarita izquierda: asomando entre Pompompurin y My Melody -->
    <g id="daisy-1" transform="translate(-10,135)">
      <path id="daisy-1-p1" class="colorable" d="M 125,370 C 115,355 125,340 135,350 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-1-p2" class="colorable" d="M 145,350 C 155,340 165,355 155,370 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-1-p3" class="colorable" d="M 155,375 C 170,380 165,395 150,395 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-1-p4" class="colorable" d="M 145,400 C 135,415 125,405 130,390 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-1-p5" class="colorable" d="M 125,385 C 110,385 110,370 125,375 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <circle id="daisy-1-c" class="colorable" cx="140" cy="380" r="10" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
    </g>

    <!-- Margarita derecha: asomando entre Kuromi y My Melody -->
    <g id="daisy-2" transform="translate(10,135)">
      <path id="daisy-2-p1" class="colorable" d="M 465,370 C 455,355 465,340 475,350 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-2-p2" class="colorable" d="M 485,350 C 495,340 505,355 495,370 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-2-p3" class="colorable" d="M 495,375 C 510,380 505,395 490,395 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-2-p4" class="colorable" d="M 485,400 C 475,415 465,405 470,390 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="daisy-2-p5" class="colorable" d="M 465,385 C 450,385 450,370 465,375 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <circle id="daisy-2-c" class="colorable" cx="480" cy="380" r="10" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
    </g>
  </g>

  <!-- ================= PERSONAJE: CINNAMOROLL (ARRIBA) ================= -->
  <g id="char-cinnamoroll" transform="translate(0,-10)">
    <!-- Oreja izquierda Cinnamoroll -->
    <path id="cinna-ear-l" class="colorable" d="M 230,195 C 190,190 140,200 135,230 C 130,260 170,270 210,240 C 225,230 230,210 230,195 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <path id="cinna-ear-in-l" class="colorable" d="M 190,215 C 160,215 150,235 155,245 C 170,255 195,240 200,225 Z" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>

    <!-- Oreja derecha Cinnamoroll -->
    <path id="cinna-ear-r" class="colorable" d="M 370,195 C 410,190 460,200 465,230 C 470,260 430,270 390,240 C 375,230 370,210 370,195 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <path id="cinna-ear-in-r" class="colorable" d="M 410,215 C 440,215 450,235 445,245 C 430,255 405,240 400,225 Z" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>

    <!-- Cabeza / Cara Cinnamoroll -->
    <path id="cinna-face" class="colorable" d="M 230,205 C 230,165 260,145 300,145 C 340,145 370,165 370,205 C 370,245 340,260 300,260 C 260,260 230,245 230,205 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3"/>

    <!-- Floresita en la cabeza -->
    <g id="cinna-flower">
      <path id="cinna-flower-p1" class="colorable" d="M 285,145 C 280,135 290,130 295,140 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="cinna-flower-p2" class="colorable" d="M 305,145 C 310,135 320,140 315,148 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="cinna-flower-p3" class="colorable" d="M 315,155 C 325,160 315,170 305,165 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="cinna-flower-p4" class="colorable" d="M 290,165 C 285,175 275,165 280,158 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <path id="cinna-flower-p5" class="colorable" d="M 275,150 C 270,140 280,135 285,145 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
      <circle id="cinna-flower-c" class="colorable" cx="298" cy="152" r="6" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
    </g>

    <!-- Rostro Cinnamoroll (detalles) -->
    <ellipse id="cinna-blush-l" class="colorable" cx="260" cy="225" rx="8" ry="5" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>
    <ellipse id="cinna-blush-r" class="colorable" cx="340" cy="225" rx="8" ry="5" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>
    <!-- Ojo izq (abierto) -->
    <ellipse cx="270" cy="210" rx="3.5" ry="5" fill="#3d3442"/>
    <!-- Ojo der (guiño sonriente ^) -->
    <path d="M 324,213 Q 330,207 336,213" fill="none" stroke="#3d3442" stroke-width="3" stroke-linecap="round"/>
    <!-- Sonrisa :3 -->
    <path d="M 293,222 Q 300,227 307,222" fill="none" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- ================= PERSONAJE: POMPOMPURIN / POCHACCO (IZQUIERDA) ================= -->
  <g id="char-purin" transform="translate(-45,15)">
    <!-- Oreja izq caída -->
    <path id="purin-ear-l" class="colorable" d="M 125,340 C 95,330 85,380 90,410 C 95,430 115,420 120,380 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <!-- Oreja der -->
    <path id="purin-ear-r" class="colorable" d="M 185,330 C 195,310 215,315 210,345 C 205,370 190,370 185,350 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5" stroke-linejoin="round"/>
    
    <!-- Boina / Gorrito -->
    <path id="purin-cap" class="colorable" d="M 140,325 Q 160,315 175,325 C 180,332 170,336 155,335 C 145,335 138,330 140,325 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    <line x1="158" y1="318" x2="158" y2="325" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Cara Pompompurin -->
    <path id="purin-face" class="colorable" d="M 115,360 C 115,325 145,320 170,335 C 195,350 205,385 195,415 C 185,445 145,455 125,430 C 115,415 115,385 115,360 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3"/>

    <!-- Mejillas y ojos -->
    <circle id="purin-blush-l" class="colorable" cx="130" cy="395" r="7" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>
    <circle id="purin-blush-r" class="colorable" cx="180" cy="395" r="7" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>
    <ellipse cx="145" cy="380" rx="3" ry="4" fill="#3d3442"/>
    <!-- Ojo der guiño -->
    <path d="M 166,380 Q 172,374 178,380" fill="none" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Nariz y boca w -->
    <ellipse cx="158" cy="386" rx="3" ry="2" fill="#3d3442"/>
    <path d="M 152,392 Q 158,397 164,392" fill="none" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>

    <!-- Patitas sosteniendo -->
    <path id="purin-paw-l" class="colorable" d="M 125,435 C 120,450 145,460 150,440 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    <path id="purin-paw-r" class="colorable" d="M 175,440 C 185,455 205,445 195,430 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
  </g>

  <!-- ================= PERSONAJE: KUROMI (DERECHA) ================= -->
  <g id="char-kuromi" transform="translate(45,15)">
    <!-- Orejas de arlequín Kuromi -->
    <path id="kuromi-ear-l" class="colorable" d="M 405,335 C 390,300 395,270 420,285 C 435,295 425,325 415,345 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3"/>
    <circle id="kuromi-ball-l" class="colorable" cx="422" cy="285" r="7" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>

    <path id="kuromi-ear-r" class="colorable" d="M 475,345 C 485,310 515,290 525,310 C 530,335 495,355 480,360 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3"/>
    <circle id="kuromi-ball-r" class="colorable" cx="525" cy="308" r="7" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>

    <!-- Capucha Kuromi -->
    <path id="kuromi-hood" class="colorable" d="M 400,355 C 400,320 435,310 460,320 C 490,330 500,365 490,405 C 480,435 440,450 415,425 C 395,405 400,375 400,355 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3"/>

    <!-- Cara blanca de Kuromi -->
    <path id="kuromi-face" class="colorable" d="M 412,365 C 412,345 435,340 455,345 C 475,350 480,375 475,400 C 470,420 440,430 425,415 C 410,400 412,380 412,365 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>

    <!-- Calavera rosa en la frente -->
    <g id="kuromi-skull-group">
      <ellipse id="kuromi-skull" class="colorable" cx="448" cy="335" rx="9" ry="8" fill="#ffffff" stroke="#3d3442" stroke-width="1.5"/>
      <circle cx="445" cy="334" r="1.5" fill="#3d3442"/>
      <circle cx="451" cy="334" r="1.5" fill="#3d3442"/>
    </g>

    <!-- Ojos rasgados de Kuromi y pestañas -->
    <path d="M 425,372 Q 432,365 437,375 Q 430,380 425,372 Z" fill="#3d3442"/>
    <line x1="424" y1="368" x2="421" y2="364" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>
    <path d="M 460,375 Q 465,365 472,372 Q 467,380 460,375 Z" fill="#3d3442"/>
    <line x1="472" y1="368" x2="476" y2="364" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>

    <!-- Naricita y sonrisa traviesa -->
    <ellipse cx="448" cy="385" rx="2" ry="1.5" fill="#3d3442"/>
    <path d="M 444,392 Q 448,396 454,391" fill="none" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>

    <!-- Cuello de arlequín / collar -->
    <path id="kuromi-collar-1" class="colorable" d="M 415,425 L 425,445 L 435,425 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
    <path id="kuromi-collar-2" class="colorable" d="M 435,425 L 445,448 L 455,425 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
    <path id="kuromi-collar-3" class="colorable" d="M 455,425 L 465,445 L 475,425 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>
  </g>

  <!-- ================= PERSONAJE: HELLO KITTY (CENTRO) ================= -->
  <g id="char-kitty" transform="translate(0,20)">
    <!-- Oreja izq Kitty -->
    <path id="kitty-ear-l" class="colorable" d="M 240,290 C 230,260 250,240 270,260 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <!-- Oreja der Kitty -->
    <path id="kitty-ear-r" class="colorable" d="M 330,260 C 350,240 370,260 360,290 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>

    <!-- Cabeza / Cara Kitty -->
    <ellipse id="kitty-face" class="colorable" cx="300" cy="320" rx="65" ry="52" fill="#ffffff" stroke="#3d3442" stroke-width="3.5"/>

    <!-- Lazo icónico de Kitty (oreja izquierda) -->
    <g id="kitty-bow">
      <path id="kitty-bow-l" class="colorable" d="M 265,265 C 245,245 235,270 255,280 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5" stroke-linejoin="round"/>
      <path id="kitty-bow-r" class="colorable" d="M 275,265 C 295,245 305,270 285,280 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5" stroke-linejoin="round"/>
      <circle id="kitty-bow-knot" class="colorable" cx="270" cy="272" r="8" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    </g>

    <!-- Ojos Kitty -->
    <ellipse cx="265" cy="325" rx="4" ry="6" fill="#3d3442"/>
    <ellipse cx="335" cy="325" rx="4" ry="6" fill="#3d3442"/>

    <!-- Nariz amarilla -->
    <ellipse id="kitty-nose" class="colorable" cx="300" cy="335" rx="5" ry="3.5" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>

    <!-- Bigotes Kitty (izq y der) -->
    <line x1="230" y1="318" x2="210" y2="312" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="228" y1="326" x2="206" y2="326" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="230" y1="334" x2="210" y2="340" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>

    <line x1="370" y1="318" x2="390" y2="312" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="372" y1="326" x2="394" y2="326" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="370" y1="334" x2="390" y2="340" stroke="#3d3442" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Cuellito / Patitas Kitty -->
    <path id="kitty-body" class="colorable" d="M 270,368 Q 300,380 330,368 Q 315,395 285,395 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
  </g>

  <!-- ================= PERSONAJE: MY MELODY (ABAJO CENTRO) ================= -->
  <g id="char-melody" transform="translate(0,50)">
    <!-- Oreja izquierda caída -->
    <path id="melody-ear-l" class="colorable" d="M 255,420 C 220,380 180,390 190,440 C 200,475 235,470 255,445 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <path id="melody-ear-in-l" class="colorable" d="M 230,420 C 205,405 195,430 205,445 C 220,460 235,445 230,420 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>

    <!-- Oreja derecha erguida -->
    <path id="melody-ear-r" class="colorable" d="M 345,420 C 375,370 410,385 400,435 C 390,470 365,470 345,445 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <path id="melody-ear-in-r" class="colorable" d="M 370,420 C 390,400 395,425 385,440 C 375,455 365,440 370,420 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>

    <!-- Capucha rosada My Melody -->
    <path id="melody-hood" class="colorable" d="M 240,450 C 235,400 365,400 360,450 C 370,510 350,550 300,550 C 250,550 230,510 240,450 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3.5"/>

    <!-- Cara ovalada blanca -->
    <ellipse id="melody-face" class="colorable" cx="300" cy="485" rx="42" ry="34" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>

    <!-- Lazo grande característico en su oreja/cabeza -->
    <g id="melody-bow">
      <path id="melody-bow-l" class="colorable" d="M 275,430 C 250,410 245,445 268,450 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5" stroke-linejoin="round"/>
      <path id="melody-bow-r" class="colorable" d="M 325,430 C 350,410 355,445 332,450 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse id="melody-bow-knot" class="colorable" cx="300" cy="438" rx="10" ry="8" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    </g>

    <!-- Ojos tiernos My Melody -->
    <ellipse cx="282" cy="482" rx="3.5" ry="5.5" fill="#3d3442"/>
    <ellipse cx="318" cy="482" rx="3.5" ry="5.5" fill="#3d3442"/>

    <!-- Nariz amarilla My Melody -->
    <ellipse id="melody-nose" class="colorable" cx="300" cy="492" rx="4" ry="3" fill="#ffffff" stroke="#3d3442" stroke-width="2"/>

    <!-- Sonrisita dulce -->
    <path d="M 295,502 Q 300,506 305,502" fill="none" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>

    <!-- Cuellito / Babero -->
    <path id="melody-collar" class="colorable" d="M 275,540 Q 300,555 325,540 Q 315,565 285,565 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
  </g>

  <!-- ================= LOWER CONE WRAPPER (FALDA DEL RAMO) ================= -->
  <g id="wrapping-cone">
    <!-- Papel cono inferior izquierdo -->
    <path id="wrap-cone-left" class="colorable" d="M 240,660 L 280,660 Q 255,745 230,830 L 70,830 Q 130,745 240,660 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>

    <!-- Papel cono centro -->
    <path id="wrap-cone-center" class="colorable" d="M 280,660 L 320,660 Q 345,745 370,830 L 230,830 Q 255,745 280,660 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>

    <!-- Papel cono derecho -->
    <path id="wrap-cone-right" class="colorable" d="M 320,660 L 360,660 Q 470,745 530,830 L 370,830 Q 345,745 320,660 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>

    <!-- Ribete festoneado inferior del envoltorio -->
    <path id="wrap-cone-base" class="colorable" d="M 70,830 Q 300,868 530,830 L 505,852 Q 300,884 95,852 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <!-- ================= GRAN LAZO DE CINTA DEL RAMO ================= -->
  <g id="main-ribbon-bow" filter="url(#soft-shadow)" transform="translate(0,30)">
    <!-- Cola izquierda del lazo -->
    <path id="main-bow-tail-l" class="colorable" d="M 280,600 C 250,630 210,670 190,720 C 220,710 240,680 285,630 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3.5" stroke-linejoin="round"/>

    <!-- Cola derecha del lazo -->
    <path id="main-bow-tail-r" class="colorable" d="M 320,600 C 350,630 390,670 410,720 C 380,710 360,680 315,630 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3.5" stroke-linejoin="round"/>

    <!-- Bucle izquierdo del lazo -->
    <path id="main-bow-loop-l" class="colorable" d="M 285,585 C 220,535 180,580 200,625 C 220,660 270,630 285,595 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3.5" stroke-linejoin="round"/>
    <!-- Pliegue interno bucle izq -->
    <path d="M 225,585 Q 240,610 270,605" fill="none" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>

    <!-- Bucle derecho del lazo -->
    <path id="main-bow-loop-r" class="colorable" d="M 315,585 C 380,535 420,580 400,625 C 380,660 330,630 315,595 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3.5" stroke-linejoin="round"/>
    <!-- Pliegue interno bucle der -->
    <path d="M 375,585 Q 360,610 330,605" fill="none" stroke="#3d3442" stroke-width="2" stroke-linecap="round"/>

    <!-- Nudo central del lazo -->
    <ellipse id="main-bow-knot" class="colorable" cx="300" cy="590" rx="22" ry="18" fill="#ffffff" stroke="#3d3442" stroke-width="3.5"/>
  </g>

  <!-- ================= JARRÓN / BASE DEL RAMO ================= -->
  <g id="bouquet-vase">
    <path id="vase-cup" class="colorable" d="M 230,845 L 370,845 L 345,880 L 255,880 Z" fill="#ffffff" stroke="#3d3442" stroke-width="3" stroke-linejoin="round"/>
    <path id="vase-stem" class="colorable" d="M 291,880 L 309,880 L 306,892 L 294,892 Z" fill="#ffffff" stroke="#3d3442" stroke-width="2.5"/>
    <ellipse id="vase-base" class="colorable" cx="300" cy="892" rx="50" ry="8" fill="#ffffff" stroke="#3d3442" stroke-width="3"/>
  </g>
</svg>
`;

if (typeof window !== "undefined") {
  window.bouquetSvgContent = bouquetSvgContent;
  window.defaultBouquetColors = defaultBouquetColors;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { bouquetSvgContent, defaultBouquetColors };
}
