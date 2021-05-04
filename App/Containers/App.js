import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import DecagonalImageContainer from '../Components/DecagonalImageContainer'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DecagonalImageContainer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default App
