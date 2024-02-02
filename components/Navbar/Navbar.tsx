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
    <View className='flex-row justify-between absolute self-center bottom-2 border-t-0.5 w-full p-3 px-10'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className=''
      >
        <Icon
          name='home'
          size={20}
          type='ionicon'
          color={'#7c3aed'}

        />

      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        className=''
      >
        <Icon
          name='people'
          size={20}
          type='ionicon'
        />

      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="settings-outline"
          type='ionicon'
          size={20}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar