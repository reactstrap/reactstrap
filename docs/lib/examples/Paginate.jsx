import React from 'react';
import {Paginate, Button} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 8, pages: 20, showPages: 10};
    }

    render() {
        let {showPages, page, pages} = this.state,
            attrs                    = {
                showPages, page, pages,
                onClick: (page)=>this.setState({page}), middle: this.props.middle
            };
        if (this.props.custom) {
            attrs = {
                ...attrs,
                first: 'First',
                prev:  'Prev',
                next:  'Next',
                last:  'Last',
            }
        }
        return (
            <Paginate {...attrs} />
        );
    }
}
