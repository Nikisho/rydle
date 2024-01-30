/* This component shows the riddle and is in the home page
between the virtual keyboard and the header. */

import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const RiddleCard = () => {
  return (
    <SafeAreaView className=' h-1/4 my-3 bg-emerald-200 items-center'>
      <Text className='p-5 text-2xl font-mono italic' style={{ fontFamily: 'monospace' }}>
        You can see me in water but I never get wet. What am I?
      </Text>
    </SafeAreaView>
  )
}

export default RiddleCard