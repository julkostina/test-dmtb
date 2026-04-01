import Header from '../components/Header';
import { PageBackground, FlexColumnContainer, H1Container, PContainer, FlexContainer } from '../styles';
import { useWatchlist } from '../hooks/useWatchlist';
import MovieCard from '../components/MovieCard';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function WatchlistPage() {
  const { watchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  return (
    <PageBackground>
      <Header />

      <FlexColumnContainer sx={{ p: 4 }}>
        <FlexContainer>
          <H1Container>My Watchlist</H1Container>
        </FlexContainer>

        {watchlist.length === 0 ? (
          <FlexColumnContainer sx={{ alignItems: 'center', mt: 10 }}>
            <BookmarkIcon sx={{ fontSize: '5rem', color: 'rgba(255,255,255,0.2)' }} />
            <PContainer style={{ textAlign: 'center', opacity: 0.6 }}>
              Your watchlist is empty. Start adding movies and TV shows!
            </PContainer>
          </FlexColumnContainer>
        ) : (
          <>
            <PContainer style={{ opacity: 0.7 }}>
              {watchlist.length} title{watchlist.length !== 1 ? 's' : ''} saved
            </PContainer>

            <FlexContainer sx={{ flexWrap: 'wrap', gap: 2, mt: 2 }}>
              {watchlist.map((item) => (
                <MovieCard
                  key={item.id}
                  media={item}
                  onAddToWatchlist={() => removeFromWatchlist(item.id)}
                  isInWatchlist={isInWatchlist(item.id)}
                />
              ))}
            </FlexContainer>
          </>
        )}
      </FlexColumnContainer>
    </PageBackground>
  );
}

export default WatchlistPage;