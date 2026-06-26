const FISH_API_KEY = process.env.FISH_API_KEY;
const TOM_VOICE_ID = process.env.EAS_TOM_VOICE_ID;

export const handler = async (event) => {
  try {
    const { text } = JSON.parse(event.body);

    const res = await fetch('https://api.fish.audio/v1/tts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FISH_API_KEY}`,
        'Content-Type': 'application/json',
        'model': 's2.1-pro-free'
      },
      body: JSON.stringify({
        text,
        reference_id: TOM_VOICE_ID,
        format: 'mp3'
      })
    });

    if (!res.ok) {
      const err = await res.text();
      return {
        statusCode: res.status,
        body: `Fish Audio API error: ${err}`
      };
    }

    const audioBuffer = await res.arrayBuffer();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'audio/mpeg' },
      body: Buffer.from(audioBuffer).toString('base64'),
      isBase64Encoded: true
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: `Function error: ${err.message}`
    };
  }
};
