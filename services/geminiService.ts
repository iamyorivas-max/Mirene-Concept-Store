
import { GoogleGenAI, Type } from "@google/genai";
import { DesignSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignSuggestions = async (prompt: string): Promise<DesignSuggestion[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an interior design expert for "MIRENE Concept Store". Our boutique specializes in household linens (linge de maison), fine tableware (vaisselle raffinée), candles (bougies), and artisanal gifts inspired by the world.
      
      User request: "${prompt}"
      
      Suggest 3 items that match this request, focusing on our specific product categories. Keep descriptions elegant and inspiring.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              item: { type: Type.STRING, description: "Name of the item." },
              reason: { type: Type.STRING, description: "Elegant reason why it fits." },
              style: { type: Type.STRING, description: "Style tag (e.g., Artisanal, Mediterranean, Cozy)." }
            },
            required: ["item", "reason", "style"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};
