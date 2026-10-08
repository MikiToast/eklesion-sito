// Barra in alto, pie' di pagina e piccole animazioni, uguali in tutte le pagine.
const APK = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion.apk";      // sempre l'ultima versione (vedi la release del repository)
const SETUP = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion-Setup.exe";
const WINDOWS = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion-Windows.zip";
const VERSIONE = "0.35.1";
const PAGINE = [
  ["index.html", "Il gioco"],
  ["come-si-gioca.html", "Come si gioca"],
  ["carte.html", "Le carte"],
  ["modalita.html", "Modalità"],
  ["beta.html", "Beta tester"],
  ["feedback.html", "Feedback"],
];

function inietta() {
  const corrente = location.pathname.split("/").pop() || "index.html";
  const nav = document.getElementById("nav");
  if (nav) {
    nav.outerHTML = `
<header class="nav"><div class="wrap">
  <a class="brand" href="index.html"><img src="img/emblema.png" alt="" width="40" height="40">EKLESION</a>
  <button class="burger" aria-label="Menu" onclick="document.getElementById('menu').classList.toggle('open')">☰</button>
  <ul id="menu">
    ${PAGINE.map(([h, t]) => `<li><a class="l ${h === corrente ? "on" : ""}" href="${h}">${t}</a></li>`).join("")}
    <li><a class="btn sm" href="scarica.html">Scarica</a></li>
  </ul>
</div></header>`;
  }
  const foot = document.getElementById("foot");
  if (foot) {
    foot.outerHTML = `
<footer class="foot"><div class="wrap">
  <a class="brand" href="index.html"><img src="img/emblema.png" alt="" width="32" height="32">EKLESION</a>
  <div>Il gioco di carte a tema oratorio · versione beta ${VERSIONE}<br>© 2026 Eklesion. Tutti i diritti riservati.<br>Le illustrazioni sono realizzate con l'aiuto dell'intelligenza artificiale.</div>
  <div><a href="come-si-gioca.html">Regole</a> · <a href="carte.html">Carte</a> · <a href="modalita.html">Modalità</a> · <a href="scarica.html">Scarica</a> · <a href="beta.html">Beta tester</a> · <a href="feedback.html">Feedback</a> · <a href="privacy.html">Privacy</a> · <a href="mailto:info@eklesion.app">Contatti</a><br>Seguici su <a href="https://www.instagram.com/eklesion.app/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.tiktok.com/@eklesion.app" target="_blank" rel="noopener">TikTok</a></div>
</div></footer>`;
  }
  document.querySelectorAll("[data-apk]").forEach((a) => { a.href = APK; });
  document.querySelectorAll("[data-win]").forEach((a) => { a.href = WINDOWS; });
  document.querySelectorAll("[data-setup]").forEach((a) => { a.href = SETUP; });
  document.querySelectorAll("[data-versione]").forEach((e) => { e.textContent = VERSIONE; });
}

function animazioni() {
  const els = document.querySelectorAll(".rise");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((voci) => voci.forEach((v) => { if (v.isIntersecting) { v.target.classList.add("in"); io.unobserve(v.target); } }), { threshold: .12 });
  els.forEach((e) => io.observe(e));
}

document.addEventListener("DOMContentLoaded", () => { inietta(); animazioni(); });
