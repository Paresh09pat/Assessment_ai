import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BcgDCPwT.js";import"./preload-helper-D9Z9MdNV.js";const e=({children:m,variant:g="primary",size:p="md",disabled:l=!1,...y})=>{const h="font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200",B={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300",success:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"},v={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"},S=l?"opacity-50 cursor-not-allowed":"";return r.jsx("button",{className:`${h} ${B[g]} ${v[p]} ${S}`,disabled:l,...y,children:m})},D={title:"Components/Button",component:e,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}}}},s={args:{children:"Button"}},a={args:{children:"Primary Button",variant:"primary"}},n={args:{children:"Secondary Button",variant:"secondary"}},t={args:{children:"Success Button",variant:"success"}},o={args:{children:"Danger Button",variant:"danger"}},c={args:{children:"Small Button",size:"sm"}},i={args:{children:"Large Button",size:"lg"}},d={args:{children:"Disabled Button",disabled:!0}},u={render:()=>r.jsxs("div",{className:"space-x-4",children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"success",children:"Success"}),r.jsx(e,{variant:"danger",children:"Danger"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Success Button',
    variant: 'success'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    variant: 'danger'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-x-4">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="success">Success</Button>\r
      <Button variant="danger">Danger</Button>\r
    </div>
}`,...u.parameters?.docs?.source}}};const j=["Default","Primary","Secondary","Success","Danger","Small","Large","Disabled","AllVariants"];export{u as AllVariants,o as Danger,s as Default,d as Disabled,i as Large,a as Primary,n as Secondary,c as Small,t as Success,j as __namedExportsOrder,D as default};
