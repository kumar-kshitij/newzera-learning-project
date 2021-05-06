import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30,
    position: 'relative'
  },
  imageContainer: {
    marginBottom: 30
  },
  image: {
    height: 200
  },
  imagePlaceholder: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5
  },
  headlineInput: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888888',
    marginBottom: 20
  },
  descriptionInput: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#888888'
  },
  bottomRightButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: '#fbba38',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotateZ: '180deg' }]
  }
})
