import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

type Media = {
  id: string;
  title: string;
  poster?: string | null;
  releaseYear?: string | null;
  rating?: number | null;
  type: string;
};

type Props = {
  media: Media;
  onAddToWatchlist?: (media: Media) => void;
  isInWatchlist?: boolean;
};

const PLACEHOLDER = 'https://via.placeholder.com/300x450?text=No+Image';

export default function MovieCard({ media, onAddToWatchlist, isInWatchlist }: Props) {
  return (
    <Card sx={{ width: 200, position: 'relative', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
      
      <CardMedia
        component="img"
        height="300"
        image={media.poster ?? PLACEHOLDER}
        alt={media.title}
      />

      {/* Type badge */}
      <Chip
        label={media.type === 'tv' ? 'TV' : 'Movie'}
        size="small"
        sx={{ position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}
      />

      <CardContent sx={{ p: 1 }}>
        <Typography variant="body2" fontWeight="bold" noWrap>
          {media.title}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between" mt={0.5}>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {media.releaseYear ?? '—'}
          </Typography>

          {media.rating && (
            <Box display="flex" alignItems="center" gap={0.5}>
              <StarIcon sx={{ fontSize: 14, color: 'gold' }} />
              <Typography variant="caption">
                {media.rating.toFixed(1)}
              </Typography>
            </Box>
          )}

          <IconButton
            size="small"
            onClick={() => onAddToWatchlist?.(media)}
            sx={{ color: isInWatchlist ? 'gold' : 'white' }}
          >
            {isInWatchlist ? <BookmarkAddedIcon fontSize="small" /> : <BookmarkAddIcon fontSize="small" />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}