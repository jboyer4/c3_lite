import './App.css';
import ModelRow from './ModelRow';
import CallRow from './CallRow';

let selectedModel = '';

function App() {
  const setModelGlobal = (val)=> {
    selectedModel = val;
  }
  return (
    <div className="App">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <ModelRow setSelectedModel={setModelGlobal}/>
      <CallRow modal = {selectedModel}/>
    </div>
  );
}

export default App;
