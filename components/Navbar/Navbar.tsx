import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: String | undefined;
  Profile: String | undefined;
};

const Navbar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='flex-row justify-between absolute self-center bottom-2 border-t-0.5 w-full py-3 '>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className='flex flex-row w-1/2 justify-center border-r border-1'
      >
        <Icon
          name='home'
          size={24}
          type='ionicon'
          color={'#7c3aed'}

        />

      </TouchableOpacity>
      <TouchableOpacity
        className='flex flex-row w-1/2 justify-center  border-1'

      >
        <Icon
          name="settings-outline"
          type='ionicon'
          size={24}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar