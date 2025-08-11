// Export utilities for conversation data

export const exportFormats = {
  JSON: 'json',
  CSV: 'csv',
  MARKDOWN: 'md',
  TEXT: 'txt'
}

export const exportConversation = (conversation, format = 'json') => {
  switch (format) {
    case 'json':
      return exportAsJSON(conversation)
    case 'csv':
      return exportAsCSV(conversation)
    case 'md':
      return exportAsMarkdown(conversation)
    case 'txt':
      return exportAsText(conversation)
    default:
      return exportAsJSON(conversation)
  }
}

export const exportConversations = (conversations, format = 'json') => {
  switch (format) {
    case 'json':
      return exportMultipleAsJSON(conversations)
    case 'csv':
      return exportMultipleAsCSV(conversations)
    case 'md':
      return exportMultipleAsMarkdown(conversations)
    case 'txt':
      return exportMultipleAsText(conversations)
    default:
      return exportMultipleAsJSON(conversations)
  }
}

const exportAsJSON = (conversation) => {
  const data = {
    conversation,
    exportedAt: new Date().toISOString(),
    version: '1.0'
  }
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { 
    type: 'application/json' 
  })
  
  return {
    blob,
    filename: `conversation-${conversation.id}-${Date.now()}.json`
  }
}

const exportAsCSV = (conversation) => {
  const csvContent = [
    ['ID', 'Prompt', 'Response', 'Model', 'Timestamp', 'Tokens', 'Cost'],
    [
      conversation.id,
      `"${conversation.prompt.replace(/"/g, '""')}"`,
      `"${conversation.response.replace(/"/g, '""')}"`,
      conversation.model,
      conversation.timestamp,
      conversation.tokensUsed || 0,
      conversation.cost || 0
    ]
  ].map(row => row.join(',')).join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv' })
  
  return {
    blob,
    filename: `conversation-${conversation.id}-${Date.now()}.csv`
  }
}

const exportAsMarkdown = (conversation) => {
  const mdContent = `# Conversation ${conversation.id}

**Model:** ${conversation.model}
**Timestamp:** ${conversation.timestamp}
**Tokens Used:** ${conversation.tokensUsed || 0}
**Cost:** $${conversation.cost || 0}

## Prompt
${conversation.prompt}

## Response
${conversation.response}

---
*Exported on ${new Date().toLocaleString()}*
`
  
  const blob = new Blob([mdContent], { type: 'text/markdown' })
  
  return {
    blob,
    filename: `conversation-${conversation.id}-${Date.now()}.md`
  }
}

const exportAsText = (conversation) => {
  const textContent = `Conversation ${conversation.id}
Model: ${conversation.model}
Timestamp: ${conversation.timestamp}
Tokens Used: ${conversation.tokensUsed || 0}
Cost: $${conversation.cost || 0}

PROMPT:
${conversation.prompt}

RESPONSE:
${conversation.response}

---
Exported on ${new Date().toLocaleString()}
`
  
  const blob = new Blob([textContent], { type: 'text/plain' })
  
  return {
    blob,
    filename: `conversation-${conversation.id}-${Date.now()}.txt`
  }
}

const exportMultipleAsJSON = (conversations) => {
  const data = {
    conversations,
    exportedAt: new Date().toISOString(),
    version: '1.0',
    totalConversations: conversations.length
  }
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { 
    type: 'application/json' 
  })
  
  return {
    blob,
    filename: `conversations-${Date.now()}.json`
  }
}

const exportMultipleAsCSV = (conversations) => {
  const csvContent = [
    ['ID', 'Prompt', 'Response', 'Model', 'Timestamp', 'Tokens', 'Cost'],
    ...conversations.map(conv => [
      conv.id,
      `"${conv.prompt.replace(/"/g, '""')}"`,
      `"${conv.response.replace(/"/g, '""')}"`,
      conv.model,
      conv.timestamp,
      conv.tokensUsed || 0,
      conv.cost || 0
    ])
  ].map(row => row.join(',')).join('\n')
  
  const blob = new Blob([csvContent], { type: 'text/csv' })
  
  return {
    blob,
    filename: `conversations-${Date.now()}.csv`
  }
}

const exportMultipleAsMarkdown = (conversations) => {
  const mdContent = `# Conversations Export

**Total Conversations:** ${conversations.length}
**Exported:** ${new Date().toLocaleString()}

${conversations.map((conv, index) => `
## Conversation ${index + 1} (ID: ${conv.id})

**Model:** ${conv.model}
**Timestamp:** ${conv.timestamp}
**Tokens Used:** ${conv.tokensUsed || 0}
**Cost:** $${conv.cost || 0}

### Prompt
${conv.prompt}

### Response
${conv.response}

---
`).join('')}
`
  
  const blob = new Blob([mdContent], { type: 'text/markdown' })
  
  return {
    blob,
    filename: `conversations-${Date.now()}.md`
  }
}

const exportMultipleAsText = (conversations) => {
  const textContent = `CONVERSATIONS EXPORT
Total Conversations: ${conversations.length}
Exported: ${new Date().toLocaleString()}

${conversations.map((conv, index) => `
CONVERSATION ${index + 1} (ID: ${conv.id})
Model: ${conv.model}
Timestamp: ${conv.timestamp}
Tokens Used: ${conv.tokensUsed || 0}
Cost: $${conv.cost || 0}

PROMPT:
${conv.prompt}

RESPONSE:
${conv.response}

---
`).join('')}
`
  
  const blob = new Blob([textContent], { type: 'text/plain' })
  
  return {
    blob,
    filename: `conversations-${Date.now()}.txt`
  }
}

// Download utility
export const downloadFile = (blob, filename) => {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
