import React, { useReducer } from 'react'
import { MenuProvider } from 'react-native-popup-menu'
import StoryContext, { storyReducer, initialStory } from '../Contexts/StoryContext'
import AppNavigator from '../Navigators/AppNavigator'

const App = () => {
  const [story, dispatch] = useReducer(storyReducer, initialStory)

  return (
    <StoryContext.Provider value={{ story, dispatch }}>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </StoryContext.Provider>
  )
}

export default App
