import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'
const { BASE_API_URL } = process.env
console.log(BASE_API_URL)
const client = new ApolloClient({
  uri: `${BASE_API_URL}/graphql`
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.querySelector('#app'))
