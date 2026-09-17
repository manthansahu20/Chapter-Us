/* =========================================================
   OUR STORY — configuration
   Edit everything in this object. The rest of the site reads
   from it automatically — you should not need to touch the
   HTML to update content, photos, or the playlist.
   ========================================================= */
const friendshipData = {
  person1: "Om",
  person2: "Alaka", // Om calls her "Awwlie"

  story: {
    beginning: "[YOUR STORY — how you first met]",
    firstMemory: "[YOUR FIRST MEMORY TOGETHER]",
    specialMoment: "[THE MOMENT YOU BECAME CLOSE]"
  },

  // Chapter 03 — Memory Lane. Add as many as you like; the layout
  // repeats every 6 cards in a photo/polaroid pattern automatically.
  // Titles below are just neutral placeholders — replace with your real
  // captions and dates whenever you're ready.
  memories: [
    { image: "assets/photos/photo1.jpg",  date: "[DATE]", title: "Pointing At Each Other",     caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo2.jpg",  date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo3.jpg",  date: "[DATE]", title: "On The Wall",                 caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo4.jpg",  date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo5.jpg",  date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo6.jpg",  date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo7.jpg",  date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo8.jpg",  date: "[DATE]", title: "Arms Crossed",                caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo9.jpg",  date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo10.jpg", date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo11.jpg", date: "[DATE]", title: "Haldi Day",                   caption: "[SHORT CAPTION]" },
    { image: "assets/photos/photo12.jpg", date: "[DATE]", title: "[MEMORY TITLE]",              caption: "[SHORT CAPTION]" }
  ],

  // Chapter 04 — Just Us Being Us
  chaos: [
    { label: "Inside Joke #01", text: "[TEXT]" },
    { label: "Moment #02",      text: "[TEXT]" },
    { label: "That One Day...", text: "[TEXT]" },
    { label: "Still Don't Know Why We Did That.", text: "[TEXT]" }
  ],

  // Friendship stats — "num" can be a plain number (will count up),
  // or text like "∞" / "999+" / "100%" / "MAX" (shown as-is).
  stats: [
    { num: "∞",    label: "Memories" },
    { num: "∞",    label: "Inside Jokes" },
    { num: "999+", label: "Random Talks" },
    { num: "∞",    label: "Laughs" },
    { num: "999+", label: "Arguments" },
    { num: "100%", label: "Trust" },
    { num: "MAX",  label: "Bestie Level" }
  ],

  // Chapter 05 — playlist.
  playlist: [
    { title: "By My Side",     artist: "AP Dhillon",              audio: "assets/music/song1.mp3", cover: "assets/photos/photo1.jpg" },
    { title: "Mera Yaar",      artist: "Savi Kahlon",              audio: "assets/music/song2.mp3", cover: "assets/photos/photo3.jpg" },
    { title: "Thinking Of You",artist: "AP Dhillon",              audio: "assets/music/song3.mp3", cover: "assets/photos/photo5.jpg" },
    { title: "With You",       artist: "AP Dhillon",              audio: "assets/music/song4.mp3", cover: "assets/photos/photo7.jpg" },
    { title: "Dil Nu",         artist: "Shinda Kahlon, AP Dhillon",audio: "assets/music/song5.mp3", cover: "assets/photos/photo9.jpg" },
    { title: "Wo Noor",        artist: "AP Dhillon",              audio: "assets/music/song6.mp3", cover: "assets/photos/photo11.jpg" }
  ],

  // Chapter 10 — final photo sequence (reuses /assets/photos/ files)
  finalPhotos: [
    "assets/photos/photo1.jpg",
    "assets/photos/photo7.jpg",
    "assets/photos/photo9.jpg",
    "assets/photos/photo11.jpg"
  ],

  // Section 09 — Things I Never Say
  letter:
`Awwlie,

There are some things that are easier to write than say.

Thank you for being there.
Thank you for understanding.
Thank you for being you.

You've been my best friend and somehow my sister too —
two things I never expected to find in one person.

Whatever happens, I hope this friendship always remains
one of the most beautiful parts of our story.

— Om`
};

/* =========================================================
   Utilities
   ========================================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

// Graceful placeholder for any image that hasn't been added yet.
function withFallback(img, label){
  img.addEventListener('error', () => {
    const canvas = document.createElement('canvas');
    canvas.width = 600; canvas.height = 750;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 600, 750);
    grad.addColorStop(0, '#0f1729');
    grad.addColorStop(1, '#0a0f1d');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 600, 750);
    ctx.strokeStyle = 'rgba(244,246,251,0.12)';
    ctx.strokeRect(20, 20, 560, 710);
    ctx.fillStyle = 'rgba(139,147,169,0.9)';
    ctx.font = 'italic 28px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText(label || 'add a photo here', 300, 385);
    img.src = canvas.toDataURL();
  }, { once: true });
}

function formatTime(sec){
  if (!isFinite(sec) || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/* =========================================================
   Populate DOM from friendshipData
   ========================================================= */
