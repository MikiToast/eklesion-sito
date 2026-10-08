# Eklesion - sito

Sito web di **Eklesion**, il gioco di carte a tema oratorio per Android.

Pagine: presentazione (`index.html`), regole (`come-si-gioca.html`), carte con filtri (`carte.html`), modalità di gioco (`modalita.html`), download (`scarica.html`) e informativa sulla privacy (`privacy.html`).

È un sito statico (HTML, CSS e un po' di JavaScript, senza librerie né servizi esterni): basta servire la cartella con un qualunque server web. In locale:

```
python -m http.server 8099
```

e poi `http://localhost:8099/`.

Il file dell'app per la pagina «Scarica» non è in questo repository: va messo accanto a `index.html` con il nome indicato in `js/site.js`.

## Crediti
- Font: [Lilita One](https://fonts.google.com/specimen/Lilita+One) e [Nunito](https://fonts.google.com/specimen/Nunito), licenza SIL Open Font (`fonts/OFL.txt`).
- Testi, illustrazioni e carte: © 2026 Eklesion. Tutti i diritti riservati.
