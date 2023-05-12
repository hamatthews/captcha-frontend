import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Start from './pages/start';
import Menu from './pages/menu';
import Game from './pages/game';
import GameOver from './pages/gameOver';
import Leaderboard from './pages/leaderboard';
import Motivation from './pages/motivation';

function App() {

  const [level, setLevel] = useState(1);

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/game" element={<Game {...{level, setLevel}}/>}/>
        <Route path="/gameOver" element={<GameOver  {...{level}}/>}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/motivation" element={<Motivation />}/>

      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;

