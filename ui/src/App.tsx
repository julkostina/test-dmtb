import {Routes, Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import WatchListPage from './pages/WatchlistPage.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/watchlist" element={<WatchListPage />} />
    </Routes>
  );
}