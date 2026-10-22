document.getElementById("year").textContent = new Date().getFullYear();

// Book a call: the button opens the Google Calendar booking page in a pop-up, loaded only on first click
const booking = document.getElementById("booking");
const bookingFrame = document.getElementById("bookingFrame");
document.getElementById("bookCall").addEventListener("click", (e) => {
  if (!booking.showModal) return; // very old browsers: follow the link to the booking page instead
  e.preventDefault();
  if (!bookingFrame.firstChild) {
    bookingFrame.innerHTML = `<iframe src="${BOOKING_URL}" title="Book a 20-minute call with Stella"></iframe>`;
  }
  booking.showModal();
});
document.getElementById("bookingClose").addEventListener("click", () => booking.close());
booking.addEventListener("click", (e) => { if (e.target === booking) booking.close(); });

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

// Selected Work: a list of big project titles; hovering shows the headline number
const cardsEl = document.getElementById("cards");
cardsEl.innerHTML = PROJECTS
  .map((p) => `
    <li>
      <button class="work" data-id="${p.id}">
        <span class="work__title">${p.company}</span>
        <span class="work__peek">${p.metrics[0][0]} <em>${p.metrics[0][1]}</em></span>
      </button>
    </li>`)
  .join("");

// Case study modal
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  modalBody.innerHTML = `
    <p class="eyebrow">${p.company} · ${p.context}</p>
    <h3 class="modal__title">${p.title}</h3>
    ${p.phone ? `<div class="modal__phone">${document.querySelector(".phone-wrap").outerHTML}</div>` : ""}
    <div class="modal__metrics">
      ${p.metrics.map(([n, l]) => `<div><strong>${n}</strong><span>${l}</span></div>`).join("")}
    </div>
    <div class="modal__grid">
      <div><h4>The problem</h4><p>${p.problem}</p></div>
      <div><h4>My role</h4><p>${p.role}</p></div>
      <div><h4>What I did</h4><ul>${p.approach.map((a) => `<li>${a}</li>`).join("")}</ul></div>
      <div><h4>Outcome</h4><p>${p.outcome}</p></div>
    </div>
    ${p.link ? `<a class="modal__link" href="${p.link[1]}" target="_blank" rel="noopener">${p.link[0]} ↗</a>` : ""}`;
  modal.showModal();
}

cardsEl.addEventListener("click", (e) => {
  const item = e.target.closest(".work");
  if (item) openProject(item.dataset.id);
});
document.getElementById("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

// Experience: role and years small on the left, company large on the right; click to expand
const timelineEl = document.getElementById("timeline");
timelineEl.innerHTML = TIMELINE
  .map((t, i) => `
    <li class="tl">
      <button class="tl__head" aria-expanded="false"${t.points.length ? "" : " disabled"}>
        <span class="tl__num">${String(i + 1).padStart(2, "0")}</span>
        <span class="tl__company">${t.company}</span>
        <span class="tl__meta">${t.role}<br>${t.period}</span>
        <span class="tl__toggle" aria-hidden="true">${t.points.length ? "+" : ""}</span>
      </button>
      ${t.points.length ? `<div class="tl__body">
        ${t.intro ? `<p class="tl__intro">${t.intro}</p>` : ""}
        <ul class="tl__list">${t.points.map((pt) => typeof pt === "string"
          ? `<li class="tl__bullet">${pt}</li>`
          : `<li class="tl__client">
              <span class="tl__clientTitle">${pt.title}</span>
              <span class="tl__clientDate">${pt.period}</span>
              <p>${pt.text}</p>
            </li>`).join("")}</ul>
      </div>` : ""}
    </li>`)
  .join("");

timelineEl.addEventListener("click", (e) => {
  const head = e.target.closest(".tl__head");
  if (!head || head.disabled) return;
  const open = head.parentElement.classList.toggle("is-open");
  head.setAttribute("aria-expanded", open);
});
