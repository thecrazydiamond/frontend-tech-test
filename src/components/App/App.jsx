import React from 'react';
import debounce from 'lodash/debounce';

import {
  AppContainer, SearchResultContainer, SearchInput, UserCard,
  UserCardContainer, UserCardAvatar, UserCardSection,
  UserCardName, UserCardTable, UserCardText,
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
        <UserCardContainer>
          <UserCard>
            <UserCardTable>
              <UserCardSection>
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                >
                  Close
                </button>
                <UserCardAvatar>
                  <img
                    src={selectedUser.avatar}
                    alt="User avatar"
                  />
                </UserCardAvatar>
                <UserCardName>
                  {selectedUser.name}
                </UserCardName>
              </UserCardSection>
              <UserCardSection>
                <UserCardText>{selectedUser.bio}</UserCardText>
                <UserCardText>{selectedUser.email}</UserCardText>
                <UserCardText>{selectedUser.joined}</UserCardText>
                <UserCardText>{selectedUser.location}</UserCardText>
              </UserCardSection>
            </UserCardTable>
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
