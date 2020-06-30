import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 98%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 1px;
  outline: none;
  :focus {
    background: rgba(255, 255, 255, 1);
  }
`;

export const UserCardContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const UserCard = styled.div`
  margin: 100px auto;
  padding: 20px;
  width: 60%;
  height: 300px;
  background-color: rgba(100, 100, 120, 1);
`;

export const UserCardTable = styled.table`
  width: 100%;
  padding: 20px;
`;

export const UserCardSection = styled.tr`
  width: 100%;
`;

export const UserCardAvatar = styled.td`
  width: 40%;
  text-align: right;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
`;

export const UserCardName = styled.td`
  width: 60%;
  text-align: left;
`;

export const UserCardText = styled.td`
  width: 100%;
  background: white;
  text-align: center;
  color: black;
`;

export const AppContainer = styled.div`
`;

export const SearchResultContainer = styled.div``;
