import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c405a',
    padding: 30,
    position: 'relative',
    justifyContent: 'space-evenly'
  },
  progressBarContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    right: 30,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 5
  },
  progressBar: {
    height: 5,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  image: {
    height: 200,
    borderRadius: 30,
    marginBottom: 10
  },
  headlineText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18
  },
  descriptionTextContainer: {
    paddingHorizontal: 50
  },
  descriptionText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 30
  }
})
