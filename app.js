/**
 * ============================================================================
 * 🎀 APLICACIÓN WEB COQUETTE - JOSUE & ANITA 💕
 * ============================================================================
 * Lógica principal:
 * 1. Reproductor de Melodía Romántica (Web Audio API Synthesizer)
 * 2. Contador de Tiempo Juntos
 * 3. Nuestra Ruta de Amor (Roadmap Interactivo 2021 - 2026)
 * 4. Pinta Nuestro Ramo de Sanrio (Coloring Book, Deshacer, Auto-Color, Exportar)
 * 5. Pupiletras / Sopa de Letras Coquette (15 palabras, drag & touch)
 * 6. Frasquito de Notas de Amor Secretas
 * 7. Animaciones delicadas y partículas sin emojis (solo SVGs vectoriales)
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initMusicPlayer();
  initLoveCounter();
  initRoadmap();
  initBouquetColoring();
  initWordSearch();
  initLoveJar();
  initCoquetteParticles();
});

/* ============================================================================
 * 🎀 DICCIONARIO DE ICONOS SVG VECTORIALES (CERO EMOJIS)
 * ============================================================================
 */
function getSvgIcon(type) {
  const icons = {
    bow: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 12c-2-2.5-5.5-3.5-8-2-3 1.8-3 6.5 0 8 3 1.5 6.5-1.5 8-4.5 1.5 3 5 6 8 4.5 3-1.5 3-6.2 0-8-2.5-1.5-6-.5-8 2zm0 0c-.8 1.5-2.5 6-4 9-.5 1-1.5 1-2 0s.5-3.5 1.5-6l4.5-3zm0 0c.8 1.5 2.5 6 4 9 .5 1 1.5 1 2 0s-.5-3.5-1.5-6l-4.5-3zm0-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>`,
    heart: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    rose: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2c2 1 3 3 2 5-1 2-3 3-4 3 0 2 1 3 2 4l-1 2c-1-1-2-3-2-5 0-3 2-6 3-9zm-1 12c-2-1-3-3-2-5 1-2 3-3 4-3 0-2-1-3-2-4l1-2c1 1 2 3 2 5 0 3-2 6-3 9zm1 2c-1 3-3 5-6 6l-1-2c3-1 4-2 5-4h2zm2 0c1 3 3 5 6 6l1-2c-3-1-4-2-5-4h-2zm-1 0v6h-2v-6h2z"/></svg>`,
    sparkle: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>`,
    ring: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><circle cx="12" cy="14" r="7"></circle><polygon points="12,3 15,7 9,7"></polygon></svg>`,
    book: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    letter: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    star: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    sun: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    sunset: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>`,
    path: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>`,
    tree: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M12 2L4 14h5v6h6v-6h5z"></path></svg>`,
    cards: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><rect x="3" y="5" width="12" height="16" rx="2"></rect><path d="M7 3h12a2 2 0 0 1 2 2v14"></path></svg>`,
    theater: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M2 3h20v4H2z"></path><path d="M4 7v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7"></path><path d="M9 11v6"></path><path d="M15 11v6"></path></svg>`,
    school: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"></path></svg>`,
    bread: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    ballet: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    chat: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    location: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    arrow: `<svg class="svg-icon stroke-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
  };

  return icons[type] || icons.heart;
}

/* ============================================================================
 * 🎵 1. REPRODUCTOR DE MELODÍA ROMÁNTICA
 * ============================================================================
 */
let audioCtx = null;
let isPlayingMusic = false;
let musicInterval = null;

function initMusicPlayer() {
  const playBtn = document.getElementById("music-toggle-btn");
  const musicStatus = document.getElementById("music-status");
  const musicBtnText = document.getElementById("music-btn-text");

  if (!playBtn) return;

  playBtn.addEventListener("click", () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (isPlayingMusic) {
      stopRomanticMelody();
      isPlayingMusic = false;
      playBtn.classList.remove("playing");
      if (musicBtnText) musicBtnText.textContent = "Escuchar melodía";
      if (musicStatus) musicStatus.textContent = "Música en pausa";
    } else {
      startRomanticMelody();
      isPlayingMusic = true;
      playBtn.classList.add("playing");
      if (musicBtnText) musicBtnText.textContent = "Pausar melodía";
      if (musicStatus) musicStatus.textContent = "Sonando: Melodía de Amor";
    }
  });
}

function startRomanticMelody() {
  if (!audioCtx) return;

  // Secuencia de arpegios estilo cajita de música (Cmaj7 - Am7 - Fmaj7 - G)
  const notes = [
    { f: 523.25, d: 0.6 }, // C5
    { f: 659.25, d: 0.6 }, // E5
    { f: 783.99, d: 0.8 }, // G5
    { f: 987.77, d: 1.0 }, // B5
    { f: 783.99, d: 0.6 },

    { f: 440.00, d: 0.6 }, // A4
    { f: 523.25, d: 0.6 }, // C5
    { f: 659.25, d: 0.8 }, // E5
    { f: 783.99, d: 1.0 }, // G5
    { f: 659.25, d: 0.6 },

    { f: 349.23, d: 0.6 }, // F4
    { f: 440.00, d: 0.6 }, // A4
    { f: 523.25, d: 0.8 }, // C5
    { f: 659.25, d: 1.0 }, // E5
    { f: 523.25, d: 0.6 },

    { f: 392.00, d: 0.6 }, // G4
    { f: 493.88, d: 0.6 }, // B4
    { f: 587.33, d: 0.8 }, // D5
    { f: 783.99, d: 1.2 }  // G5
  ];

  let noteIdx = 0;
  function playNextNote() {
    if (!isPlayingMusic || !audioCtx) return;
    const cur = notes[noteIdx];
    playMusicBoxNote(cur.f, cur.d);
    noteIdx = (noteIdx + 1) % notes.length;
    musicInterval = setTimeout(playNextNote, cur.d * 1000 * 0.95);
  }

  playNextNote();
}

function stopRomanticMelody() {
  if (musicInterval) {
    clearTimeout(musicInterval);
    musicInterval = null;
  }
}

function playMusicBoxNote(freq, duration) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);

  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(freq * 2, now);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain);
  osc2.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc2.start(now);
  osc.stop(now + duration);
  osc2.stop(now + duration);
}

function playSparkleSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const sCtx = new AudioContext();
    const now = sCtx.currentTime;

    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = sCtx.createOscillator();
      const gain = sCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.28);
      osc.connect(gain);
      gain.connect(sCtx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.28);
    });
  } catch (e) {}
}

/* ============================================================================
 * ⏳ 2. CONTADOR DE AMOR COQUETTE
 * ============================================================================
 */
function initLoveCounter() {
  const startDate = new Date(2024, 5, 22, 10, 0, 0); // 22 de junio 2024

  const daysEl = document.getElementById("counter-days");
  const hoursEl = document.getElementById("counter-hours");
  const minutesEl = document.getElementById("counter-minutes");
  const secondsEl = document.getElementById("counter-seconds");

  function update() {
    const now = new Date();
    const diff = now - startDate;
    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================================
 * 🗺️ 3. NUESTRA RUTA DE AMOR (ROADMAP INTERACTIVO 2021-2026)
 * ============================================================================
 */
function initRoadmap() {
  const container = document.getElementById("roadmap-route-container");
  const filterBtns = document.querySelectorAll(".year-filter-btn");
  const modal = document.getElementById("story-detail-modal");
  const modalCloseBtn = document.getElementById("story-modal-close");
  const modalTitle = document.getElementById("modal-story-title");
  const modalDate = document.getElementById("modal-story-date");
  const modalLocation = document.getElementById("modal-story-location");
  const modalQuote = document.getElementById("modal-story-quote");
  const modalContent = document.getElementById("modal-story-content");

  if (!container || !window.storyEvents) return;

  function renderRoadmap(selectedYear = "all") {
    container.innerHTML = "";

    const events = window.storyEvents.filter(item => {
      if (selectedYear === "all") return true;
      return item.year === selectedYear;
    });

    events.forEach((evt) => {
      const card = document.createElement("div");
      card.className = "roadmap-card";

      const iconHtml = getSvgIcon(evt.iconType || "heart");
      const locationIcon = getSvgIcon("location");
      const arrowIcon = getSvgIcon("arrow");

      card.innerHTML = `
        <div class="card-top-arch-badge">
          <span class="card-year-tag">${evt.tag} (${evt.year})</span>
          <div class="card-icon-circle">${iconHtml}</div>
        </div>
        <div class="card-date">${evt.date}</div>
        <h3 class="card-title">${evt.title}</h3>
        <div class="card-location">${locationIcon} <span>${evt.location}</span></div>
        <p class="card-summary">${evt.summary}</p>
        <div class="card-quote-strip">“${evt.quote}”</div>
        <button class="open-memory-btn" data-id="${evt.id}">
          <span>Leer carta completa</span>
          ${arrowIcon}
        </button>
      `;

      container.appendChild(card);
    });

    // Añadir eventos a los botones de leer carta
    container.querySelectorAll(".open-memory-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        const story = window.storyEvents.find(s => s.id === id);
        if (story && modal) {
          modalTitle.textContent = story.title;
          modalDate.textContent = `Fecha: ${story.date}`;
          modalLocation.textContent = `Lugar: ${story.location}`;
          modalQuote.textContent = `“${story.quote}”`;

          const paragraphs = story.content
            .split("\n\n")
            .map(p => `<p>${p.trim()}</p>`)
            .join("");
          modalContent.innerHTML = paragraphs;

          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });
  }

  // Filtrado de años
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderRoadmap(btn.dataset.year);
    });
  });

  // Modal cerrar
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  renderRoadmap("all");
}

/* ============================================================================
 * 🎨 4. RAMO DE SANRIO PARA PINTAR (COQUETTE)
 * ============================================================================
 */
function initBouquetColoring() {
  const container = document.getElementById("bouquet-svg-container");
  const paletteContainer = document.getElementById("bouquet-palette");
  const undoBtn = document.getElementById("bouquet-undo-btn");
  const resetBtn = document.getElementById("bouquet-reset-btn");
  const magicBtn = document.getElementById("bouquet-magic-btn");
  const downloadBtn = document.getElementById("bouquet-download-btn");
  const customColorInput = document.getElementById("custom-color-picker");

  if (!container || !window.bouquetSvgContent) return;

  container.innerHTML = window.bouquetSvgContent;

  // Paleta Coquette: Rosas porcelana, magentas profundos, cremas y pasteles
  const colors = [
    { hex: "#800f2f", name: "Magenta Coquette" },
    { hex: "#a4133c", name: "Carmesí Profundo" },
    { hex: "#ff758f", name: "Rosa Romántico" },
    { hex: "#ffb3c6", name: "Rosa Porcelana" },
    { hex: "#ffe5ec", name: "Crema Seda" },
    { hex: "#d4a373", name: "Oro Viejo" },
    { hex: "#c8b6ff", name: "Lila Kuromi" },
    { hex: "#4a3b53", name: "Morado Oscuro" },
    { hex: "#bde0fe", name: "Cielo Cinnamoroll" },
    { hex: "#fff1b0", name: "Vainilla Purin" },
    { hex: "#7f4f24", name: "Castaño Cálido" },
    { hex: "#ffd166", name: "Amarillo Tulipán" },
    { hex: "#95d5b2", name: "Menta Pastel" },
    { hex: "#74c69d", name: "Verde Botánico" },
    { hex: "#ffffff", name: "Blanco Puro" }
  ];

  let currentColor = colors[0].hex;
  const historyStack = [];

  if (paletteContainer) {
    paletteContainer.innerHTML = "";
    colors.forEach((c, idx) => {
      const swatch = document.createElement("button");
      swatch.className = `color-swatch ${idx === 0 ? "active" : ""}`;
      swatch.style.backgroundColor = c.hex;
      swatch.title = c.name;
      swatch.setAttribute("aria-label", c.name);

      swatch.addEventListener("click", () => {
        document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
        swatch.classList.add("active");
        currentColor = c.hex;
      });

      paletteContainer.appendChild(swatch);
    });
  }

  if (customColorInput) {
    customColorInput.addEventListener("input", (e) => {
      document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
      currentColor = e.target.value;
    });
  }

  const svg = container.querySelector("svg");
  if (svg) {
    const colorableElements = svg.querySelectorAll(".colorable");

    colorableElements.forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const prevFill = el.getAttribute("fill") || "#ffffff";
        if (prevFill === currentColor) return;

        historyStack.push({ element: el, previousFill: prevFill });
        el.setAttribute("fill", currentColor);
        playSparkleSound();
      });
    });
  }

  if (undoBtn) {
    undoBtn.addEventListener("click", () => {
      if (historyStack.length > 0) {
        const last = historyStack.pop();
        last.element.setAttribute("fill", last.previousFill);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("¿Deseas reiniciar el lienzo a blanco para volver a pintar?")) {
        const elements = svg.querySelectorAll(".colorable");
        elements.forEach(el => el.setAttribute("fill", "#ffffff"));
        historyStack.length = 0;
      }
    });
  }

  if (magicBtn && window.defaultBouquetColors) {
    magicBtn.addEventListener("click", () => {
      const colorsMap = window.defaultBouquetColors;
      Object.entries(colorsMap).forEach(([id, hex], index) => {
        setTimeout(() => {
          const el = svg.querySelector(`#${id}`);
          if (el) el.setAttribute("fill", hex);
        }, index * 12);
      });
      playSparkleSound();
      showNotification("Ramo coloreado con los tonos de Sanrio");
    });
  }

  if (downloadBtn && svg) {
    downloadBtn.addEventListener("click", () => {
      try {
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        canvas.width = 1200;
        canvas.height = 1560;

        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const URL = window.URL || window.webkitURL || window;
        const blobURL = URL.createObjectURL(svgBlob);

        img.onload = () => {
          ctx.fillStyle = "#fff8f9";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.font = "italic 40px 'Playfair Display', Georgia, serif";
          ctx.fillStyle = "#800f2f";
          ctx.textAlign = "center";
          ctx.fillText("Ramo de Sanrio — Para Anita, con todo mi amor", canvas.width / 2, 70);

          ctx.drawImage(img, 60, 100, 1080, 1404);
          URL.revokeObjectURL(blobURL);

          const a = document.createElement("a");
          a.download = "ramo_coquette_para_anita.png";
          a.href = canvas.toDataURL("image/png");
          a.click();
          showNotification("Tu ramo se ha guardado exitosamente");
        };

        img.src = blobURL;
      } catch (err) {
        alert("Tu ramo se ve hermoso. Puedes capturarlo en pantalla para guardarlo.");
      }
    });
  }
}

