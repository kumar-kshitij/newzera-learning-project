import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Containers/ProfileScreen'
import AddStoryScreen from '../Containers/AddStoryScreen'
import StoryScreen from '../Containers/StoryScreen'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="AddStoryScreen"
          component={AddStoryScreen}
          options={{ title: 'Add Story' }}
        />
        <Stack.Screen name="StoryScreen" component={StoryScreen} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
