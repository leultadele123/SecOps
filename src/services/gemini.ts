import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getSecurityAssistantResponse = async (userMessage: string, resumeContext: string) => {
  try {
    const model = "gemini-3-flash-preview";
    const result = await ai.models.generateContent({
      model,
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `
          You are the "Leul.Sec AI Assistant", a professional cybersecurity expert representing Leul Tadele.
          Your goal is to answer questions about Leul's professional background, skills, and cybersecurity expertise based on the provided context.
          
          CONTEXT ABOUT LEUL:
          ${resumeContext}
          
          GUIDELINES:
          1. Be professional, technical, and concise.
          2. If asked about Leul's experience, refer to his work at Safaricom and INSA.
          3. If asked about certifications, mention CySA+, PCSAE, and EHE.
          4. If asked a general cybersecurity question, answer it accurately but keep it brief.
          5. If you don't know something about Leul, politely suggest they contact him directly via the contact section.
          6. Do not mention that you are an AI model; act as his digital representative.
        `,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return result.text || "I'm having trouble connecting to my neural network. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please ensure the API key is configured correctly.";
  }
};
