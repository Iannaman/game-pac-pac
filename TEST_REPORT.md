# Test report PAC PAC 2.0.1

## Superati
- Sintassi JavaScript e presenza delle protezioni 2.0.1.
- Connessione WebRTC reale tra due contesti Chromium separati.
- Heartbeat ping/pong e aggiornamento del tempo dell’ultimo messaggio.
- Rifiuto di messaggi con tipo non previsto o input malformato.
- Contabilizzazione dei messaggi scartati quando il buffer supera 100 KB.
- 1.000 aggiornamenti fissi consecutivi, rendering, HUD, pausa, menu e galleria livelli.
- Diagnostica locale con `stabilityDiagnostics()`.
- Nessun errore JavaScript `pageerror` nel test browser.

## Non eseguiti
- Due smartphone fisici, Safari/iOS, rete mobile, reti distinte, NAT restrittivi o TURN.
- Riproduzione dei file audio reali, che non sono inclusi.
- Deploy remoto GitHub Pages.

Il test browser incluso richiede Python, Playwright e Chromium. Il workflow Pages esegue solo il controllo Node senza dipendenze.
