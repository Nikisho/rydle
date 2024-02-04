import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface InputFieldProps {
  input: string;
}
const InputField: React.FC<InputFieldProps> = ({input}) => {
  return (
    <View className='m-3 mx-2'>
      <Text className='shadow-xl shadow-black bg-white rounded-xl p-3 '>
        {input}
      </Text>
    </View>
  )
}

export default InputField