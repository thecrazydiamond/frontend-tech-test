import React from 'react';

import { AppContainer, SearchResultContainer, SearchInput } from './App.styles';

const App = () => (

  //   const onChange = React.useMemo(() => { target: { value } }) => {

  // },

  <AppContainer>
    <SearchInput
      type="text"
      placeholder="Name"
      onFocus={(e) => { e.target.placeholder = ''; }}
      onBlur={(e) => { e.target.placeholder = 'Name'; }}
    // onChange={onChange}
    />
    <SearchResultContainer />
  </AppContainer>
);

export default App;
