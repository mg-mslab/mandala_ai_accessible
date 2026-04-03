require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

async function test() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set');
    return;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Hello, test message',
    });
    console.log('Success:', response.text);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();