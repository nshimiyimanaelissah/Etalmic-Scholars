import { GoogleGenerativeAI } from '@google/generative-ai';

export async function analyzeScholarships(query: string) {
  const fallback = {
    summary: `The system found a strong STEM opportunity pattern around ${query}. Priority should go to official ministry and school announcements, then social media and program communities. Focus on scholarships that support robotics, technology, coding, and advanced mathematics.`,
    keywords: ['STEM', 'robotics', 'coding', 'scholarship', 'technology', 'mathematics'],
    recommendations: [
      'Check official ministry and school portals for eligibility and deadlines.',
      'Prioritize scholarships related to robotics, coding, engineering, and AI.',
      'Track social media, WhatsApp groups, and student communities for urgent announcements.',
      'Prepare a short application bundle: transcript, recommendation, and personal statement.',
    ],
    sources: ['Ministry announcements', 'School newsletters', 'Instagram/WhatsApp updates', 'STEM camps and programs'],
  };

  if (!process.env.GEMINI_API_KEY) {
    return fallback;
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are a scholarship intelligence assistant helping high school students find STEM opportunities. User query: ${query}. Return JSON with fields: summary, keywords (array of 5 strings), recommendations (array of 4 strings), sources (array of 4 strings). Keep the answer relevant to science, technology, engineering, mathematics, robotics, and coding opportunities.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleaned = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleaned);
  } catch (error) {
    console.error('Gemini error:', error);
    return fallback;
  }
}
