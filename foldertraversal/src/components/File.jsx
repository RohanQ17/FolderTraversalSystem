import React from 'react';

const File = ({ name }) => {
  return (
    <div className="file">
      <i className="fas fa-file"></i>
      <span>{name}</span>
    </div>
  );
};

export default File;
