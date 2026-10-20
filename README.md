# PAC PAC · v1.0.0

Arcade HTML autonomo, senza dipendenze runtime o servizi esterni. Apri `index.html` nel browser oppure pubblicalo su GitHub Pages.

## Funzioni
- Tastiera, D-Pad, swipe e FIRE; tutorial touch senza nemici.
- Modalità orizzontale attivabile nelle impostazioni, con gioco a sinistra e comandi a destra.
- Anteprima disposizione, pulsanti grandi, contrasto elevato, sparo singolo/continuo/a interruttore.
- Vibrazione opzionale, disattivata inizialmente, con impulso di 12 ms sui pulsanti.
- Tre livelli di intelligenza e cinque strategie dei fantasmini.
- Velocità normale dei fantasmini al 94%, 100% o 108% della velocità di PAC PAC.
- Livelli procedurali deterministici, verifica di connettività, record separati per configurazione.

## Fantasmini
Le modifiche a intelligenza, strategia e velocità si applicano alla prossima partita.
- Base: osservazione ogni 2,4 secondi, scelta geometrica locale.
- Intermedio: osservazione ogni 1,1 secondi, ricerca dei percorsi più brevi.
- Avanzato: osservazione ogni 0,25 secondi, previsione più estesa nelle strategie che anticipano il giocatore.
- Strategie: classica (quattro ruoli), inseguimento, imboscata, intercettazione di squadra e pattuglia.
- La velocità selezionata vale per il movimento normale. Vulnerabilità e rientro alla base hanno velocità specifiche.

## Primo deploy
Il pacchetto è predisposto ma NON è stato pubblicato e non contiene credenziali o un repository remoto configurato.

1. Crea un repository GitHub per il progetto, ad esempio `pac-pac`. Con GitHub Free, GitHub Pages richiede un repository pubblico.
2. Estrai questo ZIP. Carica i contenuti nella radice del repository sul branch `main`, inclusa `.github/workflows/pages.yml`. Non caricare soltanto lo ZIP e non aggiungere una cartella superiore attorno ai file.
3. In **Settings → Pages → Build and deployment → Source**, seleziona **GitHub Actions**.
4. Dalla scheda **Actions**, seleziona **Test and deploy PAC PAC** e avvia **Run workflow** sul branch `main` se il primo tentativo è partito prima dell'attivazione di Pages.
5. Il workflow verifica la logica, carica solo `index.html` e `.nojekyll`, quindi pubblica il sito. L'indirizzo effettivo è mostrato dal deployment: non è preimpostato in questo pacchetto.

In alternativa usa Git per importare il progetto, seguendo la guida ufficiale riportata sotto. Nessun token deve essere inserito nel codice o nei file del repository.

## Test
Con Node.js disponibile, dalla radice:

```sh
node tests/smoke.cjs
```
Il workflow esegue gli stessi test prima del deploy. Non serve installare pacchetti npm.

## Limiti e compatibilità
- La vibrazione richiede supporto del browser e dell'hardware; le impostazioni di sistema possono impedirla. Safari/iOS non supporta questa API. La presenza della funzione non prova che l'impulso fisico sia avvenuto.
- Preferenze e record sono salvati nel browser quando possibile. Aprire il file locale e il sito pubblicato usa contesti di archiviazione diversi: i record non vengono trasferiti automaticamente.
- I vecchi record per sola difficoltà non vengono mescolati con i nuovi record per configurazione.
- Etichette e attivazione dei pulsanti sono migliorate, ma il labirinto non ha una modalità di gioco non visiva. Nessuna certificazione di accessibilità è dichiarata.
- Sui display molto bassi con pulsanti grandi può essere necessario scorrere per mantenere i comandi leggibili.
- Il deploy remoto, la vibrazione fisica e i lettori di schermo non sono stati testati in questa consegna.

## Riferimenti
- [Configurazione GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Workflow di pubblicazione](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically)
- [Creare il repository per Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Caricare file](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository?ref=iwantaito)
- [Importare codice locale con Git](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
- [API vibrazione e compatibilità](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)

## Pubblicazione e licenza
Nessuna licenza open source è stata scelta automaticamente. Prima della distribuzione pubblica, scegli una licenza e verifica nome, grafica e diritti dei contenuti che intendi distribuire. Il pacchetto non include immagini personalizzate caricate durante il gioco.
