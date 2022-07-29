export default {
  title: 'Components/Navbar',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Navbar](https://getbootstrap.com/docs/5.1/components/navbar/)
  
  Bootstrap’s powerful, responsive navigation header. Includes support for branding, navigation, and more.
  `,
      },
    },
  },
};

export { default as Navbar } from './examples/Navbar/Navbar';
export { default as Brand } from './examples/Navbar/Brand';
export { default as NavbarToggler } from './examples/Navbar/Toggler';
export { default as Props } from './examples/Navbar/Props';
