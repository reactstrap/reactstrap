export default {
  title: 'Components/Nav',
  parameters: {
    docs: {
      description: {
        component: `
  [Bootstrap Navs](https://getbootstrap.com/docs/5.1/components/navs-tabs/)
  
  Bootstrap’s navigation components.
  `
      }
    }
  }
};

export { default as Navs } from './examples/Navs';
export { default as Pills } from './examples/NavPills';
export { default as Tabs } from './examples/NavTabs';
export { default as TabPane } from './examples/Tabs';
export { default as Vertical } from './examples/NavVertical';
export { default as Props } from './examples/NavProps';