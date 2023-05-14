import PropTypes from 'prop-types';
import { InputLabel, InputField } from './styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <InputLabel>
      Find contacts by name
      <InputField type="text" value={filter} onChange={changeFilter} />
    </InputLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
