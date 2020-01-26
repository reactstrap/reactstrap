import React from 'react';
import { Card, Button, CardBody, CardHeader, Container, Row, Col, Jumbotron } from 'reactstrap';

export default () => {
    return (
        <div>
            <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
                <p className="lead">
                    <img src="/assets/logo.png" alt="" width="110px"/>
                </p>
                <h1>Reactstrap Themes & Templates</h1>
                <h4 className="mb-5">A collection of free and premium React templates and themes powered by Reactstrap</h4>
            </Jumbotron>
            <Container>
                <h2 className="font-weight-bold">
                    UiFort
                </h2>
                <p className="mb-4">Check out some examples that our partners from UiFort created using the Reactstrap components library.</p>
                <Row>
                    <Col md="7">
                        <Card>
                            <CardHeader className="p-3">
                                <h5 className="m-0 font-weight-bold">
                                    <a href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-pro/?ref=reactstrap.github.io" target="_blank" title="View details">
                                        Bamburgh React Admin Dashboard with Reactstrap PRO
                                    </a>
                                </h5>
                                <p className="mb-0 mt-1 text-muted">
                                    Premium React Admin Template
                                </p>
                            </CardHeader>
                            <CardBody className="p-3">
                                <a href="https://uifort.com/template/bamburgh-react-admin-dashboard-reactstrap-pro/?ref=reactstrap.github.io" target="_blank" title="View details">
                                    <img className="rounded img-fluid" src="/assets/themes/bamburgh-react-admin-dashboard-reactstrap-pro.jpg" alt=""/>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="5">
                        <Card className="h-100 mt-3 mt-lg-0 d-flex justify-content-center align-items-center text-muted">
                            <div>
                                More themes will be added soon !
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    <Button tag="a" size="lg" href="https://uifort.com" color="primary">
                        See more themes from UiFort
                    </Button>
                </div>
            </Container>
        </div>
    );
};
