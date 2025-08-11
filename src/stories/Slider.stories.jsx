import React, { useState } from 'react'

const ParameterSlider = ({ 
  label = 'Parameter', 
  min = 0, 
  max = 100, 
  step = 1, 
  defaultValue = 50,
  showDescription = true,
  description = 'This is a parameter slider with customizable range and step values.'
}) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className="w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {value}
          </span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        {showDescription && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default {
  title: 'Components/Slider',
  component: ParameterSlider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    defaultValue: {
      control: { type: 'number' },
    },
    showDescription: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  args: {
    label: 'Temperature',
    min: 0,
    max: 2,
    step: 0.1,
    defaultValue: 0.7,
    description: 'Controls randomness: 0 = focused, 2 = creative',
  },
}

export const MaxTokens = {
  args: {
    label: 'Max Tokens',
    min: 100,
    max: 4000,
    step: 100,
    defaultValue: 1000,
    description: 'Maximum length of the response',
  },
}

export const TopP = {
  args: {
    label: 'Top P',
    min: 0,
    max: 1,
    step: 0.05,
    defaultValue: 1.0,
    description: 'Nucleus sampling: 0.1 = focused, 1.0 = diverse',
  },
}

export const FrequencyPenalty = {
  args: {
    label: 'Frequency Penalty',
    min: -2,
    max: 2,
    step: 0.1,
    defaultValue: 0.0,
    description: 'Reduces repetition of common words',
  },
}

export const NoDescription = {
  args: {
    label: 'Simple Slider',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    showDescription: false,
  },
}

export const AllSliders = {
  render: () => (
    <div className="space-y-6">
      <ParameterSlider
        label="Temperature"
        min={0}
        max={2}
        step={0.1}
        defaultValue={0.7}
        description="Controls randomness: 0 = focused, 2 = creative"
      />
      <ParameterSlider
        label="Max Tokens"
        min={100}
        max={4000}
        step={100}
        defaultValue={1000}
        description="Maximum length of the response"
      />
      <ParameterSlider
        label="Top P"
        min={0}
        max={1}
        step={0.05}
        defaultValue={1.0}
        description="Nucleus sampling: 0.1 = focused, 1.0 = diverse"
      />
    </div>
  ),
}
