import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchbarTop,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({ searchText: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText.trim() === '') {
      alert('Enter data for search');
      return;
    }
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <SearchbarTop>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarTop>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
