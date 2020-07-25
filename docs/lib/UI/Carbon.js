import React, { Component } from 'react';

class Carbon extends Component {
    componentDidMount() {
        const carbon_wrapper = document.querySelector('.carbon-adds-wrapper');
        const script = document.createElement("script");
        script.src = '//cdn.carbonads.com/carbon.js?serve=CE7IPK3E&placement=reactstrapgithubio';
        script.async = true;
        script.id = "_carbonads_js"
        carbon_wrapper.appendChild(script);
    }

    render() {
        return (
            <div className="carbon-adds-wrapper" />
        );
    }
}

export default Carbon;
