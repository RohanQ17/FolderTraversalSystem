import React, { useState, useEffect } from 'react';
import Folder from './Folder';
import './FolderStructure.css';

const FolderStructure = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/RohanQ17/foldertraversaldbjson/folderStructure')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching folder structure:', error);
        setError(error.message);
      });
  }, []);

  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="folder-structure">
      <Folder {...data} />
    </div>
  );
};

export default FolderStructure;