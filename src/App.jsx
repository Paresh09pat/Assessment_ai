import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'
import ModelSelector from './components/ModelSelector'
import PromptEditor from './components/PromptEditor'
import ParametersPanel from './components/ParametersPanel'
import ChatArea from './components/ChatArea'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import { models, defaultParameters } from './data/mockData'

function App() {
  const [selectedModel, setSelectedModel] = useState(models[0])
  const [parameters, setParameters] = useState(defaultParameters)

  const handleModelChange = (model) => {
    setSelectedModel(model)
  }

  const handleParametersChange = (newParameters) => {
    setParameters(newParameters)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 py-6">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                AI Interface Pro
              </h1>
              <ThemeToggle />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Advanced AI model interface with customizable parameters and templates
            </p>
            <div className="mt-2">
              <a
                href="/storybook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Component Library
              </a>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <ModelSelector 
                onModelChange={handleModelChange}
                initialModel={selectedModel}
              />
              <ParametersPanel 
                onParametersChange={handleParametersChange}
                initialParameters={parameters}
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <PromptEditor />
              <ChatArea 
                selectedModel={selectedModel.id}
                parameters={parameters}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
