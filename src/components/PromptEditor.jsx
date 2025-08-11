import { useState } from 'react'
import { templates } from '../data/mockData'

const PromptEditor = () => {
  const [prompt, setPrompt] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [savedPrompts, setSavedPrompts] = useState([])
  const [promptName, setPromptName] = useState('')

  const handleTemplateSelect = (templateId) => {
    const template = templates.find(t => t.id === templateId)
    if (template) {
      setPrompt(template.prompt)
      setSelectedTemplate(templateId)
    }
  }

  const handleSavePrompt = () => {
    if (promptName.trim() && prompt.trim()) {
      const newPrompt = {
        id: Date.now(),
        name: promptName,
        prompt: prompt,
        timestamp: new Date().toISOString()
      }
      setSavedPrompts(prev => [...prev, newPrompt])
      setPromptName('')
    }
  }

  const handleLoadPrompt = (savedPrompt) => {
    setPrompt(savedPrompt.prompt)
    setPromptName(savedPrompt.name)
  }

  const handleDownloadJSON = () => {
    const data = {
      prompt,
      timestamp: new Date().toISOString(),
      parameters: {
        temperature: 0.7,
        maxTokens: 1000
      }
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `prompt-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Prompt Editor
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={handleDownloadJSON}
            className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          >
            Download JSON
          </button>
        </div>
      </div>

      {/* Template Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Quick Templates
        </label>
        <div className="flex flex-wrap gap-2">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleTemplateSelect(template.id)}
              className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200 ${
                selectedTemplate === template.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {template.name}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Your Prompt
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full h-32 px-3 py-2 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      {/* Save Prompt */}
      <div className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={promptName}
            onChange={(e) => setPromptName(e.target.value)}
            placeholder="Prompt name"
            className="flex-1 px-3 py-2 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleSavePrompt}
            disabled={!promptName.trim() || !prompt.trim()}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>

      {/* Saved Prompts */}
      {savedPrompts.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Saved Prompts
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {savedPrompts.map((savedPrompt) => (
              <div
                key={savedPrompt.id}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-md"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {savedPrompt.name}
                </span>
                <button
                  onClick={() => handleLoadPrompt(savedPrompt)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Load
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PromptEditor
