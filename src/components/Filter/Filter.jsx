import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <TextField
      label="Find contacts by name"
      variant="outlined"
      size="small"
      name="filter"
      type="text"
      required
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      sx={{ mb: '15px' }}
    />
  );
};
