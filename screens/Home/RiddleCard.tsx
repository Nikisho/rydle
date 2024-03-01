/* This component shows the riddle and is in the home page
between the virtual keyboard and the header. */
import { Text, View } from 'react-native'
import React from 'react'

interface RiddleCardProps {
  dailyRiddle: string;
}

const RiddleCard: React.FC<RiddleCardProps> = ({dailyRiddle}) => {

  
  return (
    <View className=' h-1/4 mx-2 flex justify-center bg-white rounded-xl shadow-xl shadow-black  '>
      <Text className='p-5 text-2xl text-center ' style={{ fontFamily: 'monospace' }}>
        {dailyRiddle}
      </Text>
    </View>
  )
}

export default RiddleCard