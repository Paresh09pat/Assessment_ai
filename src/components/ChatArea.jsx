import { useState, useEffect } from 'react'
import { mockApi } from '../services/mockApi'
import { exportConversation, exportConversations, exportFormats, downloadFile } from '../utils/exportUtils'

const ChatBubble = ({ message, isUser, timestamp, onCopy, metadata }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(message)
    onCopy()
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-3xl ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-lg ${
            isUser
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message}</p>
        </div>
        <div className={`flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400 ${isUser ? 'justify-end' : 'justify-start'}`}>
          <span>{timestamp}</span>
          {!isUser && (
            <button
              onClick={handleCopy}
              className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Copy
            </button>
          )}
        </div>
        {metadata && !isUser && (
          <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            <span className="mr-3">Model: {metadata.model}</span>
            <span className="mr-3">Tokens: {metadata.tokensUsed}</span>
            <span>Cost: ${metadata.cost}</span>
          </div>
        )}
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
        isUser
          ? 'bg-blue-600 text-white order-1 ml-2'
          : 'bg-gray-500 text-white order-2 mr-2'
      }`}>
        {isUser ? 'U' : 'AI'}
      </div>
    </div>
  )
}

const ChatArea = () => {
  const [conversations, setConversations] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState('')
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [selectedModel, setSelectedModel] = useState('gpt-4')
  const [parameters, setParameters] = useState({
    temperature: 0.7,
    maxTokens: 1000,
    topP: 1.0,
    frequencyPenalty: 0.0,
    presencePenalty: 0.0
  })
  const [showExportMenu, setShowExportMenu] = useState(false)

  // Load conversation history on component mount
  useEffect(() => {
    loadConversationHistory()
  }, [])

  // Close export menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showExportMenu && !event.target.closest('.export-menu')) {
        setShowExportMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showExportMenu])

  const loadConversationHistory = async () => {
    try {
      const result = await mockApi.getConversationHistory()
      if (result.success) {
        setConversations(result.data)
      }
    } catch (error) {
      console.error('Failed to load conversation history:', error)
    }
  }

  const handleCopy = () => {
    setCopyFeedback('Copied!')
    setTimeout(() => setCopyFeedback(''), 2000)
  }

  const handleDownloadConversation = (conversation) => {
    const data = {
      prompt: conversation.prompt,
      response: conversation.response,
      timestamp: conversation.timestamp,
      model: conversation.model || "GPT-4",
      parameters: conversation.parameters || parameters,
      tokensUsed: conversation.tokensUsed,
      cost: conversation.cost
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `conversation-${conversation.id}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateResponse = async () => {
    if (!currentPrompt.trim()) return

    setIsGenerating(true)
    
    try {
      const result = await mockApi.generateResponse(currentPrompt, selectedModel, parameters)
      
      if (result.success) {
        const newConversation = {
          ...result.data,
          timestamp: "Just now"
        }
        
        setConversations(prev => [newConversation, ...prev])
        setCurrentPrompt('')
        
        // Save conversation
        await mockApi.saveConversation(newConversation)
      }
    } catch (error) {
      console.error('Failed to generate response:', error)
      // Add error conversation
      const errorConversation = {
        id: Date.now(),
        prompt: currentPrompt,
        response: "Sorry, I encountered an error while generating your response. Please try again.",
        timestamp: "Just now",
        model: "Error",
        parameters,
        tokensUsed: 0,
        cost: 0
      }
      setConversations(prev => [errorConversation, ...prev])
    } finally {
      setIsGenerating(false)
    }
  }

  const simulateResponse = () => {
    if (!currentPrompt.trim()) {
      setCurrentPrompt("Tell me a joke about programming")
    }
    generateResponse()
  }

  const handleExportAll = (format) => {
    try {
      const { blob, filename } = exportConversations(conversations, format)
      downloadFile(blob, filename)
      setShowExportMenu(false)
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  const handleExportSingle = (conversation, format) => {
    try {
      const { blob, filename } = exportConversation(conversation, format)
      downloadFile(blob, filename)
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Chat & Output
        </h3>
        <div className="flex items-center space-x-2">
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="claude-3-opus">Claude 3 Opus</option>
            <option value="claude-3-sonnet">Claude 3 Sonnet</option>
            <option value="custom-model">Custom Model</option>
          </select>
          <button
            onClick={simulateResponse}
            disabled={isGenerating}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isGenerating ? 'Generating...' : 'Simulate Response'}
          </button>
          {conversations.length > 0 && (
            <div className="relative export-menu">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Export All
              </button>
              {showExportMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                  <div className="py-1">
                    <button
                      onClick={() => handleExportAll(exportFormats.JSON)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Export as JSON
                    </button>
                    <button
                      onClick={() => handleExportAll(exportFormats.CSV)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Export as CSV
                    </button>
                    <button
                      onClick={() => handleExportAll(exportFormats.MARKDOWN)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Export as Markdown
                    </button>
                    <button
                      onClick={() => handleExportAll(exportFormats.TEXT)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Export as Text
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Prompt Input */}
      <div className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={currentPrompt}
            onChange={(e) => setCurrentPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="flex-1 px-3 py-2 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && generateResponse()}
          />
          <button
            onClick={generateResponse}
            disabled={isGenerating || !currentPrompt.trim()}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isGenerating ? 'Generating...' : 'Send'}
          </button>
        </div>
      </div>

      {copyFeedback && (
        <div className="mb-4 p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-sm text-center">
          {copyFeedback}
        </div>
      )}

      {isGenerating && (
        <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-blue-800 dark:text-blue-200">AI is thinking...</span>
          </div>
        </div>
      )}

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Conversation #{conversation.id}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleExportSingle(conversation, exportFormats.JSON)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  JSON
                </button>
                <button
                  onClick={() => handleExportSingle(conversation, exportFormats.MARKDOWN)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  MD
                </button>
                <button
                  onClick={() => handleExportSingle(conversation, exportFormats.CSV)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  CSV
                </button>
              </div>
            </div>
            
            <ChatBubble
              message={conversation.prompt}
              isUser={true}
              timestamp={conversation.timestamp}
              onCopy={handleCopy}
            />
            
            <ChatBubble
              message={conversation.response}
              isUser={false}
              timestamp={conversation.timestamp}
              onCopy={handleCopy}
              metadata={{
                model: conversation.model,
                tokensUsed: conversation.tokensUsed,
                cost: conversation.cost
              }}
            />
          </div>
        ))}
      </div>

      {conversations.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <p>No conversations yet. Start by entering a prompt above!</p>
        </div>
      )}
    </div>
  )
}

export default ChatArea
