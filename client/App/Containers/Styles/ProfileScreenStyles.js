import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 30
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  midSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 10,
    position: 'relative',
    borderTopColor: '#fbba38',
    borderTopWidth: 1
  },
  bottomMidButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center'
  },
  nameText: {
    color: '#888888',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 10
  },
  occupationText: {
    color: '#888888',
    fontSize: 16
  },
  websiteText: {
    color: '#888888',
    fontSize: 16
  },
  optionText: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
