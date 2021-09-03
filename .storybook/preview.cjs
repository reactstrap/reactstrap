export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      state: 'open'
    }
  },
  options: {
    storySort: {
      order: ['Home', '*']
    }
  },
  viewMode: 'docs'
}
