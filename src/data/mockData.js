export const models = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'Most capable GPT model, best for complex reasoning tasks',
    maxTokens: 8192,
    pricing: '$0.03 per 1K tokens'
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    description: 'Fast and efficient, great for most everyday tasks',
    maxTokens: 4096,
    pricing: '$0.002 per 1K tokens'
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    description: 'Anthropic\'s most powerful model for complex analysis',
    maxTokens: 200000,
    pricing: '$15 per 1M tokens'
  },
  {
    id: 'claude-3-sonnet',
    name: 'Claude 3 Sonnet',
    description: 'Balanced performance and speed for most use cases',
    maxTokens: 200000,
    pricing: '$3 per 1M tokens'
  },
  {
    id: 'custom-model',
    name: 'Custom Model',
    description: 'Your own fine-tuned model with specific capabilities',
    maxTokens: 16384,
    pricing: 'Custom pricing'
  }
]

export const templates = [
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    prompt: 'Write a creative story about a character who discovers a mysterious object. The story should be engaging, descriptive, and have a surprising twist at the end.',
    category: 'Creative'
  },
  {
    id: 'code-review',
    name: 'Code Review',
    prompt: 'Review the following code for best practices, potential bugs, and improvements. Provide specific suggestions with explanations.',
    category: 'Technical'
  },
  {
    id: 'business-analysis',
    name: 'Business Analysis',
    prompt: 'Analyze the following business scenario and provide strategic recommendations. Consider market trends, competitive landscape, and potential risks.',
    category: 'Business'
  },
  {
    id: 'learning-explanation',
    name: 'Learning Explanation',
    prompt: 'Explain the following concept in simple terms that a beginner can understand. Use analogies and examples to make it clear.',
    category: 'Educational'
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    prompt: 'Help me solve this problem step by step. Break it down into manageable parts and explain your reasoning at each step.',
    category: 'Problem Solving'
  }
]

export const defaultParameters = {
  temperature: 0.7,
  maxTokens: 1000,
  topP: 1.0,
  frequencyPenalty: 0.0,
  presencePenalty: 0.0
}
