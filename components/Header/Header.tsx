import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';

export type RootStackParamList = {
	Profile: String | undefined;
};

const Header = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<View className='flex-row mx-2 mt-2 mb-3 p-2 rounded-2xl bg-white items-center shadow-xl shadow-black' >

			{/* Profile Icon */}
			<TouchableOpacity
				onPress={() => navigation.navigate('Profile')!}
				className="">
				<Avatar
					size={26}
					rounded
					title='R'
					containerStyle={{ backgroundColor: "blue" }}
				/>
			</TouchableOpacity>
			{/* Game title */}
			<View className=' items-center absolute w-full'>
				<Text className='text-xl font-bold' style={{ fontFamily: 'monospace' }}>
					Rydle
				</Text>
			</View>
			{/* Invite friends icon */}

		</View>
	)
}

export default Header