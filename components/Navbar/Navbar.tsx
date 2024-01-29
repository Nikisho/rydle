import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Profile: String | undefined;
};

const Navbar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='flex-row justify-between absolute bottom-0 bg-emerald-400 w-full p-3 px-10'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        className=''
      >
        <Icon
          name='home'
          size={30}
          type='ionicon'
        />

      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        className=''
      >
        <Icon
          name='people'
          size={30}
          type='ionicon'
        />

      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="settings"
          type='ionicon'
          color={'black'}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar