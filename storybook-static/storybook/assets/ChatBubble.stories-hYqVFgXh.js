import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BcgDCPwT.js";import"./preload-helper-D9Z9MdNV.js";const a=({message:c="This is a sample message",isUser:s=!1,timestamp:p="2 minutes ago",showCopyButton:l=!0,onCopy:u=()=>console.log("Copy clicked")})=>e.jsxs("div",{className:`flex ${s?"justify-end":"justify-start"} mb-4 max-w-2xl`,children:[e.jsxs("div",{className:`max-w-3xl ${s?"order-2":"order-1"}`,children:[e.jsx("div",{className:`px-4 py-3 rounded-lg ${s?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}`,children:e.jsx("p",{className:"text-sm whitespace-pre-wrap",children:c})}),e.jsxs("div",{className:`flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400 ${s?"justify-end":"justify-start"}`,children:[e.jsx("span",{children:p}),!s&&l&&e.jsx("button",{onClick:u,className:"ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200",children:"Copy"})]})]}),e.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${s?"bg-blue-600 text-white order-1 ml-2":"bg-gray-500 text-white order-2 mr-2"}`,children:s?"U":"AI"})]}),y={title:"Components/ChatBubble",component:a,parameters:{layout:"centered"},argTypes:{message:{control:{type:"text"}},isUser:{control:{type:"boolean"}},timestamp:{control:{type:"text"}},showCopyButton:{control:{type:"boolean"}}}},t={args:{message:"Hello! Can you help me with a coding question?",isUser:!0,timestamp:"Just now"}},n={args:{message:"Of course! I'd be happy to help you with your coding question. What would you like to know?",isUser:!1,timestamp:"1 minute ago"}},r={args:{message:"This is a much longer message that demonstrates how the chat bubble handles content that spans multiple lines. It shows the proper text wrapping and spacing that makes conversations easy to read and follow.",isUser:!1,timestamp:"3 minutes ago"}},o={args:{message:`Here's a simple React component:

\`\`\`jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

This component takes a name prop and displays a personalized greeting.`,isUser:!1,timestamp:"5 minutes ago"}},i={args:{message:"OK!",isUser:!0,timestamp:"Just now"}},m={render:()=>e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsx(a,{message:"Hi there! I need help with JavaScript.",isUser:!0,timestamp:"Just now"}),e.jsx(a,{message:"Hello! I'd be happy to help you with JavaScript. What specific question do you have?",isUser:!1,timestamp:"1 minute ago"}),e.jsx(a,{message:"How do I use async/await properly?",isUser:!0,timestamp:"2 minutes ago"}),e.jsx(a,{message:"Great question! Async/await is a way to handle asynchronous operations in JavaScript. Here's a simple example:\\n\\n```javascript\\nasync function fetchData() {\\n  try {\\n    const response = await fetch('https://api.example.com/data');\\n    const data = await response.json();\\n    return data;\\n  } catch (error) {\\n    console.error('Error:', error);\\n  }\\n}\\n```\\n\\nThe `async` keyword makes a function return a Promise, and `await` pauses execution until the Promise resolves.",isUser:!1,timestamp:"3 minutes ago"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Hello! Can you help me with a coding question?',
    isUser: true,
    timestamp: 'Just now'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Of course! I\\'d be happy to help you with your coding question. What would you like to know?',
    isUser: false,
    timestamp: '1 minute ago'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is a much longer message that demonstrates how the chat bubble handles content that spans multiple lines. It shows the proper text wrapping and spacing that makes conversations easy to read and follow.',
    isUser: false,
    timestamp: '3 minutes ago'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: 'Here\\'s a simple React component:\\n\\n```jsx\\nfunction Greeting({ name }) {\\n  return <h1>Hello, {name}!</h1>;\\n}\\n```\\n\\nThis component takes a name prop and displays a personalized greeting.',\n    isUser: false,\n    timestamp: '5 minutes ago'\n  }\n}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'OK!',
    isUser: true,
    timestamp: 'Just now'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl space-y-4">\r
      <ChatBubble message="Hi there! I need help with JavaScript." isUser={true} timestamp="Just now" />\r
      <ChatBubble message="Hello! I'd be happy to help you with JavaScript. What specific question do you have?" isUser={false} timestamp="1 minute ago" />\r
      <ChatBubble message="How do I use async/await properly?" isUser={true} timestamp="2 minutes ago" />\r
      <ChatBubble message="Great question! Async/await is a way to handle asynchronous operations in JavaScript. Here's a simple example:\\n\\n\`\`\`javascript\\nasync function fetchData() {\\n  try {\\n    const response = await fetch('https://api.example.com/data');\\n    const data = await response.json();\\n    return data;\\n  } catch (error) {\\n    console.error('Error:', error);\\n  }\\n}\\n\`\`\`\\n\\nThe \`async\` keyword makes a function return a Promise, and \`await\` pauses execution until the Promise resolves." isUser={false} timestamp="3 minutes ago" />\r
    </div>
}`,...m.parameters?.docs?.source}}};const w=["UserMessage","AIMessage","LongMessage","CodeMessage","ShortMessage","Conversation"];export{n as AIMessage,o as CodeMessage,m as Conversation,r as LongMessage,i as ShortMessage,t as UserMessage,w as __namedExportsOrder,y as default};
