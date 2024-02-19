/* This component shows the riddle and is in the home page
between the virtual keyboard and the header. */

import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase'

const RiddleCard = () => {
  const todaysDate = new Date();
  const [dailyRiddle, setDailyRiddle] = useState('');
  const [dailyRiddleAnswer, setDailyRiddleAnswer] = useState('');
  const fetchDailyRiddle = async () => {
    const {data, error } = await supabase
      .from('riddle-table')
      .select()
      .eq('date', todaysDate)
    setDailyRiddle(data![0].riddle);
    setDailyRiddleAnswer(data![0].answer)
    if (error) {
      console.log(error.message);
    }
  } 
  useEffect(() => {
    fetchDailyRiddle()
  }, [])
  
  return (
    <View className=' h-1/4 mx-2 flex justify-center bg-white rounded-xl shadow-xl shadow-black  '>
      <Text className='p-5 text-2xl text-center ' style={{ fontFamily: 'monospace' }}>
        {dailyRiddle}
      </Text>
    </View>
  )
}

export default RiddleCard