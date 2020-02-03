import React from 'react';
import { Card, Button, CardBody, CardHeader, Container, Row, Col, Jumbotron } from 'reactstrap';

const creativeTimProducts = [
    {
        productTitle: "Now UI Kit PRO with Reactstrap",
        productTagline: "Premium Kit Template for Bootstrap 4 and Reactstrap",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-kit-pro-react/opt_nukp_react_thumbnail.jpg",
        productURL: "https://www.creative-tim.com/product/now-ui-kit-pro-react"
    },
    {
        productTitle: "Now UI Dashboard PRO with Reactstrap",
        productTagline: "Premium Reactstrap (Bootstrap 4) Admin Template",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/now-ui-dashboard-pro-react/now-ui-dashboard-pro-react.jpg",
        productURL: "https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
    },
    {
        productTitle: "Argon Design System with Reactstrap",
        productTagline: "Free Design System for Bootstrap 4 and Reactstrap",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-design-system-react/argon-design-system-react.jpg",
        productURL: "https://www.creative-tim.com/product/argon-design-system-react"
    },
    {
        productTitle: "Argon Dashboard PRO with Reactstrap",
        productTagline: "Premium Reactstrap (Bootstrap 4) Admin Template",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro-react/argon-dashboard-pro-react.jpg",
        productURL: "https://www.creative-tim.com/product/argon-dashboard-pro-react"
    },
    {
        productTitle: "Paper Kit PRO with Reactstrap",
        productTagline: "Premium Kit Template for Bootstrap 4 and Reactstrap",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-kit-pro-react/opt_pkp_react_thumbnail.jpg",
        productURL: "https://www.creative-tim.com/product/paper-kit-pro-react"
    },
    {
        productTitle: "Paper Dashboard PRO with Reactstrap",
        productTagline: "Premium Reactstrap (Bootstrap 4) Admin Template",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-2-pro-react/opt_pdp_react.jpg",
        productURL: "https://www.creative-tim.com/product/paper-dashboard-pro-react"
    },
    {
        productTitle: "BLK• Design System PRO with Reactstrap",
        productTagline: "Premium Design System for Bootstrap 4 and Reactstrap",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/blk-design-system-pro-react/blk-design-system-pro-react.jpg",
        productURL: "https://www.creative-tim.com/product/blk-design-system-pro-react"
    },
    {
        productTitle: "Black Dashboard PRO with Reactstrap",
        productTagline: "Premium Reactstrap (Bootstrap 4) Admin Template",
        productImageLink: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/black-dashboard-pro-react/black-dashboard-pro-react.jpg",
        productURL: "https://www.creative-tim.com/product/black-dashboard-pro-react"
    }
];

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
                    <Button tag="a" size="lg" href="https://uifort.com" color="primary" target="_blank">
                        See more themes from UiFort
                    </Button>
                </div>
            </Container>
            <Container>
                <h2 className="font-weight-bold">
                    Creative Tim
                </h2>
                <p className="mb-4">Check out some examples that our partners from Creative Tim created using the Reactstrap components library.</p>
                <Row>
                    {
                        creativeTimProducts.map((prop,key) => {
                            return (
                                <Col md="6" key={key} className="mt-3 mb-3">
                                    <Card>
                                        <CardHeader className="p-3">
                                            <h5 className="m-0 font-weight-bold">
                                                <a href={prop.productURL + "?ref=reactstrap.github.io"} target="_blank" title="View details">
                                                    {prop.productTitle}
                                                </a>
                                            </h5>
                                            <p className="mb-0 mt-1 text-muted">
                                                {prop.productTagline}
                                            </p>
                                        </CardHeader>
                                        <CardBody className="p-3">
                                            <a href={prop.productURL + "?ref=reactstrap.github.io"} target="_blank" title="View details">
                                                <img className="rounded img-fluid" src={prop.productImageLink} alt=""/>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
                <div className="text-center mt-5">
                    <Button tag="a" size="lg" href="https://www.creative-tim.com" color="primary" target="_blank">
                        See more themes from Creative Tim
                    </Button>
                </div>
            </Container>
        </div>
    );
};
