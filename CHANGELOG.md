# Changelog

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
- Prenotazione preventiva delle celle dei muri mobili per impedirne l’attraversamento.
- Bracieri riconoscibili e legenda ambientale.
- Conservate tutte le modalità e le funzioni storiche della 4.5.0.

## 4.5.0 - 2026-10-22
- Riscritta la storia come `Il compagno rapito`, con scelta del protagonista.
- Creati otto labirinti strutturalmente differenti e legati ai boss.
- Aggiunti acqua invalicabile, fiumi, fiaccole, trappole e muri mobili.
- Impedito il posizionamento di raccoglibili nelle celle del castello e nei percorsi mobili.
- Aggiunti Power Birra per Giovanni e Power Stella per Bruno.
- Aggiunti velocità 120%, Power, munizioni infinite e raffica temporanea.
- Ridotti e differenziati i fumetti per una narrazione più compatta.

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
- Integrata l’origine rumena e il mestiere di muratore di Giovanni.
- Integrati l’origine romana, il passato da steward e l’interesse per arte e vita mondana di Bruno.
- Ambientati cinque capitoli in Transilvania: Sighișoara, Brașov, Carpazi, Bran e Sibiu.
- Ambientati gli ultimi capitoli a Trastevere, Colosseo e Vaticano.
- Aggiunte abilità narrative Muratura, Occhio artistico, Curatela e Vita mondana.
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
- Mantenuta compatibilità con GitHub Pages mediante percorsi relativi.

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
