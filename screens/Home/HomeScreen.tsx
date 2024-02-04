import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RiddleCard from './RiddleCard'
import InputField from './InputField'
import CustomKeyboard from './CustomKeyboard'
import SubmitButton from './SubmitButton'

const HomeScreen = () => {
  const [input, setInput] = useState<string>('');

  const handleKeyPress = (key: string) => {
    if (key === '   ') {
      // If it's the space bar, add a space to the input
      setInput((prevInput) => prevInput + ' ');

    } else if (key === '<') {
      // If it's the backspace, remove the last character from the input
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      // For other keys, append the key to the input
      setInput((prevInput) => prevInput + key);
    }
  };
  return (
    <SafeAreaView >
      <View className='h-full  rounded-2xl bg-white shadow-lg shadow-black space-y-2'>

        <Header />
        <RiddleCard />
        <InputField input={input} />
        <CustomKeyboard onPress={handleKeyPress} />
        <SubmitButton />
        <Navbar />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

