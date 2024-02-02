/* This component shows the riddle and is in the home page
between the virtual keyboard and the header. */

import { Text, View } from 'react-native'
import React from 'react'

const RiddleCard = () => {
  return (
    <View className=' h-1/4 mx-2 items-center bg-white rounded-xl shadow-xl shadow-black'>
      <Text className='p-5 text-2xl font-mono italic' style={{ fontFamily: 'monospace' }}>
        You can see me in water but I never get wet. What am I?
      </Text>
    </View>
  )
}

export default RiddleCard