import './App.css';
import React, { useState } from 'react';
import ModelRow from './ModelRow';
import CallRow from './CallRow';

function App() {
  const [selectedModel, setModelGlobal] = useState(null);

  return (
    <div className="App">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <ModelRow setSelectedModel={setModelGlobal}/>
      <CallRow model = {selectedModel}/>
    </div>
  );
}

export default App;
