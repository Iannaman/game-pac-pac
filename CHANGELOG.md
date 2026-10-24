# Changelog
## 4.9.6 - layout smartphone senza scroll di gioco
- HUD, maze, D-pad, FIRE e stato contenuti nel primo viewport mobile.
- Maze esteso da lato a lato fino a 100vw.
- Dimensione canvas bilanciata tra larghezza disponibile e spazio verticale residuo.
- Solo il player musicale resta sotto la piega e richiede lo scroll.
- Fallback compatto per smartphone con altezza inferiore a 700 px.
- Desktop e gameplay invariati.
## 4.9.5 - player playlist musicale
- Aggiunti display e comandi precedente, stop e successivo.
- Posizione fissa in basso a destra su desktop e in fondo al flusso su smartphone.
- smoot-criminal.mp3 resta il loop iniziale fino al primo comando.
- La modalitÃ  playlist riproduce in sequenza i brani del manifest e non torna al loop predefinito.
- Esclusi automaticamente tutti gli asset audio riservati agli effetti.
- Aggiunto generatore del manifest dalla cartella audio.
## 4.9.4 - collaudo smartphone, loading e report esportabili
- Simulazione smartphone su viewport 320, 360, 390 e 430 px.
- Aggiunto indicatore caricamento accessibile allâ€™avvio e durante le anteprime.
- Esportati report test in Markdown, JSON e HTML.
- Test livelli 1-100 preservato e incluso.
## 4.9.3 - verifica livelli, reset filtro e anteprime mobile
- Verificato lâ€™avvio e la validitÃ  topologica dei livelli 1-100.
- Verificati spawn giocatore, base fantasmi e dieci cicli completi delle famiglie.
- Aggiunto pulsante Azzera filtro con ripristino su Tutte.
- Anteprime adattive da 320 px, con griglia e dimensioni fluide.
- Gameplay, audio, simboli e progressione invariati.
## 4.9.2 - hotfix avvio e filtri famiglie
- Corretto il crash Cannot read properties of undefined durante la generazione dei labirinti.
- Aggiunti controlli di forma mappa e trasformazioni su copia indipendente.
- Anteprime protette contro mappe incomplete.
- Aggiunto filtro per famiglia e anteprime ingrandite.
- Simboli, audio, gameplay e progressione invariati.
## 4.9.1 - identitÃ  famiglie, anteprime e bilanciamento iniziale
- Palette e pattern grafici dedicati per tutte le dieci famiglie.
- Anteprime reali dei labirinti nellâ€™archivio livelli.
- Fantasmi piÃ¹ lenti e rilascio piÃ¹ dilazionato nei primi cinque livelli.
- Curva progressiva invariata dai livelli successivi, con limite massimo.
- Validazione topologica e fallback sicuro preservati.
- Tutte le altre funzioni restano invariate.
## 4.9.0 - dieci famiglie di labirinti
- Introdotte dieci famiglie topologiche a rotazione su cicli di dieci livelli.
- Mostrati famiglia e grado di difficoltÃ  nellâ€™HUD e nellâ€™archivio livelli.
- Aumento graduale della velocitÃ  dei fantasmi, limitato a +18%.
- Ogni trasformazione Ã¨ validata; in caso di anomalia viene usata la mappa sicura originale.
- Story, Campagna progettata, audio, simboli, record e condivisione restano invariati.
## 4.8.9 - icona pulsante livelli e record
- Aggiunta icona grafico record al pulsante Livelli, record e voti.
- Icona responsive, luminosa e accessibile.
- Nessunâ€™altra funzione modificata.
## 4.8.8 - pulsante archivio visibile
- Spostato il pulsante Livelli, record e voti nella toolbar visibile del menu moderno.
- Mantenuto il fallback per il menu classico.
- Aggiunto recupero automatico dopo la decorazione asincrona del menu.
- Nessunâ€™altra funzione modificata.
## 4.8.7 - archivio livelli e card cumulativa
- Aggiunto menu livelli sbloccati con record e voto per livello.
- Consentito avvio diretto da qualsiasi livello sbloccato.
- Cheat code PACPACTUTTI per sbloccare tutti i livelli.
- Card firmata cumulativa con record totale, voti per livello e voto medio complessivo.
- Conservate tutte le altre informazioni della card.
- Audio, simboli e gameplay 4.8.6 invariati.
## 4.8.6 - audio locale e Campaign UI
- Impedito definitivamente il routing MediaElementAudioSource su protocollo file.
- smoot-criminal.mp3 resta in riproduzione diretta quando index.html Ã¨ aperto localmente.
- Corretto il riferimento nullo modeBack in campaign-ui.js.
- Cache bust mirato ai soli due moduli corretti.
- Simboli, caratteri e gameplay invariati.
## 4.8.5 - diagnostica audio console
- Aggiunto log strutturato degli eventi audio predefiniti.
- Registrati caricamento, richiesta play, avvio, rifiuto, errore media e collegamento visualizer.
- Esposta la funzione PacPacAudioDiagnostics() per lo stato completo.
- Nessuna modifica al comportamento audio, ai simboli o al gameplay.
## 4.8.4 - riproduzione audio predefinito
- Avvio di smoot-criminal.mp3 prima del collegamento al visualizer.
- In modalitÃ  file locale la musica usa la riproduzione diretta per evitare il silenzio Web Audio.
- Riselezionando Audio predefinito vengono azzerati gli stati di errore precedenti.
- Tutto il resto della 4.8.3 resta invariato.
## 4.8.3 - affidabilitÃ  completa audio
- La musica di progetto passa automaticamente alla traccia sintetizzata se il file MP3 manca o non Ã¨ riproducibile.
- Il file musicale personale passa alla stessa traccia di fallback in caso di errore.
- Sparo e Power Sphere hanno fallback sonori distinti quando i file audio sono assenti.
- Resi sicuri i richiami audio di morte e Story contro API obsolete in cache.
- Aggiunto cache bust mirato ai soli moduli audio.
- Simboli, caratteri, boss, visualizer e gameplay restano invariati.
## 4.8.2 - contratto audio visualizer compatibile
- Reso sicuro il richiamo alle API del visualizer tramite verifica del tipo funzione.
- Eliminato il blocco della modalitÃ  Story quando il browser conserva una precedente versione del modulo.
- Aggiunto cache bust mirato al solo modulo visualizer.
- Conservato il collegamento allâ€™audio reale di sottofondo.
- Simboli, caratteri, boss, gameplay e configurazioni restano invariati.
## 4.8.1 - simboli UTF-8 e boss sempre visibili
- Rimossi tutti i residui di doppia codifica UTF-8 dai file testuali.
- Ripristinati accenti, frecce, icone, emoji e simboli dellâ€™interfaccia.
- Aggiunto rendering boss di fallback quando un PNG manca o non viene caricato.
- Il fallback Ã¨ attivo sia nel castello sia durante la caccia finale.
- Visualizer, sfondo menu e gameplay 4.8.0 restano invariati.
## 4.8.0 - visualizer audio reale e sfondo menu moderno
- Collegato il visualizer al file musicale di progetto e al file musicale personale tramite MediaElementAudioSourceNode.
- Conservato il collegamento alla musica arcade sintetizzata tramite musicGain.
- Il visualizer usa un unico AnalyserNode e non altera volume o uscita audio.
- Aggiunte palline luminose fluttuanti esclusivamente nel main menu.
- Gameplay e ogni altra funzione della 4.7.9 restano invariati.
## 4.7.9 - correzione simboli e codifica UTF-8
- Ripristinati accenti, apostrofi tipografici, frecce, icone, emoji e simboli dei controlli.
- Corretti i nomi SighiÈ™oara e BraÈ™ov.
- Uniformata la codifica testuale dei moduli a UTF-8.
- Visualizer e gameplay 4.7.8 invariati.
## 4.7.8 - audio visualizer futuristico
- Aggiunto visualizer audio futuristico sullo sfondo.
- Le barre reagiscono alla musica tramite Web Audio Analyser.
- In assenza di segnale audio resta attiva una delicata animazione ambientale.
- Il visualizer non intercetta input e rispetta `prefers-reduced-motion`.
- Gameplay e funzionalita della 4.7.7 restano invariati.
## 4.7.7 - completabilita labirinti, rientro fantasmi e audio morte
- Aggiunta riparazione runtime della raggiungibilita per tutti gli otto labirinti della Storia.
- Corretto il labirinto 2 e impedita la generazione di aree obbligatorie isolate.
- Il respawn dei fantasmi avviene nella base del castello, mai sulla posizione del giocatore.
- Aggiunto recupero anti-blocco nel ritorno alla base anche in Arcade.
- Alla morte viene riprodotto `audio/gameover.mp3`, con fallback sonoro non bloccante.
- Tutto il resto della 4.7.6 resta invariato.

