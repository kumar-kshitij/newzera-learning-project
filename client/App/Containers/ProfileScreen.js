import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import Menu, { MenuTrigger, MenuOptions, MenuOption, renderers } from 'react-native-popup-menu'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { gql, useQuery, useMutation } from '@apollo/client'
import { ReactNativeFile } from 'apollo-upload-client'
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
import StoryContext from '../StoryContext'
import { SERVER_URL } from '../utils'
import styles from './Styles/ProfileScreenStyles'

const PRIMARY_COLOR = '#fbba38'

const USER_QUERY = gql`
  query UserQuery($id: Int!) {
    user(id: $id) {
      id
      name
      occupation
      website
      picURL
    }
  }
`

const PROFILE_PICTURE_MUTATION = gql`
  mutation ProfilePictureMutation($id: Int!, $pic: Upload) {
    addProfilePicture(id: $id, pic: $pic) {
      success
      user {
        id
        picURL
      }
    }
  }
`

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 320,
  maxHeight: 320,
  includeBase64: false
}

const ProfileScreen = ({ navigation }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { story } = useContext(StoryContext)

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: {
      id: 1
    },
    fetchPolicy: 'cache-and-network'
  })
  if (error) {
    console.log(error)
  }

  const [addProfilePicture, { loading: mutationLoading, error: mutationError }] = useMutation(
    PROFILE_PICTURE_MUTATION,
    {
      update: (cache, { data: { addProfilePicture } }) => {
        if (!addProfilePicture.success) return

        const data = cache.readQuery({
          query: USER_QUERY,
          variables: {
            id: addProfilePicture.user.id
          }
        })

        cache.writeQuery({
          query: USER_QUERY,
          data: {
            user: {
              ...data.user,
              picURL: addProfilePicture.user.picURL
            }
          },
          variables: {
            id: addProfilePicture.user.id
          }
        })
      }
    }
  )
  if (mutationError) {
    console.log(mutationError)
  }

  const imagePickerCallback = (response) => {
    if (response.uri) {
      addProfilePicture({
        variables: {
          id: data?.user?.id,
          pic: new ReactNativeFile({
            uri: response.uri,
            type: response.type,
            name: response.fileName
          })
        }
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <LeftCaret color={PRIMARY_COLOR} />
        <Hamburger color={PRIMARY_COLOR} />
      </View>
      <View style={styles.midSection}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate(story.isAvailable ? 'StoryScreen' : 'AddStoryScreen')}
          onLongPress={() => setMenuOpen(true)}>
          <DecagonalImageContainer
            borderColor={
              story.isAvailable ? (story.isViewed ? '#666666' : PRIMARY_COLOR) : '#ffffff'
            }
            imageSource={
              data && data.user && data.user.picURL ? SERVER_URL + data.user.picURL : null
            }>
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
                      foregroundColor={PRIMARY_COLOR}
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
                  <PlusCircle size={26} backgroundColor={PRIMARY_COLOR} />
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
                launchCamera(imagePickerOptions, imagePickerCallback)
                setMenuOpen(false)
              }}
              text="Take photo"
            />
            <MenuOption
              onSelect={() => {
                launchImageLibrary(imagePickerOptions, imagePickerCallback)
                setMenuOpen(false)
              }}
              text="Choose photo from Gallery"
            />
            <MenuOption
              onSelect={() => {
                addProfilePicture({
                  variables: {
                    id: data?.user?.id,
                    pic: null
                  }
                })
                setMenuOpen(false)
              }}
              text="Remove photo"
            />
          </MenuOptions>
        </Menu>
        <Text style={styles.nameText}>{data?.user?.name}</Text>
        <Text style={styles.occupationText}>{data?.user?.occupation}</Text>
        <Text style={styles.websiteText}>{data?.user?.website}</Text>
      </View>
      <View style={styles.bottomSection}>
        <Square size={40} color={PRIMARY_COLOR} />
        <Triangle size={40} color={PRIMARY_COLOR} />
        <View
          style={[
            styles.bottomMidButton,
            {
              transform: [{ translateY: -23 }]
            }
          ]}>
          <Decagon size={46} color={PRIMARY_COLOR} />
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen
