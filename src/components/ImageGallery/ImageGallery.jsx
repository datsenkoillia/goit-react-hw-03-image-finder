import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imagesArray, showModal }) => {
  return (
    <ImageGalleryList>
      {imagesArray.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          showModal={showModal}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  imageArray: PropTypes.arrayOf(PropTypes.object.isRequired),
  showModal: PropTypes.func.isRequired,
};
