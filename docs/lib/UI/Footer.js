/* eslint jsx-a11y/iframe-has-title: 0 */
import React from 'react';
import { Container } from 'reactstrap';

export default () => (
  <footer className="footer">
    <Container>
      <p className="text-center social">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=reactstrap&repo=reactstrap&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="100"
          height="20px"
        />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=reactstrap&repo=reactstrap&type=fork&count=true"
          frameBorder="0"
          scrolling="0"
          width="100"
          height="20px"
        />
      </p>
    </Container>
  </footer>
);
