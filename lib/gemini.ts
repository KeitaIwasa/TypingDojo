'use server';

import { GoogleGenAI, Type } from '@google/genai';

export const generatePhraseDetails = async (japanese: string, thai?: string, english?: string) => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'Gemini API key is missing. Set GEMINI_API_KEY (preferred) or NEXT_PUBLIC_GEMINI_API_KEY.'
    );
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Analyze the following Japanese phrase: "${japanese}".
    Provide a natural romaji transcription.
    ${thai ? `The Thai meaning is approximately: "${thai}".` : 'Provide a Thai translation.'}
    ${english ? `The English meaning is approximately: "${english}".` : 'Provide an English translation.'}

    Return concise study-friendly values.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-lite-preview',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          romaji: { type: Type.STRING, description: 'Romaji transcription of the Japanese phrase' },
          thai: { type: Type.STRING, description: 'Thai translation' },
          english: { type: Type.STRING, description: 'English translation' },
        },
        required: ['romaji', 'thai', 'english'],
      },
    },
  });

  const text = response.text;
  if (!text) throw new Error('No response from Gemini');

  return JSON.parse(text) as { romaji: string; thai: string; english: string };
};
