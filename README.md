# PAC PAC 2.0.1 - Stabilizzazione

Release tecnica completa. Regole, grafica, multiplayer e progressione della 2.0.0 restano invariati.

## Stabilita
- Simulazione fissa 120 Hz, massimo 8 step per frame, protezione anti spiral-of-death.
- Rendering sospeso a pagina nascosta e accumulatore azzerato al rientro.
- Heartbeat 2 s; avviso 4,5 s; pausa 8 s; disconnessione 15 s senza messaggi.
- RTT diagnostico, massimo 90 messaggi/s, backpressure sopra 100 KB.
- Pausa automatica dell'host quando la pagina passa in background; ripresa manuale.
- Tipi di messaggio e snapshot validati prima dell'uso.
- Verifica audio non bloccante; file assenti non fermano il gioco.
- Progressi locali ripuliti da valori corrotti, duplicati o fuori intervallo.

Apri la console e usa `stabilityDiagnostics()` per visualizzare step scartati, RTT, silenzio di rete, backpressure e stato degli audio.

## File audio
Aggiungi nella cartella `audio`: `smoot-criminal.mp3`, `hee-hee.mp3`, `gun.wav`. Non sono inclusi.

## Limiti
Multiplayer ancora beta, senza server di signaling o TURN. Non testato in questa consegna su smartphone fisici, Safari/iOS, reti mobili o reti differenti. Nessun deploy remoto effettuato.