## 4.7.6 - super poteri nella caccia al boss
- Ridotta la velocitÃ  del boss a valori raggiungibili, mantenendo lâ€™IA evasiva.
- Durante la sola caccia il personaggio corre il 42% piÃ¹ veloce.
- FIRE attiva lo Scatto del Legame per 0,62 secondi.
- Lo Scatto genera un impulso che rallenta il boss per 2,6 secondi.
- Il potere si ricarica in 1,65 secondi e non consuma munizioni.
- Durante la caccia il personaggio Ã¨ protetto dai fantasmi.
- Aggiunti aura e indicatore della ricarica del super potere.
- Tutto il resto della 4.7.5 Ã¨ invariato.


## 4.7.5 - insegna G&B, boss evasivo e audio ducking
- Rimossi i riferimenti di versione obsoleti dal menu principale.
- Il menu mostra unâ€™unica versione corrente: v4.7.5.
- Aggiunta la grande insegna `PAC PAC G&B`.
- Il boss usa una mappa BFS delle distanze reali dal giocatore.
- Il boss valuta spazio disponibile, uscite, continuitÃ  e rischio di vicolo cieco.
- Il boss evita inversioni inutili e accelera quando viene avvicinato.
- Durante `grido-battaglia.mp3` la musica di sottofondo scende al 60%, cioÃ¨ del 40%.
- Il volume originale viene ripristinato alla fine o in caso di errore audio.
- Tutto il resto della 4.7.4 Ã¨ invariato.


