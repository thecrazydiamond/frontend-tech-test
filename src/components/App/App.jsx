import React from 'react';
import debounce from 'lodash/debounce';

import { AppContainer, SearchResultContainer, SearchInput } from './App.styles';
import SearchResults from '../SearchResults';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleFilter = React.useMemo(() => debounce((val) => {
    setSearchQuery(val);
  }, 250), []);

  const onChange = React.useMemo(() => ({ target: { value } }) => {
    handleFilter(value);
  }, [handleFilter]);

  return (
    <AppContainer>
      <SearchInput
        type="text"
        placeholder="Name"
        onFocus={(e) => { e.target.placeholder = ''; }}
        onBlur={(e) => { e.target.placeholder = 'Name'; }}
        onChange={onChange}
      />
      <SearchResultContainer>
        <SearchResults query={searchQuery} onUserClick={null} />
      </SearchResultContainer>
    </AppContainer>
  );
};
export default App;
