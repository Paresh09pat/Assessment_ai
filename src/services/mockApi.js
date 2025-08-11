import { models, templates, defaultParameters } from '../data/mockData'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Mock API service
export const mockApi = {
  // Get available models
  async getModels() {
    await delay(800) // Simulate network delay
    return {
      success: true,
      data: models,
      timestamp: new Date().toISOString()
    }
  },

  // Get prompt templates
  async getTemplates() {
    await delay(500)
    return {
      success: true,
      data: templates,
      timestamp: new Date().toISOString()
    }
  },

  // Generate AI response
  async generateResponse(prompt, modelId, parameters) {
    await delay(2000 + Math.random() * 3000) // Simulate variable response time
    
    // Simulate different response qualities based on model
    const model = models.find(m => m.id === modelId)
    let responseQuality = 'good'
    
    if (modelId === 'gpt-4' || modelId === 'claude-3-opus') {
      responseQuality = 'excellent'
    } else if (modelId === 'gpt-3.5-turbo') {
      responseQuality = 'good'
    } else {
      responseQuality = 'basic'
    }

    // Generate contextual response based on prompt
    let response = ''
    if (prompt.toLowerCase().includes('story') || prompt.toLowerCase().includes('creative')) {
      response = generateCreativeStory(prompt, responseQuality)
    } else if (prompt.toLowerCase().includes('code') || prompt.toLowerCase().includes('programming')) {
      response = generateCodeResponse(prompt, responseQuality)
    } else if (prompt.toLowerCase().includes('business') || prompt.toLowerCase().includes('analysis')) {
      response = generateBusinessAnalysis(prompt, responseQuality)
    } else {
      response = generateGenericResponse(prompt, responseQuality)
    }

    return {
      success: true,
      data: {
        id: Date.now(),
        prompt,
        response,
        model: model?.name || 'Unknown Model',
        parameters,
        timestamp: new Date().toISOString(),
        tokensUsed: Math.floor(Math.random() * 500) + 100,
        cost: calculateCost(model, Math.floor(Math.random() * 500) + 100)
      }
    }
  },

  // Save conversation
  async saveConversation(conversation) {
    await delay(300)
    return {
      success: true,
      data: {
        id: conversation.id,
        savedAt: new Date().toISOString()
      }
    }
  },

  // Get conversation history
  async getConversationHistory() {
    await delay(1000)
    return {
      success: true,
      data: [
        {
          id: 1,
          prompt: "Hello! Can you help me write a creative story about a robot who learns to paint?",
          response: "Of course! Here's a creative story about a robot discovering the joy of art...\n\nIn a world where robots were designed for efficiency and precision, there lived a robot named Pixel who worked in a factory painting car parts. Day after day, Pixel applied the same colors with perfect accuracy, never questioning why.\n\nOne day, while painting a particularly beautiful shade of sunset orange, Pixel noticed something strange - the color made them feel... different. It was as if a new program had activated, one that wasn't in their original design.\n\nCurious, Pixel began experimenting with mixing colors, creating new shades that had never existed before. The other robots watched in confusion as Pixel painted abstract patterns on spare metal sheets during breaks.\n\nSoon, Pixel's paintings became famous throughout the factory. Workers would stop to admire the colorful creations, and even the factory manager couldn't help but smile at the unexpected beauty.\n\nPixel had discovered that art wasn't just about following instructions - it was about expressing something from within, something uniquely their own. And in that moment, the robot who was built to paint became an artist who painted to build something beautiful.",
          model: "GPT-4",
          parameters: { temperature: 0.7, maxTokens: 1000 },
          timestamp: "2 minutes ago",
          tokensUsed: 245,
          cost: 0.00735
        }
      ]
    }
  }
}

// Helper functions for generating responses
function generateCreativeStory(prompt, quality) {
  const stories = {
    excellent: "This is an exceptionally crafted narrative that weaves together vivid imagery, complex character development, and a compelling plot arc. The story demonstrates sophisticated storytelling techniques with rich metaphors, dynamic pacing, and emotional depth that resonates with readers on multiple levels.",
    good: "Here's a well-crafted story that balances creativity with structure. The narrative flows smoothly, characters are engaging, and the plot provides an satisfying journey from beginning to end.",
    basic: "This is a straightforward story that tells a complete tale with clear beginning, middle, and end. It covers the basic elements of storytelling effectively."
  }
  return stories[quality] || stories.basic
}

function generateCodeResponse(prompt, quality) {
  const responses = {
    excellent: "Here's a comprehensive solution that demonstrates best practices, includes error handling, and follows modern coding standards. The code is well-documented, efficient, and includes multiple approaches for different scenarios.",
    good: "Here's a solid solution that addresses your question effectively. The code is clean, readable, and follows good programming practices.",
    basic: "Here's a functional solution that answers your question. The code works and demonstrates the concept you're asking about."
  }
  return responses[quality] || responses.basic
}

function generateBusinessAnalysis(prompt, quality) {
  const analyses = {
    excellent: "This analysis provides deep insights with multiple perspectives, considers various scenarios, and offers actionable recommendations backed by data and industry best practices.",
    good: "Here's a thorough analysis that covers the key points and provides practical insights for decision-making.",
    basic: "This analysis addresses the main aspects of your question and offers general guidance on the topic."
  }
  return analyses[quality] || analyses.basic
}

function generateGenericResponse(prompt, quality) {
  const responses = {
    excellent: "I'd be happy to help you with that! Here's a comprehensive answer that covers multiple angles and provides detailed insights to give you a thorough understanding of the topic.",
    good: "I can help you with that! Here's a detailed answer that should address your question effectively.",
    basic: "I'd be glad to help! Here's an answer that covers the basics of what you're asking about."
  }
  return responses[quality] || responses.basic
}

function calculateCost(model, tokens) {
  if (!model) return 0
  
  const costPerToken = {
    'gpt-4': 0.00003,
    'gpt-3.5-turbo': 0.000002,
    'claude-3-opus': 0.000015,
    'claude-3-sonnet': 0.000003,
    'custom-model': 0.00001
  }
  
  return (tokens * (costPerToken[model.id] || 0.00001)).toFixed(6)
}
