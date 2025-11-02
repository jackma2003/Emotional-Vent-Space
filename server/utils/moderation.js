// Profanity filter - basic word list
const profaneWords = [
  'fuck',
  'shit',
  'asshole',
  'bitch',
  'cunt',
  'faggot',
  'retard',
  'nigger',
  'retarded',
  'niggers',
  'retards',
  'nigga'
];

// Additional harmful phrases or patterns
const harmfulPatterns = [
  /kill.*yourself/i,
  /kill.*myself/i,
  /killing.*yourself/i,
  /killing.*myself/i,
  /\bkys\b/i,
  /self.?harm/i,
  /\bsuicide\b/i,
  /commit.*suicide/i,
  /end.*life/i,
  /end.*it\b/i,
  /end.*myself/i,
];

/**
 * Check if text contains profanity or harmful content
 * @param {string} text - The text to check
 * @returns {Object} - { isBlocked: boolean, reason: string, category: string }
 */
function checkForHarmfulContent(text) {
  const lowerText = text.toLowerCase();
  
  // Check for explicit profanity
  for (const word of profaneWords) {
    if (lowerText.includes(word.toLowerCase())) {
      return {
        isBlocked: true,
        reason: 'inappropriate language',
        category: 'profanity'
      };
    }
  }
  
  // Check for harmful phrases
  for (const pattern of harmfulPatterns) {
    if (pattern.test(lowerText)) {
      return {
        isBlocked: true,
        reason: 'harmful content detected',
        category: 'self-harm'
      };
    }
  }
  
  // Check for excessive capitalization (often used for yelling/aggression)
  const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
  if (capsRatio > 0.7 && text.length > 20) {
    return {
      isBlocked: true,
      reason: 'excessive capitalization',
      category: 'aggressive'
    };
  }
  
  return {
    isBlocked: false,
    reason: null,
    category: null
  };
}

/**
 * Check text for warnings (less severe than blocking)
 * @param {string} text - The text to check
 * @returns {Object} - { hasWarning: boolean, message: string }
 */
function checkForWarnings(text) {
  const lowerText = text.toLowerCase();
  
  // Words that might need caution
  const warningWords = [
    /damn/i,
    /hell/i,
    /crap/i,
  ];
  
  for (const word of warningWords) {
    if (word.test(lowerText)) {
      return {
        hasWarning: true,
        message: 'Please keep your language respectful'
      };
    }
  }
  
  return {
    hasWarning: false,
    message: null
  };
}

module.exports = {
  checkForHarmfulContent,
  checkForWarnings
};

