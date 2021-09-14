import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Reactstrap',
  brandUrl: '/',
  brandImage: 'logo.svg',
});

addons.setConfig({
  theme
});
