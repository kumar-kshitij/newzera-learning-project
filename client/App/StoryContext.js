import { createContext } from 'react'

export const initialStory = {
  isAvailable: false,
  isViewed: false,
  imageURI: null,
  headline: '',
  description: ''
}

export const storyReducer = (state, action) => {
  switch (action.type) {
    case 'update_viewing':
      return { ...state, isViewed: action.payload }
    case 'update_story':
      return { ...action.payload }
    default:
      throw new Error()
  }
}

const StoryContext = createContext({
  story: initialStory,
  dispatch: () => {}
})

export default StoryContext
