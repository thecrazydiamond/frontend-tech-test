import React from 'react';
import debounce from 'lodash/debounce';

import {
  AppContainer, SearchResultContainer, SearchInput, UserCard, UserCardContainer,
} from './App.styles';
import SearchResults from '../SearchResults';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState('');

  const handleFilter = React.useMemo(() => debounce((val) => {
    setSearchQuery(val);
  }, 250), []);

  const onChange = React.useMemo(() => ({ target: { value } }) => {
    handleFilter(value);
  }, [handleFilter]);

  return (
    <AppContainer>
      {!!selectedUser && (
        <UserCardContainer
          onClick={() => setSelectedUser(null)}
        >
          <UserCard>
            <div>
              <button
                type="button"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
              <div>
                {selectedUser.name}
              </div>
            </div>
            <div>
              {selectedUser.avatar}
            </div>
          </UserCard>
        </UserCardContainer>
      )}
      <SearchInput
        type="text"
        placeholder="Name"
        onFocus={(e) => { e.target.placeholder = ''; }}
        onBlur={(e) => { e.target.placeholder = 'Name'; }}
        onChange={onChange}
      />
      <SearchResultContainer>
        <SearchResults query={searchQuery} onUserClick={setSelectedUser} />
      </SearchResultContainer>
    </AppContainer>
  );
};
export default App;
