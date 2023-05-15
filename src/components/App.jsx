import { PixabayAPI } from 'pixabayApi/pixabay-api';
import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';
import { AppWrapper } from './App.styled';

const pixabayApi = new PixabayAPI();

export class App extends Component {
  state = {
    cards: [],
    loading: false,
    searchQuery: '',
    showModal: false,
    forModalLink: '',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ loading: true, cards: [] });
      pixabayApi.page = 1;
      pixabayApi.q = this.state.searchQuery;

      try {
        const { data } = await pixabayApi.fetchPhotos();
        if (data.total === 0) {
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }

        const newCards = data.hits;

        this.setState({
          cards: newCards,
        });
      } catch (error) {
        console.log(error);
        alert('Something went wrong.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  addPage = async () => {
    this.setState({ loading: true });
    pixabayApi.page += 1;
    try {
      const { data } = await pixabayApi.fetchPhotos();
      const newCards = data.hits;
      this.setState(({ cards }) => ({
        cards: [...cards, ...newCards],
      }));
    } catch (error) {
      console.log(error);
      alert('Something went wrong.');
    } finally {
      this.setState({ loading: false });
    }
  };

  showModal = link => {
    this.setState({
      forModalLink: link,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = searchText => {
    this.setState({ searchQuery: searchText });
  };

  render() {
    const { loading, cards, showModal, forModalLink } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imagesArray={cards} showModal={this.showModal} />
        {loading && <Loader />}
        {cards.length !== 0 && <Button handleClick={this.addPage}></Button>}
        {showModal && (
          <Modal handleClose={this.toggleModal}>
            <img src={forModalLink} alt="" />
          </Modal>
        )}
      </AppWrapper>
    );
  }
}
