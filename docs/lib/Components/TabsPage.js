/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import TabsExample from '../examples/Tabs';
const TabsExampleSource = require('!!raw!../examples/Tabs');

export default function TabsPage() {
  return (
    <div>
      <PageTitle title="Tabs" />
      <hr />
      <div className="docs-example">
        <TabsExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {TabsExampleSource}
        </PrismCode>
      </pre>
    </div>
  );
}
