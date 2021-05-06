import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import Menu, { MenuTrigger, MenuOptions, MenuOption, renderers } from 'react-native-popup-menu'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
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
import StoryContext from '../Contexts/StoryContext'
import styles from './Styles/ProfileScreenStyles'

const primaryColor = '#fbba38'

const ProfileScreen = ({ navigation }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [imageURI, setImageURI] = useState()
  const { story } = useContext(StoryContext)

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <LeftCaret color={primaryColor} />
        <Hamburger color={primaryColor} />
      </View>
      <View style={styles.midSection}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate(story.isAvailable ? 'StoryScreen' : 'AddStoryScreen')}
          onLongPress={() => setMenuOpen(true)}>
          <DecagonalImageContainer
            borderColor={
              story.isAvailable ? (story.isViewed ? '#666666' : primaryColor) : '#ffffff'
            }
            imageSource={imageURI}>
            {(right, bottom) =>
              story.isAvailable ? (
                story.isViewed ? null : (
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
        </TouchableOpacity>
        <Menu
          renderer={renderers.SlideInMenu}
          opened={isMenuOpen}
          onBackdropPress={() => setMenuOpen(false)}>
          <MenuTrigger />
          <MenuOptions
            customStyles={{
              optionText: styles.optionText,
              OptionTouchableComponent: TouchableHighlight
            }}>
            <MenuOption
              onSelect={() => {
                launchCamera(
                  { mediaType: 'photo', maxWidth: 320, maxHeight: 320, includeBase64: false },
                  (response) => setImageURI(response.uri)
                )
                setMenuOpen(false)
              }}
              text="Take photo"
            />
            <MenuOption
              onSelect={() => {
                launchImageLibrary(
                  { mediaType: 'photo', maxWidth: 320, maxHeight: 320, includeBase64: false },
                  (response) => setImageURI(response.uri)
                )
                setMenuOpen(false)
              }}
              text="Choose photo from Gallery"
            />
          </MenuOptions>
        </Menu>
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
    </View>
  )
}

export default ProfileScreen
