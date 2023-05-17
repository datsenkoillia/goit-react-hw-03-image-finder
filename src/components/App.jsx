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
    page: 1,
    showModal: false,
    forModalLink: '',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ loading: true, cards: [] });
      pixabayApi.page = this.state.page;
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
      return;
    }

    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      pixabayApi.page = this.state.page;
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
    }
  }

  addPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
    this.setState({ searchQuery: searchText, page: 1 });
  };

  render() {
    const { loading, cards, showModal, forModalLink } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {cards.length !== 0 && (
          <ImageGallery imagesArray={cards} showModal={this.showModal} />
        )}
        {loading && <Loader />}
        {cards.length !== 0 && !loading && (
          <Button handleClick={this.addPage}></Button>
        )}
        {showModal && (
          <Modal handleClose={this.toggleModal}>
            <img src={forModalLink} alt="" />
          </Modal>
        )}
      </AppWrapper>
    );
  }
}
