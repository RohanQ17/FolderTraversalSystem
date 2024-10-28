import React from 'react';
import FolderStructure from './components/FolderStructure';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "black",textAlign: 'center'}}>Folder Traversal System</h1>
      <FolderStructure />
    </div>
  );
}

export default App;