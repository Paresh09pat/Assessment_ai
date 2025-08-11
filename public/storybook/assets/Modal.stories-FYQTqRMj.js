import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-19Tryois.js";import"./preload-helper-D9Z9MdNV.js";const u=({title:t="Modal Title",content:c="This is the modal content. You can put any text or components here.",showCloseButton:m=!0,size:s="md",isOpen:g=!0,onClose:a=()=>console.log("Modal closed"),children:p})=>{if(!g)return null;const x={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl"};return e.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:e.jsxs("div",{className:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",onClick:a}),e.jsxs("div",{className:`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${x[s]} w-full`,children:[e.jsx("div",{className:"bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white",children:t}),m&&e.jsxs("button",{onClick:a,className:"bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]})}),e.jsx("div",{className:"px-4 py-5 sm:p-6",children:p||e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:c})}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[e.jsx("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:a,children:"Confirm"}),e.jsx("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:a,children:"Cancel"})]})]})]})})},r=({children:t,...c})=>{const[m,s]=h.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>s(!0),className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",children:"Open Modal"}),e.jsx(u,{...c,isOpen:m,onClose:()=>s(!1),children:t})]})},j={title:"Components/Modal",component:u,parameters:{layout:"centered"},argTypes:{title:{control:{type:"text"}},content:{control:{type:"text"}},showCloseButton:{control:{type:"boolean"}},size:{control:{type:"select"},options:["sm","md","lg","xl"]}}},o={render:t=>e.jsx(r,{...t}),args:{title:"Confirmation",content:"Are you sure you want to proceed with this action?"}},n={render:t=>e.jsx(r,{...t}),args:{title:"Large Modal",content:"This is a large modal that can accommodate more content and is useful for displaying forms or detailed information.",size:"lg"}},l={render:t=>e.jsx(r,{...t}),args:{title:"Small Modal",content:"This is a small modal for simple confirmations.",size:"sm"}},d={render:t=>e.jsx(r,{...t,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:"This modal contains custom content with multiple elements."}),e.jsx("div",{className:"bg-gray-100 dark:bg-gray-700 p-3 rounded-md",children:e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Custom content area with different styling"})}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("input",{type:"text",placeholder:"Enter some text...",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm"}),e.jsx("button",{className:"px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700",children:"Submit"})]})]})}),args:{title:"Custom Content Modal",size:"lg"}},i={render:t=>e.jsx(r,{...t}),args:{title:"No Close Button",content:"This modal doesn't have a close button in the header.",showCloseButton:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Confirmation',
    content: 'Are you sure you want to proceed with this action?'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    content: 'This is a large modal that can accommodate more content and is useful for displaying forms or detailed information.',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Small Modal',
    content: 'This is a small modal for simple confirmations.',
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>\r
      <div className="space-y-4">\r
        <p className="text-sm text-gray-700 dark:text-gray-300">\r
          This modal contains custom content with multiple elements.\r
        </p>\r
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">\r
          <p className="text-xs text-gray-600 dark:text-gray-400">\r
            Custom content area with different styling\r
          </p>\r
        </div>\r
        <div className="flex space-x-2">\r
          <input type="text" placeholder="Enter some text..." className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm" />\r
          <button className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700">\r
            Submit\r
          </button>\r
        </div>\r
      </div>\r
    </ModalWrapper>,
  args: {
    title: 'Custom Content Modal',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'No Close Button',
    content: 'This modal doesn\\'t have a close button in the header.',
    showCloseButton: false
  }
}`,...i.parameters?.docs?.source}}};const w=["Default","LargeModal","SmallModal","WithCustomContent","NoCloseButton"];export{o as Default,n as LargeModal,i as NoCloseButton,l as SmallModal,d as WithCustomContent,w as __namedExportsOrder,j as default};
