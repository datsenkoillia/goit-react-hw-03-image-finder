import PropTypes from 'prop-types';
import { ContactItem, ContactButton } from './styled';

export const ContactElement = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem key={id}>
      <p>
        {name}: {number}
        <span>
          <ContactButton type="button" onClick={() => deleteContact(id)}>
            Delete
          </ContactButton>
        </span>
      </p>
    </ContactItem>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
