import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'

const HomeScreen = () => {

  return (
    <SafeAreaView>
      <Header />
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </SafeAreaView>
  )
}

export default HomeScreen