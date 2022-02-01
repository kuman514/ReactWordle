import './App.css';

import Title from './components/Title';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Title />
      <Board
        answer={'react'}
      />
    </div>
  );
}

export default App;
