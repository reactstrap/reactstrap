/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import Accordion from '../../../src/Accordion';
import AccordionItem from '../../../src/AccordionItem';
import AccordionHeader from '../../../src/AccordionHeader';
import AccordionBody from '../../../src/AccordionBody';

export default class AccordionPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Accordion" />
        <hr />
        <div className="docs-example">
          <Accordion>
            <AccordionItem>
              <AccordionHeader targetId="1">
                Title 1
              </AccordionHeader>
              <AccordionBody id="1">
                Body 1
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Title 2
              </AccordionHeader>
              <AccordionBody id="2">
                Body 2
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Title 3
              </AccordionHeader>
              <AccordionBody id="3">
                Body 3
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
