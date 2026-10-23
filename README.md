# PAC PAC 4.5.0 - Campaign & Level Platform

Release completa basata sulla 3.3.2, con contratto storico 2.5.1, campagna JSON, Arcade infinito, Level Studio e validazione automatica.

## Splash screen adattiva
- Desktop e PC usano `assets/splash/pac-pac-journey-desktop.webp`.
- Smartphone in verticale usano `assets/splash/pac-pac-journey-mobile.webp`.
- Le animazioni rispettano `prefers-reduced-motion`.
- Tutti i riferimenti sono relativi e compatibili con GitHub Pages.

## Manuale
- Dal menu principale selezionare **Manuale di gioco**.
- La guida integrata include ricerca e indice.
- `manual.html` offre una pagina autonoma stampabile e collegabile direttamente da GitHub Pages.

## Avvio
Il caricamento JSON richiede un server locale. Dalla cartella del repository:

```bash
python3 -m http.server 8080
```

Aprire `http://localhost:8080`. Per WebRTC e API native usare localhost o HTTPS.

## Story Game: Ralph racconta - Il compagno rapito
Il giocatore sceglie Giovanni o Bruno; l'altro viene rapito. Otto labirinti unici seguono la ricerca dalla Transilvania a Roma. La modalità introduce acqua invalicabile, fiumi, fiaccole, trappole, muri mobili, maze a spirale, isole, rotori, trittici, anelli e croci fluviali.

Giovanni raccoglie Power Birra; Bruno raccoglie Power Stella. Entrambe attivano Power, velocità al 120%, munizioni infinite e raffica per 10 secondi. I racconti sono ridotti a scene brevi e non ripetitive: Ralph porta avanti il mistero del rapimento e rivela il piano di Dracula solo nel quinto atto.

Dettagli tecnici e narrativi sono disponibili in `README-STORY-450.md`.

## Story Game: Castelli, Fantasmi e Strade Romane
Ralph, cane narratore in pixel art, presenta la storia tramite fumetti. I primi quattro capitoli si svolgono nei castelli della Transilvania, controllati dalle antagoniste originali Vespera, Glacia e Morvella. Il quinto capitolo è lo scontro con Dracula. Trastevere, quartiere di Roma, apre l'arco urbano; il Colosseo introduce sei fantasmi e portali instabili; il Vaticano ospita il boss immaginario Custode della Cupola.

Nei capitoli boss, una volta terminate le palline si apre una seconda fase: le sfere-sigillo riattivano il Power e ogni fantasma sconfitto riduce la salute del boss. Ralph commenta introduzioni, missioni e conclusioni con fumetti.

## Story Game: Le Strade del Legame
Giovanni, muratore originario della Romania, e Bruno, romano, già steward e amante dell’arte e della vita mondana, sono protagonisti di un viaggio in otto capitoli. I primi cinque livelli attraversano SighiÈ™oara, BraÈ™ov, i Carpazi, il Castello di Bran e Sibiu. Gli ultimi capitoli sono ambientati a Trastevere, al Colosseo e al Vaticano. Giovanni è il personaggio controllato; Bruno è il compagno visibile che segue il percorso e alimenta la meccanica **Legame**.

Il Legame aumenta raccogliendo sfere, avanzando insieme e sconfiggendo fantasmi. Al 100% attiva un bonus condiviso: Power temporaneo e due munizioni. Capitoli, record di Legame e avanzamento sono salvati in `pacpac-story-450`.

## Modalità
- **Campagna / Normale:** 20 livelli progettati, progressione sequenziale, introduzione graduale delle meccaniche e stelle.
- **Arcade infinito:** generazione procedurale deterministica, tre vite, combo, near miss, ghost chain, record e medaglie.
- **Sfida giornaliera:** seed giornaliero condiviso e metriche salvate solo in locale.
- **Caccia inversa:** il giocatore caccia e i fantasmi fuggono.
- **Multiplayer:** cooperativo o versus, con pairing manuale o signaling Worker.

## File dei livelli
- `levels/manifest.json`: ordine, nomi, sblocchi e percorso dei livelli.
- `levels/campaign/level-001.json` ... `level-020.json`: campagna ufficiale.
- `levels/community/`: livelli esportati dall'editor.
- `levels/arcade/`: eventuali preset Arcade; l'Arcade infinito resta procedurale.

## Aggiungere un livello facilmente
1. Aprire **Level Studio** dal gioco.
2. Creare, disegnare e validare il livello.
3. Usare **Prova**.
4. Premere **Scarica JSON**.
5. Copiare il file in `levels/community/` o `levels/campaign/`.
6. Aggiungere nel `levels/manifest.json` una voce:

```json
{
  "id": "level-021",
  "order": 21,
  "name": "Nuovo livello",
  "file": "campaign/level-021.json",
  "unlockAfter": "level-020",
  "mechanics": ["pellets", "fire-door", "portals"]
}
```

7. Eseguire i test.

## Schema livello
Ogni livello usa `schemaVersion: 2` e contiene `map`, `entities`, `settings` e `objectives`. Le entità supportate sono porte FIRE, porte automatiche, portali A/B, spawn giocatore e spawn fantasmi; la mappa supporta palline, Power Sphere, munizioni, muri e pavimento.

## Miglioramenti di gameplay 4.0
- FIRE apre prioritariamente la porta frontale e non spreca il colpo.
- Messaggio per munizioni insufficienti.
- Porte automatiche con preavviso e protezione di occupazione.
- Portali con accoppiamento, feedback e cooldown.
- Contatore raccoglibili e segnalazione ultime cinque palline.
- Combo con avanzamento verso il moltiplicatore successivo.
- Near miss valido solo dopo ingresso, uscita e spostamento minimo.
- Progressione a più dimensioni: munizioni, potere, porte, portali, numero fantasmi e difficoltà.
- Metriche esclusivamente locali per tempo, punteggio, vite, munizioni e combo.

## Test

```bash
for f in tests/*.test.js; do node "$f" || exit 1; done
```
