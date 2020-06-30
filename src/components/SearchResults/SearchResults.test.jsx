import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import SearchResults from './SearchResults';
import { LIST_ALL_USERS } from '../../graphql/users';

const mockedProps = {
  query: '',
  onUserClick: () => console.log('click'),
};

const mocks = [
  {
    request: {
      query: LIST_ALL_USERS,
    },
    result: {
      data: {
        users: [
          { name: 'Maurine Rath', avatar: '*' },
          { name: 'Brook Hudson', avatar: '.' },
        ],
      },
    },
  },
];

test('renders SearchResults in loading state', () => {
  const renderedComponent = render(
    <MockedProvider>
      <SearchResults {...mockedProps} />
    </MockedProvider>,
  );
  expect(renderedComponent).toMatchSnapshot();
});

test('renders SearchResults in error state', () => {
  const renderedComponent = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SearchResults {...mockedProps} />
    </MockedProvider>,
  );
  expect(renderedComponent).toMatchSnapshot();
});

test('renders SearchResults with data', () => {
  const renderedComponent = render(
    <MockedProvider mocks={mocks}>
      <SearchResults {...mockedProps} />
    </MockedProvider>,
  );
  expect(renderedComponent).toMatchSnapshot();
});
