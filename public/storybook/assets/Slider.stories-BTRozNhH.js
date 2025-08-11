import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./iframe-BcgDCPwT.js";import"./preload-helper-D9Z9MdNV.js";const l=({label:m="Parameter",min:c=0,max:d=100,step:p=1,defaultValue:u=50,showDescription:x=!0,description:g="This is a parameter slider with customizable range and step values."})=>{const[i,f]=y.useState(u);return e.jsx("div",{className:"w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:m}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:i})]}),e.jsx("input",{type:"range",min:c,max:d,step:p,value:i,onChange:b=>f(parseFloat(b.target.value)),className:"w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"}),x&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:g})]})})},V={title:"Components/Slider",component:l,parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},defaultValue:{control:{type:"number"}},showDescription:{control:{type:"boolean"}}}},a={args:{label:"Temperature",min:0,max:2,step:.1,defaultValue:.7,description:"Controls randomness: 0 = focused, 2 = creative"}},r={args:{label:"Max Tokens",min:100,max:4e3,step:100,defaultValue:1e3,description:"Maximum length of the response"}},s={args:{label:"Top P",min:0,max:1,step:.05,defaultValue:1,description:"Nucleus sampling: 0.1 = focused, 1.0 = diverse"}},t={args:{label:"Frequency Penalty",min:-2,max:2,step:.1,defaultValue:0,description:"Reduces repetition of common words"}},n={args:{label:"Simple Slider",min:0,max:100,step:1,defaultValue:50,showDescription:!1}},o={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(l,{label:"Temperature",min:0,max:2,step:.1,defaultValue:.7,description:"Controls randomness: 0 = focused, 2 = creative"}),e.jsx(l,{label:"Max Tokens",min:100,max:4e3,step:100,defaultValue:1e3,description:"Maximum length of the response"}),e.jsx(l,{label:"Top P",min:0,max:1,step:.05,defaultValue:1,description:"Nucleus sampling: 0.1 = focused, 1.0 = diverse"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Temperature',
    min: 0,
    max: 2,
    step: 0.1,
    defaultValue: 0.7,
    description: 'Controls randomness: 0 = focused, 2 = creative'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Max Tokens',
    min: 100,
    max: 4000,
    step: 100,
    defaultValue: 1000,
    description: 'Maximum length of the response'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Top P',
    min: 0,
    max: 1,
    step: 0.05,
    defaultValue: 1.0,
    description: 'Nucleus sampling: 0.1 = focused, 1.0 = diverse'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frequency Penalty',
    min: -2,
    max: 2,
    step: 0.1,
    defaultValue: 0.0,
    description: 'Reduces repetition of common words'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Simple Slider',
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    showDescription: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <ParameterSlider label="Temperature" min={0} max={2} step={0.1} defaultValue={0.7} description="Controls randomness: 0 = focused, 2 = creative" />\r
      <ParameterSlider label="Max Tokens" min={100} max={4000} step={100} defaultValue={1000} description="Maximum length of the response" />\r
      <ParameterSlider label="Top P" min={0} max={1} step={0.05} defaultValue={1.0} description="Nucleus sampling: 0.1 = focused, 1.0 = diverse" />\r
    </div>
}`,...o.parameters?.docs?.source}}};const v=["Default","MaxTokens","TopP","FrequencyPenalty","NoDescription","AllSliders"];export{o as AllSliders,a as Default,t as FrequencyPenalty,r as MaxTokens,n as NoDescription,s as TopP,v as __namedExportsOrder,V as default};