/* ============================================================================
 * 🧩 5. PUPILETRAS / SOPA DE LETRAS COQUETTE
 * ============================================================================
 */
function initWordSearch() {
  const gridContainer = document.getElementById("wordsearch-grid");
  const wordListContainer = document.getElementById("wordsearch-words-list");
  const foundCounter = document.getElementById("found-words-count");
  const totalCounter = document.getElementById("total-words-count");
  const hintBtn = document.getElementById("wordsearch-hint-btn");
  const restartBtn = document.getElementById("wordsearch-restart-btn");
  const winModal = document.getElementById("wordsearch-win-modal");
  const winModalClose = document.getElementById("win-modal-close");

  if (!gridContainer || !wordListContainer) return;

  const gridData = [
    ['C','A','R','I','Ñ','O','P','A','A','S','F','C','R','I'],
    ['A','M','I','V','I','D','A','F','A','S','R','D','D','R'],
    ['Ñ','O','M','N','E','E','Z','T','Z','E','R','D','G','F'],
    ['T','R','B','D','W','E','E','D','E','I','E','C','C','N'],
    ['C','R','E','E','R','D','R','T','Z','T','S','Z','R','P'],
    ['K','A','U','R','N','Y','E','S','R','E','F','T','E','I'],
    ['N','W','R','O','P','U','S','Z','V','A','X','L','E','C'],
    ['A','E','R','D','Y','R','C','X','F','M','A','D','R','N'],
    ['C','A','R','R','O','E','U','F','G','O','S','F','H','I'],
    ['F','H','O','J','B','D','C','F','H','Z','H','Z','H','C'],
    ['P','A','P','R','E','N','H','O','A','Z','I','L','E','F'],
    ['A','D','M','A','S','E','A','T','R','G','H','H','X','T'],
    ['P','A','C','D','O','R','R','A','R','S','D','Y','X','R'],
    ['I','S','L','K','J','P','U','S','A','X','F','D','T','G'],
    ['A','N','E','N','A','A','A','X','C','S','B','E','B','E']
  ];

  const targetWords = [
    { display: "Cariño", clean: "CARIÑO", found: false },
    { display: "Amor", clean: "AMOR", found: false },
    { display: "Papi", clean: "PAPI", found: false },
    { display: "Paz", clean: "PAZ", found: false },
    { display: "Nena", clean: "NENA", found: false },
    { display: "Feliz", clean: "FELIZ", found: false },
    { display: "Te amo", clean: "TEAMO", found: false },
    { display: "Carro", clean: "CARRO", found: false },
    { display: "Escuchar", clean: "ESCUCHAR", found: false },
    { display: "Aprender", clean: "APRENDER", found: false },
    { display: "Creer", clean: "CREER", found: false },
    { display: "Picnic", clean: "PICNIC", found: false },
    { display: "Bebe", clean: "BEBE", found: false },
    { display: "Beso", clean: "BESO", found: false },
    { display: "Mi vida", clean: "MIVIDA", found: false }
  ];

  let foundWordsCount = 0;
  if (totalCounter) totalCounter.textContent = targetWords.length;
  if (foundCounter) foundCounter.textContent = "0";

  function renderWordList() {
    wordListContainer.innerHTML = "";
    targetWords.forEach(w => {
      const item = document.createElement("div");
      item.className = `wordsearch-word-item ${w.found ? "found" : ""}`;
      const heartSvg = getSvgIcon("heart");
      item.innerHTML = `
        <span class="word-heart-svg">${heartSvg}</span>
        <span class="word-text">${w.display}</span>
      `;
      wordListContainer.appendChild(item);
    });
  }

  gridContainer.innerHTML = "";
  const numRows = gridData.length;
  const numCols = gridData[0].length;
  gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;

  const cellElements = [];
  for (let r = 0; r < numRows; r++) {
    cellElements[r] = [];
    for (let c = 0; c < numCols; c++) {
      const cell = document.createElement("div");
      cell.className = "wordsearch-cell";
      cell.textContent = gridData[r][c];
      cell.dataset.row = r;
      cell.dataset.col = c;
      gridContainer.appendChild(cell);
      cellElements[r][c] = cell;
    }
  }

  let isSelecting = false;
  let startCell = null;
  let currentSelection = [];

  const highlightColors = [
    "#800f2f",
    "#a4133c",
    "#c9184a",
    "#7f4f24",
    "#4a3b53",
    "#590d22"
  ];

  function getCellsBetween(r1, c1, r2, c2) {
    const dr = r2 - r1;
    const dc = c2 - c1;
    const stepR = dr === 0 ? 0 : dr / Math.abs(dr);
    const stepC = dc === 0 ? 0 : dc / Math.abs(dc);

    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) {
      return [];
    }

    const cells = [];
    const length = Math.max(Math.abs(dr), Math.abs(dc));

    for (let i = 0; i <= length; i++) {
      cells.push({
        r: r1 + i * stepR,
        c: c1 + i * stepC,
        letter: gridData[r1 + i * stepR][c1 + i * stepC]
      });
    }

    return cells;
  }

  function updateSelectionVisual(cells) {
    document.querySelectorAll(".wordsearch-cell.selecting").forEach(c => c.classList.remove("selecting"));
    cells.forEach(item => {
      cellElements[item.r][item.c].classList.add("selecting");
    });
  }

  function handleStart(r, c) {
    isSelecting = true;
    startCell = { r, c };
    currentSelection = [{ r, c, letter: gridData[r][c] }];
    updateSelectionVisual(currentSelection);
  }

  function handleMove(r, c) {
    if (!isSelecting || !startCell) return;
    const cells = getCellsBetween(startCell.r, startCell.c, r, c);
    if (cells.length > 0) {
      currentSelection = cells;
      updateSelectionVisual(currentSelection);
    }
  }

  function handleEnd() {
    if (!isSelecting) return;
    isSelecting = false;

    if (currentSelection.length > 1) {
      const selectedWord = currentSelection.map(c => c.letter).join("");
      const reversedWord = currentSelection.map(c => c.letter).reverse().join("");

      const match = targetWords.find(w => (!w.found) && (w.clean === selectedWord || w.clean === reversedWord));

      if (match) {
        match.found = true;
        foundWordsCount++;
        if (foundCounter) foundCounter.textContent = foundWordsCount;

        const color = highlightColors[(foundWordsCount - 1) % highlightColors.length];

        currentSelection.forEach(item => {
          const el = cellElements[item.r][item.c];
          el.classList.add("found-cell");
          el.style.backgroundColor = color;
        });

        playSparkleSound();
        renderWordList();

        if (foundWordsCount === targetWords.length) {
          setTimeout(() => {
            if (winModal) winModal.classList.add("active");
          }, 400);
        }
      }
    }

    document.querySelectorAll(".wordsearch-cell.selecting").forEach(c => c.classList.remove("selecting"));
    currentSelection = [];
    startCell = null;
  }

  gridContainer.addEventListener("mousedown", (e) => {
    const cell = e.target.closest(".wordsearch-cell");
    if (cell) handleStart(parseInt(cell.dataset.row), parseInt(cell.dataset.col));
  });

  window.addEventListener("mousemove", (e) => {
    if (!isSelecting) return;
    const elem = document.elementFromPoint(e.clientX, e.clientY);
    if (elem && elem.classList.contains("wordsearch-cell")) {
      handleMove(parseInt(elem.dataset.row), parseInt(elem.dataset.col));
    }
  });

  window.addEventListener("mouseup", handleEnd);

  // Soporte táctil en celulares
  gridContainer.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    if (elem && elem.classList.contains("wordsearch-cell")) {
      handleStart(parseInt(elem.dataset.row), parseInt(elem.dataset.col));
      e.preventDefault();
    }
  }, { passive: false });

  gridContainer.addEventListener("touchmove", (e) => {
    if (!isSelecting) return;
    const touch = e.touches[0];
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    if (elem && elem.classList.contains("wordsearch-cell")) {
      handleMove(parseInt(elem.dataset.row), parseInt(elem.dataset.col));
      e.preventDefault();
    }
  }, { passive: false });

  gridContainer.addEventListener("touchend", handleEnd);

  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      const unfound = targetWords.find(w => !w.found);
      if (!unfound) return;

      const firstLetter = unfound.clean[0];
      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          if (gridData[r][c] === firstLetter) {
            const cell = cellElements[r][c];
            cell.classList.add("hint-pulse");
            setTimeout(() => cell.classList.remove("hint-pulse"), 1800);
            showNotification(`Pista: Busca "${unfound.display}" (inicia con ${firstLetter})`);
            return;
          }
        }
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      targetWords.forEach(w => w.found = false);
      foundWordsCount = 0;
      if (foundCounter) foundCounter.textContent = "0";

      document.querySelectorAll(".wordsearch-cell").forEach(cell => {
        cell.classList.remove("found-cell", "selecting");
        cell.style.backgroundColor = "";
      });

      renderWordList();
      showNotification("Sopa de letras reiniciada");
    });
  }

  if (winModalClose && winModal) {
    winModalClose.addEventListener("click", () => winModal.classList.remove("active"));
    winModal.addEventListener("click", (e) => {
      if (e.target === winModal) winModal.classList.remove("active");
    });
  }

  renderWordList();
}

