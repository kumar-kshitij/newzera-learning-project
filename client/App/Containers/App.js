import React, { useReducer } from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  split,
  ApolloLink
} from '@apollo/client'
import { createUploadLink, ReactNativeFile } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import StoryContext, { storyReducer, initialStory } from '../StoryContext'
import AppNavigator from '../Navigators/AppNavigator'
import { SERVER_URL } from '../utils'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const isUpload = ({ variables }) => {
  return Object.values(variables).some((value) => value instanceof ReactNativeFile)
}

const link = split(
  isUpload,
  createUploadLink({
    uri: `${SERVER_URL}/graphql`
  }),
  createHttpLink({
    uri: `${SERVER_URL}/graphql`
  })
)

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, link]),
  cache: new InMemoryCache()
})

const App = () => {
  const [story, dispatch] = useReducer(storyReducer, initialStory)

  return (
    <ApolloProvider client={client}>
      <StoryContext.Provider value={{ story, dispatch }}>
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      </StoryContext.Provider>
    </ApolloProvider>
  )
}

export default App
