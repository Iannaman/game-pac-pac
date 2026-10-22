## 3.1.0
- Riallineata la baseline funzionale ed estetica 2.5.1 dai moduli forniti.
- Ripristinati combo x1-x8, ghost chain, near miss, HUD arcade e gradi D-S.
- Ripristinati Arcade Run, tre vite, missioni, stelle, record, medaglie e persistenza locale.
- Ripristinati Team Combo, lead change, rematch, WhatsApp, Web Share e clipboard.
- Spostato il box combo nell'HUD per non coprire maze, palline, fantasmi e percorsi.
- Aggiunto regression guard 3.1.0 e test statici della baseline.
- Corretta la versione diagnostica non allineata.
- Gestita in sicurezza l'assenza del motore QR nei frammenti ricevuti.

## 3.2.0
- Compact mobile arcade telemetry in one 34px HUD row: combo, max combo, near miss and ghost chain.
- Added complete feature-contract regression gate.
- Added Hunt / Caccia inversa: player hunts while ghosts flee and try to survive a configurable timer.
- Added dedicated Hunt tutorial, result and rematch flow.
- Added Host Level Editor with undo/redo, reachability validator, local playtest, draft persistence, JSON export/import and checksum.

## 3.3.0
- Added separate adjacent Near Miss, Max Combo and Ghost Chain HUD boxes.
- Added FIRE-operated doors, timed automatic passages and paired Pac-Man teleport tunnels.
- Added occupancy/reachability guards, portal cooldown, particles and audio feedback.

### 3.3.1
- Fixed Level 3 completion after all reachable spheres are collected.
- Synchronized collectible counters after dynamic doors and automatic passage mutations.
- Hardened level-clear detection against stale or negative counters.
- Added Level 3 completion regression coverage.

### 3.3.2
- Fixed Level 4 completion by keeping collectible counts synchronized across dynamic map mutations.
- Updated visible Arcade version labels from 3.3.0 to 3.3.2.
- Added an explicit Level Editor save action with validation, confirmation and storage error feedback.
- Added anti-regression coverage for the three reported defects.
