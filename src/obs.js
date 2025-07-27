const OBSWebSocket = require('obs-websocket-js');
require('dotenv').config();

const obs = new OBSWebSocket();

async function connect() {
  const port = process.env.OBS_PORT || 4455;
  try {
    await obs.connect(`ws://localhost:${port}`);
    console.log('Connected to OBS');
  } catch (err) {
    console.error('OBS connection error:', err);
  }
}

module.exports = { connect };
