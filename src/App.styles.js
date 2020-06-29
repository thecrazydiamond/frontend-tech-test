import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 1px;
  :focus {
    background: rgba(0, 0, 0, 0);
  }
`;

export const AppContainer = styled.div`
  background-image: linear-gradient(darkcyan, lightcyan);
  width: 100%;
`;

export const SearchResultContainer = styled.div``;
