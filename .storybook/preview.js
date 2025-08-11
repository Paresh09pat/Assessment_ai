import '../src/index.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f9fafb',
        },
        {
          name: 'dark',
          value: '#111827',
        },
      ],
    },
    // Make Storybook more permissive for embedding
    docs: {
      iframeHeight: '600px',
    },
    // Allow Storybook to be embedded
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export default preview;
