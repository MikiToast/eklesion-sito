// Pagina «Le carte»: filtri, ricerca e finestra di dettaglio. I dati sono in dati.js (generato da build.py).
const TIPI = { animatore: "Animatore", gioco: "Gioco", luogo: "Luogo", tema: "Tema", imprevisto: "Imprevisto", materiale: "Materiale" };
const RARITA = { C: "Comune", R: "Rara", L: "Leggendaria", M: "Base" };
const RUOLI = { accoglienza: "Accoglienza", direzione: "Direzione", iscrizioni: "Iscrizioni", laboratori: "Laboratori", merenda: "Merenda", tornei: "Tornei" };
const CARICHE = { bassa_manovalanza: "Bassa Manovalanza", responsabile: "Responsabile", boss: "Boss" };
const SUB = { interno: "Luogo Interno", esterno: "Luogo Esterno", stand: "Stand", ruolo: "Di ruolo" };
const MAT = { sportivo: "Sportivo", creativo: "Creativo", musicale: "Musicale", ristoro: "Ristoro", any: "Qualsiasi" };

const filtro = { tipo: "", rarita: "", ruolo: "", testo: "" };
const grid = document.getElementById("grid");
const conta = document.getElementById("conta");

function costo(c) {
  return `<span class="cost" title="${Object.entries(c).map(([k, n]) => n + " " + MAT[k]).join(", ")}">` +
    Object.entries(c).map(([k, n]) => `<i class="m-${k}"></i>`.repeat(n)).join("") + `</span>`;
}

function chip(contenitore, voci, chiave) {
  const box = document.getElementById(contenitore);
  box.innerHTML = [["", "Tutte"], ...Object.entries(voci)].map(([k, t]) => `<button class="chip ${k === "" ? "on" : ""}" data-k="${k}">${t}</button>`).join("");
  box.addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    filtro[chiave] = b.dataset.k;
    box.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === b));
    disegna();
  });
}

function disegna() {
  const t = filtro.testo.trim().toLowerCase();
  const lista = CARTE.filter((c) =>
    (!filtro.tipo || c.type === filtro.tipo) && (!filtro.rarita || c.rarity === filtro.rarita) && (!filtro.ruolo || c.ruolo === filtro.ruolo) &&
    (!t || (c.name + " " + (c.text || "") + " " + (c.attack ? c.attack.name + " " + c.attack.text : "") + " " + (c.passive ? c.passive.name + " " + c.passive.text : "")).toLowerCase().includes(t)));
  grid.innerHTML = lista.map((c) => `<button class="tile" data-id="${c.id}" aria-label="${c.name}"><img src="img/carte/${c.id}.webp" alt="${c.name}" loading="lazy" width="330" height="462"></button>`).join("");
  conta.textContent = lista.length === CARTE.length ? `${CARTE.length} carte` : `${lista.length} carte su ${CARTE.length}`;
}

function dettaglio(id) {
  const c = CARTE.find((x) => x.id === id);
  const tipo = c.sub && SUB[c.sub] && c.type !== "gioco" ? SUB[c.sub] : TIPI[c.type];
  const badges = [`<span class="badge">${tipo}${c.type === "gioco" && c.sub ? " · " + (SUB[c.sub] || c.sub) : ""}</span>`, `<span class="badge r-${c.rarity}">${RARITA[c.rarity]}</span>`];
  if (c.carica) badges.push(`<span class="badge">${CARICHE[c.carica]}</span>`);
  if (c.ruolo) badges.push(`<span class="badge">Ruolo: ${RUOLI[c.ruolo]}</span>`);
  if (c.bs) badges.push(`<span class="badge">${c.bs} BS</span>`);
  let corpo = "";
  if (c.passive) corpo += `<div class="ab"><b>${c.passive.name}</b> <small>(passiva)</small><br>${c.passive.text}</div>`;
  if (c.attack) corpo += `<div class="ab"><b>${c.attack.name}</b>${costo(c.attack.cost)} <b style="float:right">${c.attack.dmg}</b><br>${c.attack.text || "Attacco base."}</div>`;
  if (c.text) corpo += `<div class="ab">${c.text}</div>`;
  const m = document.getElementById("modal");
  m.querySelector(".box").innerHTML = `<button class="x" aria-label="Chiudi">×</button><img src="img/carte/${c.id}_big.webp" alt="${c.name}"><div><h3>${c.name}</h3><div class="badges">${badges.join("")}</div>${corpo}<p style="color:var(--ink-soft);font-size:.9rem;margin-top:14px">Carta n. ${String(c.num).padStart(3, "0")} · espansione Genesi</p></div>`;
  m.classList.add("open");
  m.querySelector(".x").focus();
}

function chiudi() { document.getElementById("modal").classList.remove("open"); }

document.addEventListener("DOMContentLoaded", () => {
  chip("f-tipo", TIPI, "tipo");
  chip("f-rarita", RARITA, "rarita");
  chip("f-ruolo", RUOLI, "ruolo");
  document.getElementById("cerca").addEventListener("input", (e) => { filtro.testo = e.target.value; disegna(); });
  grid.addEventListener("click", (e) => { const t = e.target.closest(".tile"); if (t) dettaglio(t.dataset.id); });
  const m = document.getElementById("modal");
  m.addEventListener("click", (e) => { if (e.target === m || e.target.closest(".x")) chiudi(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") chiudi(); });
  const h = location.hash.replace("#", "");
  disegna();
  if (h && CARTE.some((c) => c.id === h)) dettaglio(h);
});
