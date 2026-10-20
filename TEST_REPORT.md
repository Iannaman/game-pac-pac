# Verifiche PAC PAC 2.0.0

## Eseguite
- Connessione WebRTC reale tra due contesti Chromium separati sullo stesso computer, serviti da HTTP localhost. Scambio invito/risposta tramite i controlli della pagina.
- Input Bruno inviato all'host, movimento simulato e snapshot restituito al guest.
- Sparo del guest, decremento munizioni e replica.
- Pausa richiesta dal guest, ripresa host e replica.
- Risultato cooperativo, progressi salvati in entrambi i contesti e avvio del livello successivo senza riconnessione.
- Penalita competitiva, scadenza timer e vincitore replicato.
- Disconnessione con schermata di errore.
- Raccolta condivisa senza doppio conteggio, completamento con ultima sfera power, sblocco livello.
- Vite cooperative e collisione effettiva proiettile-avversario.
- Galleria livelli: blocco iniziale, sblocco, completamento single-player, persistenza dopo reload.
- Pannelli livelli e multiplayer su viewport 320x568, 390x844, 568x320, 844x390, 1024x768, senza overflow orizzontale.
- Controlli single-player, pausa e accesso al tutorial.
- Nessun errore JavaScript pageerror rilevato nei test.

Le prove delle regole usano stati controllati (fantasmi disabilitati in alcune fasi, timer e punti impostati per verificare gli esiti), non una partita completa giocata manualmente.

## Non eseguite
- Due smartphone fisici, Safari/iOS, reti mobili o reti distinte.
- Relay TURN, NAT restrittivi, prestazioni con latenza elevata.
- Riproduzione dei file audio personali, non inclusi.
- Deploy remoto GitHub Pages.

Multiplayer beta, non servizio universale di matchmaking. Nessun relay o server di segnalazione fornito.
