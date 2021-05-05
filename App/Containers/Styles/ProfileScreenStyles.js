import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    alignItems: 'center'
  },
  midSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
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
    marginTop: 50,
    marginBottom: 10
  },
  occupationText: {
    color: '#888888',
    fontSize: 16
  },
  websiteText: {
    color: '#888888',
    fontSize: 16
  }
})
