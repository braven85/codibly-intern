import { Box, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/features/filterSlice';
import { AppDispatch } from '../redux/store';

const ResultsFilter = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter(+e.target.value));
    },
    [dispatch]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <TextField
        sx={{ width: '30%' }}
        label="Filter by Id"
        variant="outlined"
        type="number"
        onChange={handleChange}
        InputProps={{ inputProps: { min: 0 } }}
      />
    </Box>
  );
};

export default ResultsFilter;
