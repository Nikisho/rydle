import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface InputFieldProps {
  input: string;
}
const InputField: React.FC<InputFieldProps> = ({ input }) => {
  return (
    <View className='mt-3 shadow-xl p-3 mx-2 h-20 rounded-xl shadow-black bg-white flex justify-center  '>
      {
        input === '' ?
          <Text className=' italic text-center text-xl text-gray-500  '>
            Type your answer...
          </Text> :
          <Text className=' text-center text-xl'>
            {input}
          </Text>
      }
    </View>
  )
}

export default InputField