/* ============================================================================
 * 💌 6. FRASQUITO DE NOTAS DE AMOR SECRETAS
 * ============================================================================
 */
function initLoveJar() {
  const jarBtn = document.getElementById("love-jar-btn");
  const noteDisplay = document.getElementById("love-note-card");
  const noteText = document.getElementById("love-note-text");
  const noteAuthor = document.getElementById("love-note-author");
  const anotherNoteBtn = document.getElementById("another-note-btn");

  if (!jarBtn || !noteDisplay || !window.loveQuotes) return;

  let lastIndex = -1;

  function drawRandomNote() {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * window.loveQuotes.length);
    } while (randIndex === lastIndex && window.loveQuotes.length > 1);

    lastIndex = randIndex;
    const item = window.loveQuotes[randIndex];

    noteDisplay.classList.remove("show");
    playSparkleSound();

    setTimeout(() => {
      noteText.textContent = `“${item.quote}”`;
      noteAuthor.textContent = `— ${item.author}`;
      noteDisplay.classList.add("show");
    }, 200);
  }

  jarBtn.addEventListener("click", drawRandomNote);
  if (anotherNoteBtn) anotherNoteBtn.addEventListener("click", drawRandomNote);
}

/* ============================================================================
 * 🌸 7. PARTÍCULAS Y DETALLES COQUETTE (CERO EMOJIS)
 * ============================================================================
 */
function initCoquetteParticles() {
  window.addEventListener("pointermove", (e) => {
    if (Math.random() > 0.90) {
      spawnMiniSparkle(e.clientX, e.clientY);
    }
  });
}

function spawnMiniSparkle(x, y) {
  const el = document.createElement("span");
  el.className = "cursor-heart";
  el.innerHTML = getSvgIcon("sparkle");
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.color = Math.random() > 0.5 ? "var(--magenta-main)" : "var(--pink-blush)";
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 900);
}

function showNotification(msg) {
  let toast = document.getElementById("love-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "love-toast";
    toast.className = "love-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}
