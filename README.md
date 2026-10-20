# PAC PAC 2.1.0 - Prestazioni

Release completa basata sulla 2.0.1. Regole, progressione, multiplayer e grafica restano compatibili.

## Ottimizzazioni
- Tre profili grafici: Prestazioni (30 FPS, DPR 1), Bilanciato (45 FPS, DPR 1,5, predefinito), Qualità (60 FPS, DPR 2).
- Simulazione invariata a 120 Hz: il profilo limita solo rendering e densità delle particelle.
- Cache LRU di 12 labirinti procedurali, restituiti sempre come copie indipendenti.
- Cache per massimo 32 mappe di distanza BFS del livello corrente; invalidazione a ogni cambio mappa.
- Snapshot multiplayer ridotti da 15 a 10 invii al secondo; heartbeat della 2.0.1 invariato.
- Conteggio locale di frame, cache e traffico disponibile con `stabilityDiagnostics()`.
- Effetto shake disabilitato nel profilo Prestazioni.

## Diagnostica
Apri la console ed esegui `stabilityDiagnostics()`. La sezione performance mostra cache hit/miss, frame renderizzati/scartati, profilo, dimensione cache e byte/messaggi WebRTC inviati.

## Audio e deploy
Aggiungi nella cartella audio: smoot-criminal.mp3, hee-hee.mp3 e gun.wav. I file non sono inclusi. Il workflow GitHub Pages esegue il controllo JavaScript e pubblica audio/.

## Limiti
Il multiplayer resta beta, senza signaling server o TURN. Testato in Chromium automatizzato; non testato su due smartphone fisici, Safari/iOS o reti distinte. Nessun deploy remoto effettuato.
