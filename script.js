// Rotating tagline
const phrases = ["0 → 1 products", "AI-first workflows", "product-led growth", "for regulated domains"];
let phraseIndex = 0;
const rotator = document.getElementById("rotator");
setInterval(() => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  rotator.classList.add("is-out");
  setTimeout(() => {
    rotator.textContent = phrases[phraseIndex];
    rotator.classList.remove("is-out");
  }, 300);
}, 2600);

// Count-up stats when they scroll into view
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const start = performance.now();
  const duration = 1200;
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll(".stat__num").forEach((el) => statObserver.observe(el));

// Case study filters and cards
const filtersEl = document.getElementById("filters");
const cardsEl = document.getElementById("cards");
const allTags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];

function renderFilters(active) {
  filtersEl.innerHTML = allTags
    .map((tag) => `<button class="filter${tag === active ? " is-active" : ""}" data-tag="${tag}">${tag}</button>`)
    .join("");
}

function renderCards(active) {
  const list = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active));
  cardsEl.innerHTML = list
    .map((p) => `
      <button class="card" data-id="${p.id}">
        <span class="card__company">${p.company}</span>
        <span class="card__title">${p.title}</span>
        <span class="card__metric">${p.metrics[0][0]} <small>${p.metrics[0][1]}</small></span>
        <span class="card__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</span>
      </button>`)
    .join("");
}

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  renderFilters(btn.dataset.tag);
  renderCards(btn.dataset.tag);
});

renderFilters("All");
renderCards("All");

// Case study modal
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  modalBody.innerHTML = `
    <p class="eyebrow">${p.company} · ${p.context}</p>
    <h3 class="modal__title">${p.title}</h3>
    <div class="modal__metrics">
      ${p.metrics.map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`).join("")}
    </div>
    <div class="modal__grid">
      <div><h4>The problem</h4><p>${p.problem}</p></div>
      <div><h4>My role</h4><p>${p.role}</p></div>
      <div><h4>What I did</h4><ul>${p.approach.map((a) => `<li>${a}</li>`).join("")}</ul></div>
      <div><h4>Outcome</h4><p>${p.outcome}</p></div>
    </div>
    ${p.link ? `<a class="btn btn--primary modal__link" href="${p.link[1]}" target="_blank" rel="noopener">${p.link[0]} ↗</a>` : ""}`;
  modal.showModal();
}

cardsEl.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openProject(card.dataset.id);
});
document.getElementById("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

// Timeline accordion
const timelineEl = document.getElementById("timeline");
timelineEl.innerHTML = TIMELINE
  .map((t, i) => `
    <li class="tl${i === 0 ? " is-open" : ""}">
      <button class="tl__head" aria-expanded="${i === 0}">
        <span class="tl__period">${t.period}</span>
        <span class="tl__role"><strong>${t.company}</strong> · ${t.role}</span>
        ${t.points.length ? '<span class="tl__toggle">+</span>' : ""}
      </button>
      ${t.points.length ? `<ul class="tl__body">${t.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>` : ""}
    </li>`)
  .join("");

timelineEl.addEventListener("click", (e) => {
  const head = e.target.closest(".tl__head");
  if (!head) return;
  const item = head.parentElement;
  const open = item.classList.toggle("is-open");
  head.setAttribute("aria-expanded", open);
});

// Fade sections in on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".section").forEach((s) => revealObserver.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();
