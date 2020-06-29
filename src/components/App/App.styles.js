import styled from 'styled-components';

export const SearchInput = styled.input`
padding: 0.5em;
margin: 0.5em;
background: rgba(255, 255, 255, 0.5);
border: none;
border-radius: 1px;
outline: none;
:focus {
  background: rgba(255, 255, 255, 1);
}
`;

export const AppContainer = styled.div`
  background-image: linear-gradient(rgba(49, 151, 195, 1), rgba(45, 140, 179, 1));
  width: 100%;
`;

export const SearchResultContainer = styled.div``;
