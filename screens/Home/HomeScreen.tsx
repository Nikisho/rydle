import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RiddleCard from './RiddleCard'
import InputField from './InputField'

const HomeScreen = () => {

  return (
    <SafeAreaView className='h-full bg-emerald-100'>
      <Header />
      <RiddleCard />
      <InputField />
      <Navbar/>
    </SafeAreaView>
  )
}

export default HomeScreen