function populateContent(){
  document.getElementById('person1Name').textContent = friendshipData.person1;
  document.getElementById('person2Name').textContent = friendshipData.person2;
  document.getElementById('finalPerson1').textContent = friendshipData.person1;
  document.getElementById('finalPerson2').textContent = friendshipData.person2;
  document.getElementById('letterText').textContent = friendshipData.letter;

  // Gallery
  const gallery = document.getElementById('gallery');
  friendshipData.memories.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = i;
    const img = document.createElement('img');
    img.src = m.image; img.alt = m.title; img.loading = 'lazy';
    withFallback(img, m.title);
    const tag = document.createElement('span');
    tag.className = 'memory-card__tag';
    tag.textContent = m.title;
    card.append(img, tag);
    card.addEventListener('click', () => openMemoryViewer(m));
    gallery.appendChild(card);
  });

  // Chaos cards
  const chaosGrid = document.getElementById('chaosGrid');
  friendshipData.chaos.forEach(c => {
    const card = document.createElement('div');
    card.className = 'chaos-card';
    card.innerHTML = `<span class="chaos-card__label">${c.label}</span><p class="chaos-card__text">${c.text}</p>`;
    chaosGrid.appendChild(card);
  });

  // Stats
  const statsGrid = document.getElementById('statsGrid');
  friendshipData.stats.forEach(s => {
    const el = document.createElement('div');
    el.className = 'stat';
    const isNumeric = /^\d+$/.test(String(s.num));
    el.innerHTML = `<span class="stat__num" data-target="${isNumeric ? s.num : ''}">${isNumeric ? '0' : s.num}</span><span class="stat__label">${s.label}</span>`;
    statsGrid.appendChild(el);
  });

  // Playlist
  const list = document.getElementById('playerList');
  friendshipData.playlist.forEach((t, i) => {
    const li = document.createElement('li');
    li.dataset.index = i;
    li.innerHTML = `<span>${String(i + 1).padStart(2, '0')} — ${t.title}</span><span>${t.artist}</span>`;
    li.addEventListener('click', () => loadTrack(i, true));
    list.appendChild(li);
  });

  // Final photo sequence
  const stage = document.getElementById('finalPhotosStage');
  friendshipData.finalPhotos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src; img.alt = 'A memory'; img.loading = 'lazy';
    img.dataset.index = i;
    withFallback(img, 'a memory to add');
    stage.appendChild(img);
  });
}

/* =========================================================
   Memory viewer (fullscreen)
   ========================================================= */
