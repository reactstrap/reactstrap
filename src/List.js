import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
    tag: tagPropType,
    className: PropTypes.string,
    cssModule: PropTypes.object
};

const defaultProps ={
    tag: 'ul'
};

const ListInline = (props) => {
    const {
        className,
        cssModule,
        tag: Tag,
        ...attributes
    } = props;
    const classes = mapToCssModules(classNames(
        className,
        'list-inline'
    ), cssModule);

    return (
        <Tag {...attributes} className={classes} />
    );
};

ListInline.propTypes = propTypes;
ListInline.defaultProps = defaultProps;

export default ListInline;
