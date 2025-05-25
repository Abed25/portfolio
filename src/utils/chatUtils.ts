import { QAPair } from '../data/qaData';

export function findBestMatch(userMessage: string, qaData: QAPair[]): string {
  // Convert user message to lowercase for case-insensitive matching
  const message = userMessage.toLowerCase();
  
  // First, try to find an exact match with questions
  const exactMatch = qaData.find(qa => 
    qa.question.toLowerCase() === message
  );
  if (exactMatch) return exactMatch.answer;

  // Then, try to find matches with keywords
  const keywordMatches = qaData.filter(qa => 
    qa.keywords.some(keyword => message.includes(keyword.toLowerCase()))
  );

  if (keywordMatches.length > 0) {
    // If multiple matches, return the one with the most keyword matches
    const bestMatch = keywordMatches.reduce((best, current) => {
      const bestScore = best.keywords.filter(k => 
        message.includes(k.toLowerCase())
      ).length;
      const currentScore = current.keywords.filter(k => 
        message.includes(k.toLowerCase())
      ).length;
      return currentScore > bestScore ? current : best;
    });
    return bestMatch.answer;
  }

  // If no matches found, return a default response
  return "I'm not sure about that. Could you try asking about my skills, projects, services, or how to contact me?";
} 