import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { Search, SearchIconWrapper, StyledInputBase, FlexContainer } from '../styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
};

function SearchInput({ value, onChange, loading }: Props) {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(local);
    }, 500);

    return () => clearTimeout(timer);
  }, [local]);

  return (
    <FlexContainer>
      <Search>
        <SearchIconWrapper>
          {loading ? (
            <CircularProgress size={20} sx={{ color: 'inherit' }} />
          ) : (
            <SearchIcon />
          )}
        </SearchIconWrapper>
        <StyledInputBase
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
        {local && (
          <IconButton
            size="small"
            onClick={() => { setLocal(''); onChange(''); }}
            sx={{ color: 'inherit', mr: 1 }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        )}
      </Search>
    </FlexContainer>
  );
}

export default SearchInput;