import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'Reactstrap',
  brandUrl: '/',
  brandImage: 'logo-white.svg',
});

addons.setConfig({
  theme
});
