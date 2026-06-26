## NOAA Tornado Visualizer

An interactive web-based tornado simulation with a fictional Metro County city map, live EAS (Emergency Alert System) voice alerts using Fish Audio TTS, realistic storm cell dynamics, and intercept team management.

[Live Demo](https://noaa-tvs.netlify.app)

### Features

#### Simulation
- Real-time canvas simulation with adjustable speed (0.1x–3.0x)
- Pause/resume, auto-run mode
- **Simulation clock** ticking 1 minute per real second with AM/PM display
- Dynamic CAPE (0–5000 J/kg) that randomizes after each tornado dissipates
- Adjustable parameters: surface/upper temperature, humidity, wind shear, pressure, storm motion, low-level jet

#### Storms & Tornadoes
- Click to spawn storm cells, spawn supercells, or trigger an outbreak
- **One active tornado at a time** — multiple supercells OK, but only one can produce a tornado
- Tornado lifecycle: Forming → Organizing → Mature → Shrinking → Decaying → Dissipating
- EF rating (EF0–EF5) determined in real-time by wind speed and width
- Damage path tracking, debris particles, screen shake, rain/hail/lightning effects

#### Fictional City Map
- **Metro County** with 10 named neighborhoods (Oakwood Heights, Downtown Metro, Riverside, etc.)
- Highways (I-44, SH-9), roads, streets, river, lake, and landmarks (Hospital, University, Mall, Airport)
- Grid overlay showing county boundary
- Neighborhood-aware EAS alerts mention the closest area to the tornado

#### Pan & Zoom
- **Drag** to pan the map
- **Scroll wheel** to zoom in/out (0.25x–4x)
- Press **R** to reset camera view
- All click interactions (storm spawn, team deploy, right-click remove) work with the camera

#### Emergency Alert System (EAS)
- Full-screen EAS overlay simulating NOAA/NWS alerts
- **Web Audio API** plays the classic EAS attention signal (header tones 0–14.5s), then the TOM voice, then the ender tones
- **Fish Audio TTS** generates realistic EAS voice with 2.5x volume gain
- EAS text format follows real NWS transcripts with neighborhood, direction, speed, and expiry time
- **Close button** (×) dismisses the overlay while a scrolling footer bar persists
- Footer auto-hides 10 seconds after the tornado warning expires
- Alerts trigger on: tornado touchdown (Warning), EF4+ upgrade (Emergency), EF upgrade (Update), dissipation (Expired)

#### Intercept Teams
- Deploy vehicles (TIV 1/2, Dominator 1/2/3, Tornado Attack, Titus) to intercept tornadoes
- Teams have distinct wind thresholds for undeployed/deployed states
- Teams can be lofted if winds exceed thresholds
- Auto-deploy in auto-run mode
- Team pool refills every 3–5 minutes

#### Data Probe
- Launch instrument probes into tornadoes from corners or from deployed teams
- Collects wind speed, pressure drop, and debris velocity data

#### Visual Toggles
- Wind vectors, vorticity field, debris particles, tornado path, mist effect, windy effect

### How to Run

1. **Open `index.html`** directly in a browser (static, no build step)
2. Or deploy to **Netlify** for EAS voice functionality

### EAS Voice Setup (Netlify)

The EAS TOM voice requires a Fish Audio API key deployed as Netlify environment variables:

1. Push to a Netlify-connected Git repo
2. In Netlify Dashboard → Site Settings → Environment Variables, add:
   - `FISH_API_KEY` — your Fish Audio API key
   - `EAS_TOM_VOICE_ID` — the Fish Audio voice model ID (1990–2016 EAS TOM voice)
3. Set scope to **All scopes** (or at minimum **Functions**) and deploy

### Technologies

- HTML5 Canvas
- CSS3
- JavaScript (ES6+)
- Web Audio API
- Fish Audio TTS API
- Netlify Functions (TTS proxy)

### License

MIT License — see full text in repository.
