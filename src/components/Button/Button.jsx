import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ handleClick }) => {
  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load more
    </LoadMoreButton>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
