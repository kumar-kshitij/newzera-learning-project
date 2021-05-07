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
    case 'update_availability':
      return { ...state, isAvailable: action.payload }
    case 'update_viewing':
      return { ...state, isViewed: action.payload }
    case 'update_image_uri':
      return { ...state, imageURI: action.payload }
    case 'update_headline':
      return { ...state, headline: action.payload }
    case 'update_description':
      return { ...state, description: action.payload }
    default:
      throw new Error()
  }
}

const StoryContext = createContext({
  story: initialStory,
  dispatch: () => {}
})

export default StoryContext
