import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  args: {
    children: 'Button',
  },
}

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const Success = {
  args: {
    children: 'Success Button',
    variant: 'success',
  },
}

export const Danger = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
}

export const Small = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

export const Large = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
}

export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const AllVariants = {
  render: () => (
    <div className="space-x-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}
