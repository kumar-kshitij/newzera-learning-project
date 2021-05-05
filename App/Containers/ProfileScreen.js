import React, { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import {
  DecagonalImageContainer,
  LeftCaret,
  Hamburger,
  HorizontalEllipsis,
  Square,
  Triangle,
  Decagon,
  PlusCircle
} from '../Components'
import styles from './Styles/ProfileScreenStyles'

const primaryColor = '#fbba38'

const ProfileScreen = () => {
  const [isStoryAvailable, setStoryAvailable] = useState(false)
  const [isStorySeen, setStorySeen] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <LeftCaret color={primaryColor} />
        <Hamburger color={primaryColor} />
      </View>
      <View style={styles.midSection}>
        <DecagonalImageContainer
          borderColor={isStoryAvailable ? (isStorySeen ? '#666666' : primaryColor) : '#ffffff'}>
          {(right, bottom) =>
            isStoryAvailable ? (
              isStorySeen ? null : (
                <View
                  style={{
                    position: 'absolute',
                    right,
                    bottom,
                    transform: [{ translateX: 10 }, { translateY: 10 }]
                  }}>
                  <HorizontalEllipsis
                    size={20}
                    backgroundColor="#ffffff"
                    foregroundColor={primaryColor}
                  />
                </View>
              )
            ) : (
              <View
                style={{
                  position: 'absolute',
                  right,
                  bottom,
                  transform: [{ translateX: 13 }, { translateY: 13 }]
                }}>
                <PlusCircle size={26} backgroundColor={primaryColor} />
              </View>
            )
          }
        </DecagonalImageContainer>
        <Text style={styles.nameText}>Byung ho</Text>
        <Text style={styles.occupationText}>Photographer</Text>
        <Text style={styles.websiteText}>www.hoarts.com</Text>
      </View>
      <View style={styles.bottomSection}>
        <Square size={40} color={primaryColor} />
        <Triangle size={40} color={primaryColor} />
        <View
          style={[
            styles.bottomMidButton,
            {
              transform: [{ translateY: -23 }]
            }
          ]}>
          <Decagon size={46} color={primaryColor} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen
