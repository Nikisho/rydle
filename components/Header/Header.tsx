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
		<SafeAreaView>
			<View className='flex-row mx-1 p-3 rounded-lg bg-emerald-400 items-center' >

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
				<View className=' items-center absolute w-full'>
					<Text className='text-xl font-bold' style={{ fontFamily: 'monospace' }}>
						Rydle
					</Text>
				</View>
				{/* Invite friends icon */}

			</View>
		</SafeAreaView>
	)
}

export default Header