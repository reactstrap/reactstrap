export default {
  title: 'Components/Layout',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Layout](https://getbootstrap.com/docs/5.1/layout/grid/)
  
  Powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers.
  `,
      },
    },
  },
};

export { default as Layout } from './examples/Layout';
export { default as LayoutRowCols } from './examples/LayoutRowCols';
export { default as ContainerResponsive } from './examples/ContainerResponsive';
export { default as Props } from './examples/LayoutProps';
