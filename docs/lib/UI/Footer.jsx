import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col className="text-xs-center">
            <p>
              <iframe src="https://ghbtns.com/github-btn.html?user=reactstrap&repo=reactstrap&type=star&count=true" frameBorder="0" scrolling="0" width="100" height="20px"/>
              <iframe src="https://ghbtns.com/github-btn.html?user=reactstrap&repo=reactstrap&type=fork&count=true" frameBorder="0" scrolling="0" width="100" height="20px"/>
            </p>
            <p className="social"><a href="https://travis-ci.org/reactstrap/reactstrap"><img src="https://travis-ci.org/reactstrap/reactstrap.svg?branch=master" alt="Build Status"/></a> <a href="https://coveralls.io/github/reactstrap/reactstrap?branch=master"><img src="https://coveralls.io/repos/github/reactstrap/reactstrap/badge.svg?branch=master" alt="Coverage Status"/></a> <a href="https://www.npmjs.com/package/reactstrap"><img src="https://badge.fury.io/js/reactstrap.svg" alt="npm version" height="20"/></a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
