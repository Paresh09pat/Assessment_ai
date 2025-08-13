import { useState } from 'react'
import { defaultParameters } from '../data/mockData'

const ParameterSlider = ({ label, value, min, max, step, onChange, description }) => (
  <div className="mb-4 ">
    <div className="flex items-center justify-between mb-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <span className="text-sm text-gray-500 dark:text-gray-400 ">
        {value}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
    />
    {description && (
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {description}
      </p>
    )}
  </div>
)

const ParametersPanel = ({ onParametersChange, initialParameters = defaultParameters }) => {
  const [parameters, setParameters] = useState(initialParameters)

  const handleParameterChange = (key, value) => {
    const newParameters = {
      ...parameters,
      [key]: value
    }
    setParameters(newParameters)
    
    // Notify parent component of parameter changes
    if (onParametersChange) {
      onParametersChange(newParameters)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Model Parameters
      </h3>
      
      <ParameterSlider
        label="Temperature"
        value={parameters.temperature}
        min={0}
        max={2}
        step={0.1}
        onChange={(value) => handleParameterChange('temperature', value)}
        description="Controls randomness: 0 = focused, 2 = creative"
      />
      
      <ParameterSlider
        label="Max Tokens"
        value={parameters.maxTokens}
        min={100}
        max={4000}
        step={100}
        onChange={(value) => handleParameterChange('maxTokens', value)}
        description="Maximum length of the response"
      />
      
      <ParameterSlider
        label="Top P"
        value={parameters.topP}
        min={0}
        max={1}
        step={0.05}
        onChange={(value) => handleParameterChange('topP', value)}
        description="Nucleus sampling: 0.1 = focused, 1.0 = diverse"
      />
      
      <ParameterSlider
        label="Frequency Penalty"
        value={parameters.frequencyPenalty}
        min={-2}
        max={2}
        step={0.1}
        onChange={(value) => handleParameterChange('frequencyPenalty', value)}
        description="Reduces repetition of common words"
      />
      
      <ParameterSlider
        label="Presence Penalty"
        value={parameters.presencePenalty}
        min={-2}
        max={2}
        step={0.1}
        onChange={(value) => handleParameterChange('presencePenalty', value)}
        description="Encourages new topics and concepts"
      />

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setParameters(defaultParameters)}
          className="w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  )
}

export default ParametersPanel
