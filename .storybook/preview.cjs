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
      order: ['Home', ['Installation', 'GitHub', 'Upgrading', 'Themes'], '*']
    }
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: { hidden: true },
  },
}
