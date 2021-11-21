import './App.css';
import ModelRow from './ModelRow';
import CallRow from './CallRow';
function App() {
  return (
    <div className="App">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <ModelRow/>
      <CallRow/>
    </div>
  );
}

export default App;
