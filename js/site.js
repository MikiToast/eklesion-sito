// Barra in alto, pie' di pagina e piccole animazioni, uguali in tutte le pagine.
const APK = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion.apk";      // sempre l'ultima versione (vedi la release del repository)
const SETUP = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion-Setup.exe";
const WINDOWS = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion-Windows.zip";
const VERSIONE = "0.35.2";
const PAGINE = [
  ["index.html", "Il gioco"],
  ["come-si-gioca.html", "Come si gioca"],
  ["carte.html", "Le carte"],
  ["modalita.html", "Modalità"],
  ["beta.html", "Beta tester"],
  ["feedback.html", "Feedback"],
  ["contatti.html", "Contatti"],
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
    <li class="soc"><a class="soc-ico" href="https://www.instagram.com/eklesion.app/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg></a><a class="soc-ico" href="https://www.tiktok.com/@eklesion.app" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.4 1.9 4 4.4 4.2v3.1c-1.6.1-3-.4-4.4-1.3v6.2c0 3.4-2.6 5.8-5.8 5.8S5 18.6 5 15.4s2.8-5.9 6.3-5.7v3.2c-1.6-.3-3 .8-3 2.5s1.2 2.6 2.5 2.6c1.6 0 2.6-1.1 2.6-2.8V3h3.2z"/></svg></a></li>
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
  <div><a href="come-si-gioca.html">Regole</a> · <a href="carte.html">Carte</a> · <a href="modalita.html">Modalità</a> · <a href="scarica.html">Scarica</a> · <a href="beta.html">Beta tester</a> · <a href="feedback.html">Feedback</a> · <a href="novita.html">Novità</a> · <a href="privacy.html">Privacy</a> · <a href="contatti.html">Contatti</a> · <a href="mailto:info@eklesion.app">info@eklesion.app</a><br>Seguici su <a href="https://www.instagram.com/eklesion.app/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.tiktok.com/@eklesion.app" target="_blank" rel="noopener">TikTok</a></div>
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
