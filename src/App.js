import './toggles-component/Toggles.css';
import TogglesContainer from './toggles-component/TogglesContainer';
import { sampleQuestion } from './toggles-component/sampleQuestion';

function App() {
  return <TogglesContainer sampleQuestion={sampleQuestion} />;
}

export default App;
