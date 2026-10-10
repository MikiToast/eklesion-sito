// Barra in alto, pie' di pagina e piccole animazioni, uguali in tutte le pagine.
const APK = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion.apk";      // sempre l'ultima versione (vedi la release del repository)
const SETUP = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion-Setup.exe";
const WINDOWS = "https://github.com/MikiToast/eklesion-sito/releases/latest/download/Eklesion-Windows.zip";
const VERSIONE = "0.38.13";
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
    <li class="soc"><a class="soc-ico" href="https://www.instagram.com/eklesion.app/" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none"/></svg></a><a class="soc-ico" href="https://www.tiktok.com/@eklesion.app" target="_blank" rel="noopener" aria-label="TikTok" title="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.4 1.9 4 4.4 4.2v3.1c-1.6.1-3-.4-4.4-1.3v6.2c0 3.4-2.6 5.8-5.8 5.8S5 18.6 5 15.4s2.8-5.9 6.3-5.7v3.2c-1.6-.3-3 .8-3 2.5s1.2 2.6 2.5 2.6c1.6 0 2.6-1.1 2.6-2.8V3h3.2z"/></svg></a><a class="soc-ico" href="https://discord.gg/8qB5UhDKrJ" target="_blank" rel="noopener" aria-label="Discord" title="Discord"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg></a></li>
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
  <div><a href="come-si-gioca.html">Regole</a> · <a href="carte.html">Carte</a> · <a href="modalita.html">Modalità</a> · <a href="scarica.html">Scarica</a> · <a href="beta.html">Beta tester</a> · <a href="feedback.html">Feedback</a> · <a href="novita.html">Novità</a> · <a href="privacy.html">Privacy</a> · <a href="termini.html">Termini d'uso</a> · <a href="genitori.html">Per i genitori</a> · <a href="contatti.html">Contatti</a> · <a href="mailto:info@eklesion.app">info@eklesion.app</a><br>Seguici su <a href="https://www.instagram.com/eklesion.app/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.tiktok.com/@eklesion.app" target="_blank" rel="noopener">TikTok</a> · <a href="https://discord.gg/8qB5UhDKrJ" target="_blank" rel="noopener">Discord</a></div>
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
