/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY || "" });

export const optimizePrompt = async (simplePrompt: string, language: 'ko' | 'en'): Promise<string> => {
  if (!API_KEY) {
    throw new Error("Gemini API key is missing. Please configure it in your environment.");
  }

  const systemPrompt = language === 'ko' 
    ? "당신은 AI 프롬프트 엔지니어링 전문가입니다. 사용자의 단순한 요청을 받아서, AI가 더 정확하고 전문적인 결과물을 낼 수 있도록 구체적인 페르소나, 맥락, 제약 조건, 출력 형식을 포함한 '고급 프롬프트'로 확장해 주세요. 결과물은 프롬프트 내용만 깔끔하게 출력해 주세요."
    : "You are an AI prompt engineering expert. Take a user's simple request and expand it into a 'high-quality prompt' that includes a specific persona, context, constraints, and output format so that the AI can produce more accurate and professional results. Output only the prompt content itself.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: simplePrompt,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "";
  } catch (error) {
    console.error("Gemini optimization error:", error);
    throw error;
  }
};
