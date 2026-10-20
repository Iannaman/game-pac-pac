# PAC PAC 2.2.0 - Multiplayer più semplice

## Nuovo accesso con codice stanza
Dopo aver configurato il signaling, Giovanni crea una stanza e condivide un codice di 6 caratteri. Bruno inserisce il codice; offer e answer WebRTC vengono scambiati automaticamente. Giovanni avvia la partita quando Bruno risulta connesso.

Il pacchetto include un Worker opzionale in `signaling-worker/`. Il Worker conserva offer/answer per 10 minuti in KV, non riceve lo stato della partita e non sostituisce TURN. `multiplayer-config.js` contiene URL signaling e configurazione ICE. Con URL vuoto il gioco mostra il fallback manuale della 2.1.0.

## Limiti e sicurezza
- Serve distribuire separatamente il Worker e configurare `multiplayer-config.js`; GitHub Pages non esegue il backend.
- Il codice stanza non garantisce connettività attraverso NAT o firewall restrittivi. In tali casi configura un tuo TURN.
- Non inserire credenziali TURN a lunga durata nel repository pubblico.
- Stanze di 6 caratteri, alfabeto senza caratteri ambigui, scadenza 10 minuti, primo Bruno ammesso.
- Condivisione tramite Web Share API quando disponibile, altrimenti copia negli appunti.
- Il multiplayer resta peer-to-peer e host-authoritative; nessun account o matchmaking pubblico.

## Prestazioni e stabilità
Conservate tutte le ottimizzazioni 2.1.0 e le protezioni 2.0.1. Snapshot a 10 Hz, heartbeat, timeout, profili grafici, cache livelli/BFS e diagnostica rimangono attivi.

## Audio
Aggiungi in `audio/`: smoot-criminal.mp3, hee-hee.mp3 e gun.wav. Non sono inclusi.

Nessun Worker o deploy GitHub remoto è stato pubblicato da questa consegna. I test della stanza automatica usano un server locale simulato; reti reali, TURN e smartphone fisici restano da verificare.
