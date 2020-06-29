import React from 'react';
import debounce from 'lodash/debounce';

import { AppContainer, SearchResultContainer, SearchInput } from './App.styles';
import SearchResults from '../SearchResults';

const App = () => (
  <AppContainer>
    <SearchInput
      type="text"
      placeholder="Name"
      onFocus={(e) => { e.target.placeholder = ''; }}
      onBlur={(e) => { e.target.placeholder = 'Name'; }}
    />
    <SearchResultContainer>
      <SearchResults query={null} onUserClick={null} />
    </SearchResultContainer>
  </AppContainer>
);
export default App;
