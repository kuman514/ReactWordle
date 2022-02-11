import './App.css';

import {
  QUESTION_NUMBER,
  ANSWER
} from './contents/WordPicker';

import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board
        answer={ANSWER}
        questionNumber={QUESTION_NUMBER}
      />
    </div>
  );
}

export default App;
