# PAC PAC 3.1.0 - Consolidamento baseline 2.5.1

Questa build riallinea i moduli forniti della 2.5.1 e aggiunge un regression guard.

## Avvio
Aprire `index.html` tramite un server locale HTTPS/localhost per usare WebRTC e le API di condivisione.

## Test
`node tests/regression.test.js`

## Audio opzionale
Inserire in `audio/`: `smoot-criminal.mp3`, `hee-hee.mp3`, `gun.wav`.

## Multiplayer
Configurare `multiplayer-config.js` con signaling URL e ICE server. Con configurazione vuota resta disponibile il pairing manuale.

## Nota QR
Il file del motore QR non era presente tra i frammenti forniti. La build evita errori e propone la condivisione dell'invito; per generare QR scansionabili occorre ripristinare il precedente `vendor/qrcode-core.js` che espone `window.PacQr.svg(text)`.
