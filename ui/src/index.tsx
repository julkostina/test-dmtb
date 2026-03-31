import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import WatchlistPage from './pages/WatchlistPage';

export default function App() {
  return (
    <Routes>
       <Route path="/" element={<SearchPage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
    </Routes>
  );
}