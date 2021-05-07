import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { LeftCaret } from '../Components'
import StoryContext from '../StoryContext'
import styles from './Styles/AddStoryScreenStyles'

const AddStoryScreen = ({ navigation }) => {
  const [headline, setHeadline] = useState('')
  const [description, setDescription] = useState('')
  const [imageURI, setImageURI] = useState()
  const [isHeadlineInputFocused, setHeadlineInputFocused] = useState(false)
  const [isDescriptionInputFocused, setDescriptionInputFocused] = useState(false)
  const { story, dispatch } = useContext(StoryContext)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          launchImageLibrary(
            { mediaType: 'photo', maxWidth: 640, maxHeight: 640, includeBase64: false },
            (response) => setImageURI(response.uri)
          )
        }
        style={styles.imageContainer}>
        {imageURI ? (
          <Image source={{ uri: imageURI }} style={styles.image} resizeMode="contain" />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text>Click here to select an image!</Text>
          </View>
        )}
      </TouchableOpacity>
      <TextInput
        style={[
          styles.headlineInput,
          { borderColor: isHeadlineInputFocused ? '#fbba38' : '#000000' }
        ]}
        value={headline}
        onChangeText={setHeadline}
        placeholder="Headline"
        placeholderTextColor="#aeaeae"
        onFocus={() => setHeadlineInputFocused(true)}
        onBlur={() => setHeadlineInputFocused(false)}
      />
      <TextInput
        style={[
          styles.descriptionInput,
          { borderColor: isDescriptionInputFocused ? '#fbba38' : '#000000' }
        ]}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        placeholderTextColor="#aeaeae"
        onFocus={() => setDescriptionInputFocused(true)}
        onBlur={() => setDescriptionInputFocused(false)}
        multiline
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.bottomRightButton}
        onPress={() => {
          if (imageURI && headline && description) {
            dispatch({
              type: 'update_story',
              payload: {
                isAvailable: true,
                isViewed: false,
                imageURI,
                headline,
                description
              }
            })
            navigation.navigate('ProfileScreen')
          }
        }}>
        <LeftCaret size={25} color="#ffffff" />
      </TouchableOpacity>
    </View>
  )
}

export default AddStoryScreen
