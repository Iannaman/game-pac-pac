# PAC PAC 2.2.0 test report

## Superati
- Sintassi JavaScript e presenza degli entrypoint stanza.
- Creazione stanza con codice di 6 caratteri tramite signaling locale simulato.
- Ingresso Bruno e scambio automatico offer/answer WebRTC.
- Apertura reale del data channel tra due contesti Chromium separati.
- Avvio round e ricezione input guest da parte dell'host.
- Prefill `?room=ABC234` e fallback manuale avanzato.
- Nessun errore JavaScript pageerror nel flusso testato.

## Non eseguiti
- Distribuzione reale del Worker Cloudflare e KV.
- TURN, NAT restrittivi, reti mobili o reti differenti.
- Due smartphone fisici e Safari/iOS.
- Deploy remoto GitHub Pages.

La funzionalita codice stanza richiede configurazione e deploy separato del signaling. Senza, resta disponibile il pairing manuale.
