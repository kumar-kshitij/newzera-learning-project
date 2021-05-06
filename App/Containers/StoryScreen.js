import React, { useRef, useEffect, useContext } from 'react'
import { View, StyleSheet, Image, Text, Animated, Easing } from 'react-native'
import StoryContext from '../Contexts/StoryContext'
import styles from './Styles/StoryScreenStyles'

const StoryScreen = ({ navigation }) => {
  const progressBarWidth = useRef(new Animated.Value(0))
  const { story, dispatch } = useContext(StoryContext)

  useEffect(() => {
    const animation = Animated.timing(progressBarWidth.current, {
      toValue: 1,
      useNativeDriver: false,
      duration: 5000,
      easing: Easing.linear
    })
    animation.start(({ finished }) => {
      if (finished) {
        navigation.navigate('ProfileScreen')
      }
    })
    dispatch({ type: 'update_viewing', payload: true })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressBarWidth.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%']
              })
            }
          ]}
        />
      </View>
      <View>
        <Image
          source={{
            uri: story.imageURI
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.headlineText}>{story.headline}</Text>
      </View>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionText}>{story.description}</Text>
      </View>
    </View>
  )
}

export default StoryScreen
