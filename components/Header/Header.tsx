import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';  



export type RootStackParamList = {
	Profile: String | undefined;
};

const Header = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<SafeAreaView >
			<View className='flex-row mx-1 p-2 rounded-lg bg-orange-200 items-center  '>

				{/* Profile Icon */}
				<TouchableOpacity 
					onPress={() => navigation.navigate('Profile')!}
					className="">
					<Avatar
						size={32}
						rounded
						title='R'
						containerStyle={{ backgroundColor: "blue" }}
					/>
				</TouchableOpacity>
				{/* Game title */}
				<View className=' flex-1 items-center '>
					<Text className='text-xl font-bold'>
						Rydle
					</Text>
				</View>
				{/* Invite friends icon */}
				<View className='bg-red-200'>
					<Text>
						testtest
					</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Header