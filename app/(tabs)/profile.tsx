import React from 'react'
import { Text, View } from 'react-native'

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="mb-4">
        <Text className="text-5xl font-bold">Profile</Text>
      </View>
        <View className="bg-gray-200 p-4 rounded-lg shadow-md">
            <Text className="text-lg">User Information</Text>
            <Text className="text-sm text-gray-600">Name: John Doe</Text>
            <Text className="text-sm text-gray-600">Email: John.Doe@example.com</Text>
        </View>
    </View>
  )
}

export default Profile