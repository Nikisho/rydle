import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RiddleCard from './RiddleCard'
import InputField from './InputField'
import CustomKeyboard from './CustomKeyboard'
import SubmitButton from './SubmitButton'
import { supabase } from '../../supabase'
import { signInAnonymously } from '../../utils/signInAnonymously'

const HomeScreen = () => {
  const [input, setInput] = useState<string>('');
  const todaysDate = '2024-03-07';
  const [dailyRiddle, setDailyRiddle] = useState('');
  const [dailyRiddleAnswer, setDailyRiddleAnswer] = useState('');

  const fetchDailyRiddle = async () => {
    const {data, error } = await supabase
      .from('riddle-table')
      .select()
      .eq('date', todaysDate)
    setDailyRiddle((data![0].riddle).toUpperCase());
    setDailyRiddleAnswer((data![0].answer).toUpperCase())
    if (error) {
      console.log(error.message);
    }
  } 
  useEffect(() => {
    signInAnonymously();
    fetchDailyRiddle();
  }, []);

  const submitAnswer = () => {
    if (input === dailyRiddleAnswer) {
      alert('correct')
    } else {
      alert('wrong answer')
    }
  };


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
        <RiddleCard dailyRiddle={dailyRiddle}/>
        <InputField input={input} />
        <CustomKeyboard onPress={handleKeyPress} />
        <SubmitButton submitAnswer={submitAnswer}/>
        <Navbar />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

