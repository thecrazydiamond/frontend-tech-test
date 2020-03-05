# Immersive Labs Frontend Technical Test

This is the starter project for the Immersive Labs frontend technical test.

## Objective

- Use the provided API to create an app that retrieves and displays a list of users.
- For each user render a profile card. You need not be a design guru, but we do love attention to detail, so some layout, basic styling and user considerations will all be looked favourably upon.

## Requirements

### Basic

- Each card should display the name, avatar, email, joined date, bio and location of the user.
- The app should include a search field to search the list by the name of the user.
- The app should fetch the data from the server using either REST or GraphQL.
- You should write tests for the basic functionality of the app.

## Advanced

These are not part of the key requirements, but if they are too straightforward for you, or you just fancy showing off, here are some ideas for advanced features:

- If we perform the same search there may not be the need to query the API again. Implement a caching method to save the results of every search.
- To avoid calling the API every time a letter is entered into the search box add a 'debounce' function to buffer the input.

## Enhancements

You are very welcome to enhance this functionality and make it as impressive and interactive as you like, but please do not exceed the time limit (2 hours, detailed below). 

Ideas for future enhancements should be added to the readme.md and can be discussed during the interview stage - we'd love to hear your ideas!

## Tech

This project comes with Create React App, but you are free to use any boilerplate you wish or to start from scratch.

At Immersive Labs we use the following tech stack:

- [React.js](https://facebook.github.io/react/)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Jest](https://facebook.github.io/jest/)
- [React Testing Library](https://testing-library.com)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/)

The project is pre-configured to allow use of these packages. You may use any of them you wish, or completely different technologies, but be prepared to discuss your decision.

## Time Limit

Please try and limit yourself to two hours on this test. We want to see what you can do in a short period of time and what you are comfortable with. We are not looking to see how many hours you are willing to put in.

If you run out of time but there are other things you would have liked to implement, make a note of these to discuss with us, or let us know via the `readme.md` of your project.

## Submission

Please zip up your files and return them to us by replying to the email you were sent.

## Getting started

In a terminal at the root of the project run `npm install` and then `npm start`. The front end webserver should start on [http://localhost:3000](http://localhost:3000)

To install the server packages for the API, in another terminal window navigate to the `server` folder and run `npm install`. Start the the server by running `npm start`. The server exposes both REST and GraphQL APIs.

### REST API

The list of users can be obtained from the REST endpoint at [http://localhost:3001](http://localhost:3001). To search the list by the name of the user provide a query parameter called `name` [http://localhost:3001?name=chris](http://localhost:3001?name=chris). Some example code to use in the app is provided below. You could use this or a third party library like `axios` to fetch the data.

```
fetch("http://localhost:3001")
  .then(response => response.json())
  .then(data => console.log(data));
```

### GraphQL API

A GraphQL endpoint is available at [http://localhost:3001/graphql](http://localhost:3001/graphql). Some sample code to get the data is shown below. You may use this method or you could connect the Apollo Client to React as detailed in the [Apollo docs](https://www.apollographql.com/docs/react/get-started/).

```
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

client
  .query({
    query: gql`
      {
        users {
          name
        }
      }
    `
  })
  .then(result => console.log(result));
```
