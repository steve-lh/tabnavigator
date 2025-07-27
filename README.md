# Stream Previewer

This is a minimal prototype implementing the basic structure for a grid-based stream preview tool. It uses Electron for the desktop shell and loads stream definitions from `streams.json`.

## Getting Started

1. Install dependencies (requires internet access):

   ```bash
   npm install
   ```

2. Start the application:

   ```bash
   npm start
   ```

Streams are defined in `streams.json` as an array:

```json
[
  { "title": "Sample Stream", "url": "https://example.com/stream.m3u8" }
]
```

### OBS Connection

An optional OBS WebSocket connection can be configured via the `.env` file. See `.env.example` for the available settings.

The UI currently lists each stream title in a grid. Actual playback, drag/drop, hotkeys and further functionality from the requirements are left as future work.
