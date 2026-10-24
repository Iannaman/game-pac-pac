# PAC PAC feature contract 4.5.0
Historical baseline: 2.5.1 and releases 2.8.0 through 3.3.2.
Required 4.0 features: JSON campaign, manifest, procedural Arcade, Level Studio, QR, dynamic doors, paired portals, campaign progression, daily challenge and local-only metrics.
Gate: every `tests/*.test.js` suite must pass.

Required 4.1 features: in-game manual, standalone manual page, local responsive splash assets and reduced-motion support.

Required 4.2 features: eight story chapters, Giovanni and Bruno narrative, companion rendering, Bond meter, story persistence, finale and responsive story splash.

Required 4.3 features: character backgrounds, five Transylvania chapters, Trastevere, Colosseum, Vatican finale, journey splash and story persistence v430.

Required 4.4: Ralph narrator, comic bubbles, three original castle antagonists, Dracula boss, chaotic Rome portals, Trastevere, Colosseum and fictional Vatican guardian boss.

Required 4.5: eight distinct mazes, water blocking, rivers, torches, traps, moving walls, no castle collectibles, Beer/Star powers, 120% speed, infinite rapid fire and concise kidnapping narrative.

Required 4.7.0: preserve the exact 4.5.0 splash behavior; all eight Story acts start; modern menu; clean UTF-8; visible castle and boss per act; live boss dialogue; reachable ghost home; stuck recovery; solid moving walls; recognizable braziers; all 4.5.0 features retained.

Required 4.7.1: organized three-section main menu; PNG-only result sharing containing level, score, ranking, combo, near miss and ghost chain; no wa.me text result; download fallback; all gameplay unchanged.

Required 4.7.2: compact no-scroll launcher; existing menu actions preserved; signed PNG result card; selected Giovanni, Bruno or PAC PAC icon; exactly 30 preset challenge phrases; no editable WhatsApp result text; gameplay unchanged.

Required 4.7.3: animated dynamic launcher; reduced-motion support; Giovanni, Bruno and PAC PAC selection audio; normal and Story completion audio; non-blocking Web Audio beep fallback when MP3 is absent or rejected; 4.7.2 gameplay unchanged.

Required 4.7.4: no collectibles under the Story castle; the last collectible starts boss chase instead of completion; boss capture completes the act; `grido-battaglia.mp3` at chase start; `missione-compiuta.mp3` at actual completion; non-Story modes unchanged; clean special characters.

Required 4.7.5: only current version in main menu; large `PAC PAC G&B` sign; smarter Story boss with BFS distance, escape-space and dead-end avoidance; adaptive sprint; background music reduced by exactly 40% only while `grido-battaglia.mp3` plays, then restored; all other behavior unchanged.

Required 4.7.6: Story boss remains intelligent but catchable; chase-only 42% player speed boost; FIRE activates 0.62s Bond Dash and 2.6s boss slow with 1.65s cooldown; no ammunition cost; ghost protection and visible cooldown during chase; all non-chase behavior unchanged.

Required 4.7.7: every Story maze is fully reachable at runtime; eyes return to the castle ghost base with anti-stuck recovery in Arcade and Story; death requests `audio/gameover.mp3` with non-blocking fallback; all other 4.7.6 behavior unchanged.

Required 4.7.8: futuristic non-interactive background audio visualizer, Web Audio reactive when available, ambient fallback, reduced-motion support; all gameplay unchanged.

Required 4.8.0: visualizer analyses project MP3, personal music and synthesized background music without changing audio volume; glowing floating balls exist only in the main menu; all other behavior unchanged.

Required 4.8.1: zero mojibake in textual sources; every Story boss remains visible in the castle and chase even when image assets fail; all 4.8.0 behavior unchanged.
