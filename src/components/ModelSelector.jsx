import { useState } from 'react'
import { models } from '../data/mockData'

const ModelSelector = ({ onModelChange, initialModel = models[0] }) => {
  const [selectedModel, setSelectedModel] = useState(initialModel)
  const [isOpen, setIsOpen] = useState(false)

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    setIsOpen(false)
    
    // Notify parent component of model selection
    if (onModelChange) {
      onModelChange(model)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        Model Selection
      </h3>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedModel.name}</span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => handleModelSelect(model)}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 focus:outline-none transition-colors duration-150"
              >
                <div className="font-medium">{model.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{model.description}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedModel && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="mb-2">
              <span className="font-medium">Max Tokens:</span> {selectedModel.maxTokens.toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Pricing:</span> {selectedModel.pricing}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModelSelector
