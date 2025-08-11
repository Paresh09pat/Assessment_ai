import React, { useState } from 'react'

const Modal = ({ 
  title = 'Modal Title', 
  content = 'This is the modal content. You can put any text or components here.',
  showCloseButton = true,
  size = 'md',
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  children
}) => {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${sizeClasses[size]} w-full`}>
          {/* Header */}
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="px-4 py-5 sm:p-6">
            {children || <p className="text-sm text-gray-700 dark:text-gray-300">{content}</p>}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Confirm
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ModalWrapper = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true)
  
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Open Modal
      </button>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </div>
  )
}

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
}

export const Default = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirmation',
    content: 'Are you sure you want to proceed with this action?',
  },
}

export const LargeModal = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    content: 'This is a large modal that can accommodate more content and is useful for displaying forms or detailed information.',
    size: 'lg',
  },
}

export const SmallModal = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Small Modal',
    content: 'This is a small modal for simple confirmations.',
    size: 'sm',
  },
}

export const WithCustomContent = {
  render: (args) => (
    <ModalWrapper {...args}>
      <div className="space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          This modal contains custom content with multiple elements.
        </p>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Custom content area with different styling
          </p>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter some text..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm"
          />
          <button className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">
            Submit
          </button>
        </div>
      </div>
    </ModalWrapper>
  ),
  args: {
    title: 'Custom Content Modal',
    size: 'lg',
  },
}

export const NoCloseButton = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'No Close Button',
    content: 'This modal doesn\'t have a close button in the header.',
    showCloseButton: false,
  },
}
