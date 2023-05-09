import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Game from './pages/game/game';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<>menu</>}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/scoreboard" element={<>scoreboard</>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;

/*
normal: cars, crosswalks, bridges, bicycles, streetlights,  trains
unusual: emotions, humans
*/