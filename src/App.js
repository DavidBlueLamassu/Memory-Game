import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import LevelTwo from './components/pages/LevelTwo';
import LevelThree from './components/pages/LevelThree';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Only two of these page components are currently in use; the homepage "Home.js" and "Game.js" each of which contains
          links to the other. levelTwo and levelThree are placeholders for when the game is expanded to higher and more difficult
          levels. */}
          <Route path="/*" element={<Home />} />
          <Route path="game/*" element={<Game />} />
          <Route path="levelTwo" element={<LevelTwo />} />
          <Route path="levelThree" element={<LevelThree />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;