function openMemoryViewer(m){
  const viewer = document.getElementById('memoryViewer');
  document.getElementById('memoryViewerImg').src = m.image;
  document.getElementById('memoryViewerDate').textContent = m.date;
  document.getElementById('memoryViewerTitle').textContent = m.title;
  document.getElementById('memoryViewerCaption').textContent = m.caption;
  viewer.classList.add('is-open');
  viewer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeMemoryViewer(){
  const viewer = document.getElementById('memoryViewer');
  viewer.classList.remove('is-open');
  viewer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* =========================================================
   Audio player
   ========================================================= */
let currentTrack = 0;
let isPlaying = false;
const audioEl = document.getElementById('audioEl');

function loadTrack(i, autoplay){
  currentTrack = (i + friendshipData.playlist.length) % friendshipData.playlist.length;
  const t = friendshipData.playlist[currentTrack];
  audioEl.src = t.audio;
  document.getElementById('playerTrack').textContent = t.title;
  document.getElementById('playerArtist').textContent = t.artist;
  const cover = document.getElementById('playerCover');
  cover.src = t.cover;
  withFallback(cover, t.title);
  document.querySelectorAll('#playerList li').forEach(li => li.classList.toggle('is-active', Number(li.dataset.index) === currentTrack));
  if (autoplay) playTrack();
}

function playTrack(){
  audioEl.play().then(() => {
    isPlaying = true;
    document.getElementById('player').classList.add('is-playing');
    document.getElementById('playerToggle').innerHTML = '&#10073;&#10073;';
    document.getElementById('playerToggle').setAttribute('aria-label', 'Pause');
  }).catch(() => {
    // no audio file present yet — fail silently, UI stays interactive
    isPlaying = false;
  });
}
function pauseTrack(){
  audioEl.pause();
  isPlaying = false;
  document.getElementById('player').classList.remove('is-playing');
  document.getElementById('playerToggle').innerHTML = '&#9658;';
  document.getElementById('playerToggle').setAttribute('aria-label', 'Play');
}

function initPlayer(){
  loadTrack(0, false);

  document.getElementById('playerToggle').addEventListener('click', () => isPlaying ? pauseTrack() : playTrack());
  document.getElementById('playerNext').addEventListener('click', () => loadTrack(currentTrack + 1, isPlaying));
  document.getElementById('playerPrev').addEventListener('click', () => loadTrack(currentTrack - 1, isPlaying));
  audioEl.addEventListener('ended', () => loadTrack(currentTrack + 1, true));

  audioEl.addEventListener('loadedmetadata', () => {
    document.getElementById('playerDuration').textContent = formatTime(audioEl.duration);
  });
  audioEl.addEventListener('timeupdate', () => {
    document.getElementById('playerCurrent').textContent = formatTime(audioEl.currentTime);
    const seek = document.getElementById('playerSeek');
    if (!seek.dragging) seek.value = (audioEl.currentTime / (audioEl.duration || 1)) * 100;
  });
  const seek = document.getElementById('playerSeek');
  seek.addEventListener('input', () => {
    seek.dragging = true;
    if (audioEl.duration) audioEl.currentTime = (seek.value / 100) * audioEl.duration;
  });
  seek.addEventListener('change', () => { seek.dragging = false; });
}

/* =========================================================
   Envelope / letter
   ========================================================= */
function initEnvelope(){
  document.getElementById('envelopeOpen').addEventListener('click', () => {
    document.getElementById('envelope').classList.add('is-open');
  });
}

/* =========================================================
   Loader sequence
   ========================================================= */
function runLoader(){
  const loader = document.getElementById('loader');
  const lines = loader.querySelectorAll('.loader__line');

  if (prefersReducedMotion){
    loader.style.display = 'none';
    revealHero();
    return;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0, duration: 0.8, ease: 'power2.inOut',
        onComplete: () => { loader.style.display = 'none'; revealHero(); }
      });
    }
  });

  lines.forEach((line, i) => {
    tl.to(line, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, i === 0 ? 0 : '+=0.35')
      .to(line, { opacity: 0, duration: 0.5, ease: 'power2.in' }, '+=0.55');
  });
}

