import React from 'react'

const ChatBubble = ({ 
  message = 'This is a sample message', 
  isUser = false, 
  timestamp = '2 minutes ago',
  showCopyButton = true,
  onCopy = () => console.log('Copy clicked')
}) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 max-w-2xl`}>
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
          {!isUser && showCopyButton && (
            <button
              onClick={onCopy}
              className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Copy
            </button>
          )}
        </div>
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

export default {
  title: 'Components/ChatBubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: {
      control: { type: 'text' },
    },
    isUser: {
      control: { type: 'boolean' },
    },
    timestamp: {
      control: { type: 'text' },
    },
    showCopyButton: {
      control: { type: 'boolean' },
    },
  },
}

export const UserMessage = {
  args: {
    message: 'Hello! Can you help me with a coding question?',
    isUser: true,
    timestamp: 'Just now',
  },
}

export const AIMessage = {
  args: {
    message: 'Of course! I\'d be happy to help you with your coding question. What would you like to know?',
    isUser: false,
    timestamp: '1 minute ago',
  },
}

export const LongMessage = {
  args: {
    message: 'This is a much longer message that demonstrates how the chat bubble handles content that spans multiple lines. It shows the proper text wrapping and spacing that makes conversations easy to read and follow.',
    isUser: false,
    timestamp: '3 minutes ago',
  },
}

export const CodeMessage = {
  args: {
    message: 'Here\'s a simple React component:\n\n```jsx\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n```\n\nThis component takes a name prop and displays a personalized greeting.',
    isUser: false,
    timestamp: '5 minutes ago',
  },
}

export const ShortMessage = {
  args: {
    message: 'OK!',
    isUser: true,
    timestamp: 'Just now',
  },
}

export const Conversation = {
  render: () => (
    <div className="w-full max-w-4xl space-y-4">
      <ChatBubble
        message="Hi there! I need help with JavaScript."
        isUser={true}
        timestamp="Just now"
      />
      <ChatBubble
        message="Hello! I'd be happy to help you with JavaScript. What specific question do you have?"
        isUser={false}
        timestamp="1 minute ago"
      />
      <ChatBubble
        message="How do I use async/await properly?"
        isUser={true}
        timestamp="2 minutes ago"
      />
      <ChatBubble
        message="Great question! Async/await is a way to handle asynchronous operations in JavaScript. Here's a simple example:\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n```\n\nThe `async` keyword makes a function return a Promise, and `await` pauses execution until the Promise resolves."
        isUser={false}
        timestamp="3 minutes ago"
      />
    </div>
  ),
}
