import { HashRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout.jsx';
import AddDeck from './pages/addDeck/AddDeck.jsx';
import Main from './pages/main/Main';
import './App.css';
import ShowDeck from './pages/showDeck/ShowDeck.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/ankiclone">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/decks" element={<Main />} />
            <Route path="/add" element={<AddDeck />} />
            <Route path="/study" element={<ShowDeck />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