## 4.7.4 - caccia al boss nella Storia
- Rimossi palline, Power Sphere, Power Birra e Power Stella dallâ€™area visiva del castello.
- Ricalcolato il numero dei collezionabili dopo la bonifica del castello.
- La raccolta dellâ€™ultima sfera non completa piÃ¹ immediatamente lâ€™atto narrativo.
- Il boss esce dal castello e fugge lungo le celle percorribili del maze.
- Il protagonista deve raggiungere fisicamente il boss per concludere lâ€™atto.
- `grido-battaglia.mp3` parte allâ€™inizio della caccia al boss.
- `missione-compiuta.mp3` parte soltanto alla cattura e conclusione effettiva.
- Le modalitÃ  non narrative conservano il completamento originale.
- Bonificati i residui di caratteri speciali corrotti.
- Tutto il resto della 4.7.3 Ã¨ invariato.


## 4.7.3 - menu dinamico e cue audio
- Aggiunto sfondo dinamico al launcher con orbite luminose e particelle.
- Aggiunte animazioni di ingresso, hover, selezione personaggio e risalto della Storia.
- Supportato `prefers-reduced-motion`.
- Selezione Giovanni: tenta `audio/giovanni-start.mp3`; beep se assente o non riproducibile.
- Selezione Bruno: tenta `audio/bruno-start.mp3`; beep se assente o non riproducibile.
- Selezione PAC PAC: tenta `audio/pac-pac-start.mp3`; beep se assente o non riproducibile.
- Completamento normale: tenta `audio/missione-compiuta.mp3`; beep di completamento come fallback.
- Completamento Storia: tenta `audio/grido-battaglia.mp3`; beep di completamento come fallback.
- Gameplay e tutte le altre funzioni 4.7.2 invariati.


## 4.7.2 - compact launcher e sfide firmate
- Menu principale ridisegnato come game launcher compatto, senza scrollbar interna.
- Personaggi ridotti a selettore orizzontale; ModalitÃ  Storia, Arcade Run, Campagna, Sfida giornaliera e Caccia inversa sono accessi immediati.
- Multiplayer, Level Studio, Record e pannello Altro organizzati in una barra secondaria.
- Card risultato con icona del personaggio effettivamente usato: Giovanni, Bruno o PAC PAC.
- Inserimento obbligatorio di nome o nickname, massimo 24 caratteri, salvato localmente.
- Firma incorporata nei pixel dellâ€™immagine PNG.
- Aggiunte 30 frasi ironiche e motivazionali predefinite con selezione deterministica.
- Condivisione invariata come file PNG, con download di fallback.
- Gameplay, livelli, Storia, multiplayer e Level Studio non modificati.


## 4.7.1 - menu e condivisione immagine
- Riorganizzato il menu principale in tre sezioni: In primo piano, ModalitÃ  di gioco, Crea e consulta.
- Migliorati gerarchia visiva, leggibilitÃ , focus da tastiera e resa responsive.
- ModalitÃ  Storia e Arcade classico mantenute come accessi prioritari.
- Sostituita la condivisione testuale del risultato con una card PNG 1080x1350.
- La card include modalitÃ , livello, punteggio, ranking S-D, combo massima, near miss, ghost chain, esito, data e codice risultato.
- Condivisione tramite Web Share del file PNG; fallback con download locale del PNG.
- Rimossi dal risultato WhatsApp il link wa.me e il testo copiabile.
- Inviti multiplayer e QR invariati.
- Gameplay e altre funzionalitÃ  lasciati invariati.


