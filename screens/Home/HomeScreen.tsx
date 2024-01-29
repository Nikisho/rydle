import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RiddleCard from './RiddleCard'

const HomeScreen = () => {

  return (
    <SafeAreaView className='h-full bg-emerald-100'>
      <Header />
      <RiddleCard />
      <Navbar/>
    </SafeAreaView>
  )
}

export default HomeScreen