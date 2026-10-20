# PAC PAC 2.0.0 - Multiplayer beta e livelli

Pacchetto completo basato sulla 1.8.1. Le funzioni single-player e gli asset precedenti sono conservati.
Nessun deploy remoto effettuato. I tre file audio personali restano da aggiungere in audio/.

## Due dispositivi
1. Pubblica il pacchetto con il workflow Pages incluso e apri lo stesso sito su entrambi i dispositivi.
2. Prima della connessione, configura su ciascuno i controlli touch e l'orientamento nelle Impostazioni.
3. Dal menu apri Multiplayer su entrambi.
4. Giovanni sceglie Cooperativa o Contro e un livello sbloccato, poi genera l'invito.
5. Copia e invia privatamente il codice a Bruno.
6. Bruno incolla l'invito nel campo Codice ricevuto e preme Importa invito e genera risposta.
7. Bruno invia la risposta a Giovanni, che la incolla e preme Importa risposta.
8. Quando il canale e connesso, Giovanni preme Avvia partita.

Il codice e una descrizione di connessione, non un breve codice stanza. Non c'e un servizio di matchmaking.
Giovanni controlla la simulazione; Bruno invia solo direzione e sparo. Lo stato viene inviato a 15 aggiornamenti/secondo.
Il movimento del guest non ha predizione/interpolazione: latenza e fluidita dipendono dalla rete.
Non e una soluzione anti-cheat per tornei: l'host e attendibile per definizione.

### Rete
WebRTC con scambio manuale SDP. Nessuna dipendenza esterna e nessun server di gioco.
Per il primo tentativo usa la stessa rete Wi-Fi, senza isolamento client.
La configurazione ICE iniziale e vuota. Non e garantita la connessione su reti diverse o NAT restrittivi.
Il pannello Rete accetta un array JSON di server ICE: puoi usare i tuoi STUN/TURN.
Non e fornito un relay TURN o un servizio pubblico preconfigurato. Eventuali credenziali TURN restano in memoria.
Usa HTTPS (Pages) o localhost. I codici possono contenere indirizzi e dettagli di rete: condividili solo con il partner.
Nessuna telecamera, microfono o account richiesto dal codice del gioco.
In caso di disconnessione la partita si ferma: occorre creare una nuova connessione.
Se il dispositivo host sospende il browser, il guest puo perdere la connessione. Non chiudere o sospendere la pagina.

### Regole
- Coop: stesso labirinto, raccolta condivisa, 6 vite comuni. Vince la squadra raccogliendo tutte le sfere.
- Contro: gara a punti di 180 secondi oppure fino all'esaurimento delle sfere. Vince il punteggio maggiore, possibile pareggio.
- Contro: proiettile sull'avversario = -50 punti e ritorno alla partenza con breve stordimento. Fantasma = -100 punti.
- Coop: niente fuoco amico. I proiettili colpiscono i fantasmi in entrambe le modalita.
- Power condiviso, munizioni e punti individuali. Invulnerabilita temporanea al respawn.
- Pausa da entrambi i dispositivi, ripresa solo dall'host. Impostazioni da configurare prima del collegamento.
- Multiplayer non modifica i record single-player.
- Ogni round usa un livello. Dopo il completamento l'host puo avviare il successivo, senza rifare la connessione.

## Livelli sbloccati
Nuova galleria con anteprima del labirinto, stato completato/sbloccato/bloccato e avvio diretto.
Livello 1 disponibile inizialmente; completare un livello sblocca il successivo.
Il salvataggio e locale al browser, non e un account cloud. Il completamento multiplayer viene salvato su entrambi i browser connessi.
I progressi precedenti non possono essere ricostruiti dai vecchi record, che non memorizzavano i livelli completati.
Non cancellare i dati del sito per conservare i progressi.

## Audio e asset
Conservati audio/smoot-criminal.mp3 in loop all'avvio, audio/hee-hee.mp3 solo su power e audio/gun.wav per sparo.
Aggiungi file autorizzati: nessun file sonoro commerciale e incluso.
La musica e gli effetti vengono eseguiti localmente su ogni dispositivo; non sono trasmessi come audio dalla rete.
Le preferenze grafiche e di accessibilita sono locali; difficolta e fantasmini sono scelti dall'host.

## Verifiche e limiti
Vedi TEST_REPORT.md. Multiplayer beta: i test in browser non sostituiscono prove su due smartphone fisici o su reti diverse.

## Test ripetibili
`node tests/check.cjs` per la sintassi (eseguito anche nel workflow).
Test browser opzionale: Python 3, Playwright e Chromium installati, poi `python tests/multiplayer_browser.py`. CHROMIUM_PATH puo indicare un eseguibile Chromium locale.