## 4.7.0 - ricostruzione stabile dalla 4.5.0
- Ricostruzione completa a partire esclusivamente dal pacchetto 4.5.0 funzionante.
- Nessun file applicativo importato dalle release 4.5.1-4.6.4.
- Logica della splash 4.5.0 preservata integralmente e coperta da test dedicato.
- Nuova splash trailer desktop e mobile, senza cambiamenti al relativo click handler.
- Menu moderno realizzato come livello visuale separato.
- Correzione diretta UTF-8 dei sorgenti e delle scritte accentate.
- Avvio Story Game reso indipendente dal loader JSON non necessario.
- Avvio reale e testato degli otto atti.
- Castello e boss visibili in ciascun atto.
- Dialoghi contestuali del boss durante la partita.
- Casa Story dei fantasmi calcolata su una cella percorribile.
- Recupero automatico dei fantasmi bloccati.
- Prenotazione preventiva delle celle dei muri mobili per impedirne lâ€™attraversamento.
- Bracieri riconoscibili e legenda ambientale.
- Conservate tutte le modalitÃ  e le funzioni storiche della 4.5.0.

## 4.5.0 - 2026-10-22
- Riscritta la storia come `Il compagno rapito`, con scelta del protagonista.
- Creati otto labirinti strutturalmente differenti e legati ai boss.
- Aggiunti acqua invalicabile, fiumi, fiaccole, trappole e muri mobili.
- Impedito il posizionamento di raccoglibili nelle celle del castello e nei percorsi mobili.
- Aggiunti Power Birra per Giovanni e Power Stella per Bruno.
- Aggiunti velocitÃ  120%, Power, munizioni infinite e raffica temporanea.
- Ridotti e differenziati i fumetti per una narrazione piÃ¹ compatta.

## 4.4.0 - 2026-10-22
- Ambientati i primi livelli nei castelli della Transilvania.
- Aggiunte Vespera, Glacia e Morvella, antagoniste gotiche originali in pixel art.
- Aggiunto Dracula come boss della campagna rumena, con salute e seconda fase.
- Resa Roma estremamente difficile con fantasmi extra e teletrasporti.
- Chiarito Trastevere come quartiere di Roma e aggiunto il livello Colosseo.
- Aggiunto il Custode della Cupola, boss immaginario del Vaticano.
- Integrato Ralph come cane narratore con ritratto e fumetti.

## 4.3.0 - 2026-10-22
- Rifatta la Story Game come viaggio dalla Transilvania a Roma.
- Integrata lâ€™origine rumena e il mestiere di muratore di Giovanni.
- Integrati lâ€™origine romana, il passato da steward e lâ€™interesse per arte e vita mondana di Bruno.
- Ambientati cinque capitoli in Transilvania: SighiÈ™oara, BraÈ™ov, Carpazi, Bran e Sibiu.
- Ambientati gli ultimi capitoli a Trastevere, Colosseo e Vaticano.
- Aggiunte abilitÃ  narrative Muratura, Occhio artistico, Curatela e Vita mondana.
- Sostituita la splash con il viaggio visivo Transilvania-Roma.

## 4.2.0 - 2026-10-22
- Aggiunta Story Game in otto capitoli: `I Frammenti del Legame`.
- Giovanni e Bruno sono protagonisti come coppia e affrontano la storia insieme.
- Aggiunto Bruno come compagno visibile nel labirinto.
- Aggiunta meccanica Legame con barra HUD, progressione e bonus al 100%.
- Aggiunti dialoghi, obiettivi, sblocco capitoli, salvataggio e finale narrativo.
- Sostituita la splash con nuova grafica Story Game desktop e mobile.

## 4.1.0 - 2026-10-22
- Aggiunto manuale integrato e pagina autonoma `manual.html`.
- Aggiunta ricerca nel manuale e collegamento dal menu principale.
- Sostituita la splash incorporata con asset WebP locali desktop e mobile.
- Aggiunte animazioni responsive, safe-area e supporto reduced motion.
- Mantenuta compatibilitÃ  con GitHub Pages mediante percorsi relativi.

## 4.0.0 - 2026-10-22
- Estratti i livelli ufficiali in 20 file JSON e aggiunto manifest versionato.
- Separata la campagna progettata dall'Arcade infinito procedurale.
- Aggiunti loader, cache, validatore e runtime dichiarativo di porte e portali.
- Implementata progressione campagna, stelle e sblocco sequenziale.
- Sostituito l'editor storico con Level Studio multilivello e download JSON.
- Aggiunti feedback per palline residue, ultime cinque, FIRE, munizioni, porte automatiche e portali.
- Reso il near miss resistente al farming e chiarita la progressione combo.
- Aggiunte sfida giornaliera e telemetria esclusivamente locale.
- Integrato QR offline reale e preservate tutte le funzioni storiche.



