import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RiddleCard from './RiddleCard'
import InputField from './InputField'
import CustomKeyboard from './CustomKeyboard'

const HomeScreen = () => {

  return (
    <SafeAreaView >
      <View className='h-full  rounded-2xl bg-white shadow-lg shadow-black space-y-2'>

        <Header />
        <RiddleCard />
        <InputField />
        <CustomKeyboard />
        <Navbar />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

