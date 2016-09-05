import React, { PropTypes } from 'react';
import { Pagination, PaginationItem, PaginationLink } from './index';

const propTypes = {
  className: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  showPages: PropTypes.number,
  next: PropTypes.string,
  prev: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  middle:PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  page: 1,
  showPages: 10,
  next: '>',
  prev: '<',
  first: '<<',
  last: '>>',
  middle:true,
  onClick: () => null
};

const Paginate = (props) => {
  const { showPages, onClick, pages, page, next, prev, first, last,middle, ...resetOfProps } = props;
  const createLink = (_page, title, key, attributes = {}) => {
    return (<PaginationItem {...attributes} key={key}>
      <PaginationLink tag="button" type="button" onClick={() => onClick(_page)}>
        {title}
      </PaginationLink>
    </PaginationItem>);
  };
  const getPages = () => {
    let links = [];
    let startPage = 1;
    let endPage = pages;
    let isMaxSized = !isNaN(showPages) && showPages < pages;

    if (isMaxSized) {
      if (middle){
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(page - Math.floor(showPages / 2), 1);
        endPage = startPage + showPages - 1;

        // Adjust if limit is exceeded
        if (endPage > pages) {
          endPage = pages;
          startPage = endPage - showPages + 1;
        }
      } else {
        startPage = ((Math.ceil(page / showPages) - 1) * showPages) + 1;
        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + (showPages - 1), pages);
      }
    }

  // Create links
    for (let number = startPage; number <= endPage; number++) {
      let attrs = {};
      if (number === page) {
        attrs.active = true;
      }
      if (onClick) {
        attrs.onClick = () => onClick(number);
      }
      links.push(createLink(number, number, number, attrs));
    }
    if (page > 1) {
      links.unshift(createLink(page - 1, prev, 'prev'));
    }
    if (startPage > 1) {
      links.unshift(createLink(1, first, 'first'));
    }

    if (page < pages) {
      links.push(createLink(page + 1, next, 'next'));
    }
    if (endPage < pages) {
      links.push(createLink(pages, last, 'last'));
    }

    return links;
  };
  return <Pagination {...resetOfProps}>{getPages()}</Pagination>;
};

Paginate.propTypes = propTypes;
Paginate.defaultProps = defaultProps;

export default Paginate;
