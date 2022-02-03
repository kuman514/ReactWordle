import './App.css';

import {
  QUESTION_NUMBER,
  ANSWER
} from './contents/WordPicker';

import Title from './components/Title';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Title 
        questionNumber={QUESTION_NUMBER}
      />
      <Board
        answer={ANSWER}
        questionNumber={QUESTION_NUMBER}
      />
    </div>
  );
}

export default App;