function revealHero(){
  document.body.style.overflow = '';
  gsap.timeline()
    .to('#heroPreamble .hero__whisper', { opacity: 1, duration: 0.9, stagger: 0.5, ease: 'power2.out' })
    .to('#heroPreamble', { opacity: 0, duration: 0.7, ease: 'power2.inOut' }, '+=1')
    .to('#heroMain', { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.2')
    .from('#heroMain .hero__title-line', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' }, '<')
    .from('#heroMain .hero__names, #heroMain .hero__tagline, #heroMain .hero__scrollcue', { y: 16, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out' }, '-=0.6');

  ScrollTrigger.refresh();
}

/* =========================================================
   Scroll-driven cinematic animations
   ========================================================= */
function initScrollAnimations(){
  gsap.registerPlugin(ScrollTrigger);

  // --- Nav: reveal after hero, hide/show on scroll direction ---
  const nav = document.getElementById('siteNav');
  let lastY = 0;
  ScrollTrigger.create({
    start: 100, end: 99999,
    onUpdate: self => {
      const y = self.scroll();
      nav.classList.toggle('is-visible', y > window.innerHeight * 0.5 ? (y < lastY || y < window.innerHeight * 0.6) : false);
      lastY = y;
    }
  });

  // Nav active link + progress bar
  const sections = gsap.utils.toArray('.section[id]');
  const progressFill = document.querySelector('.story-progress__fill');
  sections.forEach(sec => {
    ScrollTrigger.create({
      trigger: sec, start: 'top center', end: 'bottom center',
      onToggle: self => {
        if (!self.isActive) return;
        document.querySelectorAll('[data-nav]').forEach(a => {
          a.classList.toggle('is-active', a.getAttribute('href') === `#${sec.id}`);
        });
      }
    });
  });
  ScrollTrigger.create({
    trigger: document.body, start: 'top top', end: 'bottom bottom',
    onUpdate: self => gsap.set(progressFill, { scaleX: self.progress })
  });

  // --- Generic [data-reveal] fade-up ---
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 1, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  // --- Hero transform on scroll out ---
  gsap.to('.hero__main', {
    yPercent: -20, opacity: 0, scale: 0.94, filter: 'blur(6px)',
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 }
  });
  gsap.to('.hero__glow', {
    scale: 1.3, opacity: 0.4, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 }
  });

  // --- Section 02: How it started, sequential reveal ---
  gsap.utils.toArray('.started__line').forEach((line, i) => {
    gsap.to(line, {
      opacity: line.classList.contains('started__final') ? 1 : 0.95,
      y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: line, start: 'top 80%' }
    });
  });
  gsap.set('.started__line', { y: 24 });

  // --- Section 03: Journey timeline ---
  const items = gsap.utils.toArray('.timeline__item');
  ScrollTrigger.create({
    trigger: '#journey', start: 'top top', end: 'bottom bottom',
    onUpdate: self => {
      gsap.set('#timelineFill', { height: `${self.progress * 100}%` });
      const activeIdx = Math.min(items.length - 1, Math.floor(self.progress * items.length));
      items.forEach((it, i) => it.classList.toggle('is-active', i === activeIdx));
    }
  });

  // --- Section 04: Gallery entrance ---
  gsap.utils.toArray('.memory-card').forEach((card, i) => {
    const fromX = i % 2 === 0 ? -40 : 40;
    gsap.fromTo(card, { opacity: 0, x: fromX, rotate: i % 3 - 1 },
      { opacity: 1, x: 0, rotate: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' } });
  });

  // --- Section 05: Chaos cards ---
  gsap.utils.toArray('.chaos-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1, duration: 0.7, delay: (i % 4) * 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 90%' }
    });
  });

  // --- Section 06: Stats counters ---
  gsap.utils.toArray('.stat__num[data-target]').forEach(el => {
    const target = Number(el.dataset.target);
    if (!target) return;
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => gsap.to({ val: 0 }, {
        val: target, duration: 1.6, ease: 'power2.out',
        onUpdate: function(){ el.textContent = Math.floor(this.targets()[0].val); }
      })
    });
  });

  // --- Section 08: Little things, line by line ---
  gsap.utils.toArray('.little-things__list li').forEach((li, i) => {
    gsap.fromTo(li, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: li, start: 'top 85%' }
    });
  });

  // --- Section 10: Final photo crossfade sequence (pinned) ---
  const finalImgs = gsap.utils.toArray('#finalPhotosStage img');
  const captions = ['One day.', 'One photo.', 'One memory.', 'And so many more to come.'];
  const finalCaption = document.getElementById('finalPhotosCaption');
  if (finalImgs.length){
    gsap.set(finalImgs[0], { opacity: 1 });
    ScrollTrigger.create({
      trigger: '#final-photos', start: 'top top', end: `+=${finalImgs.length * 100}%`, pin: true, scrub: 0.5,
      onUpdate: self => {
        const step = 1 / (finalImgs.length + 1);
        const idx = Math.min(finalImgs.length - 1, Math.floor(self.progress / step));
        finalImgs.forEach((img, i) => gsap.set(img, { opacity: i === idx ? 1 : 0 }));
        const capIdx = Math.min(captions.length - 1, Math.floor(self.progress * captions.length));
        finalCaption.textContent = captions[capIdx];
      }
    });
  }

  // --- Cursor glow ---
  if (!isTouch && !prefersReducedMotion){
    const glow = document.querySelector('.cursor-glow');
    window.addEventListener('mousemove', e => {
      document.body.classList.add('cursor-active');
      gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
    });
  }

  // --- Magnetic buttons ---
  if (!isTouch && !prefersReducedMotion){
    document.querySelectorAll('.finale__replay-btn, .envelope__open, .player__toggle').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }));
    });
  }
}

/* =========================================================
   Smooth scroll (Lenis) wired to ScrollTrigger
   ========================================================= */
function initSmoothScroll(){
  if (prefersReducedMotion || typeof Lenis === 'undefined') return;

  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  window.__lenis = lenis;
}

/* =========================================================
   Nav + replay + memory viewer wiring
   ========================================================= */
function initUI(){
  document.getElementById('memoryViewerClose').addEventListener('click', closeMemoryViewer);
  document.getElementById('memoryViewer').addEventListener('click', e => {
    if (e.target.id === 'memoryViewer') closeMemoryViewer();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMemoryViewer(); });

  document.getElementById('replayBtn').addEventListener('click', () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.8 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('a[data-nav]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (window.__lenis) window.__lenis.scrollTo(target, { duration: 1.4 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* =========================================================
   Boot
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  populateContent();
  initPlayer();
  initEnvelope();
  initUI();
  initSmoothScroll();
  initScrollAnimations();
  runLoader();
});
