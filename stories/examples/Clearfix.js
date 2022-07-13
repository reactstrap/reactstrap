import React from 'react';

const Example = (props) => {
  return (
    <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
      <button className="btn btn-secondary float-left">
        Example Button floated left
      </button>
      <button className="btn btn-danger float-right">
        Example Button floated right
      </button>
    </div>
  );
};

export default Example;
