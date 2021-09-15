export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      date: /Date$/
    },
  },
  options: {
    storySort: {
      order: ['Home', '*']
    }
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
  },
}
