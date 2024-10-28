import React, { useState } from 'react';
import File from './File';

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="folder">
      <div className="folder-name" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-folder-open' : 'fa-folder'}`}></i>
        <span>{name}</span>
      </div>
      {isOpen && (
        <div className="folder-contents">
          {children.map((child, index) => (
            child.children ? 
              <Folder key={index} {...child} /> : 
              <File key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
