# Musica di sottofondo

Inserire qui tutti i brani musicali. `smoot-criminal.mp3` deve essere presente e viene sempre riprodotto per primo.

Dopo aver aggiunto o rimosso brani, dalla radice del repository eseguire:

```bash
node scripts-build-music-playlist.js
```

Il comando aggiorna `music/playlist.json`. Gli effetti del gioco restano nella cartella `audio` e non entrano nella playlist.
