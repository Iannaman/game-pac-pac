# Optional room signaling
This Worker stores WebRTC offer/answer data for 10 minutes in a Cloudflare KV binding named ROOMS. It does not relay gameplay. Create a KV namespace, replace the ID and APP_ORIGIN in wrangler.toml, deploy the Worker, then set signalingUrl in multiplayer-config.js. Do not put TURN long-lived secrets in the public config.
