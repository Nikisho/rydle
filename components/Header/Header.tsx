import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icon } from '@rneui/themed';
import { supabase } from '../../supabase';
import { firebase } from '@react-native-firebase/auth';

export type RootStackParamList = {
	Profile: String | undefined;
};

interface userInfoProps {
	userName: string,
	userScore: number
}
const Header = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const [userInfo, setUserInfo] = useState<userInfoProps | null>(null);

	const fetchUser = async () => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				console.log('User email: ', user.uid);
				const { data, error } = await supabase
					.from('users')
					.select()
					.eq('uid', user.uid)
				setUserInfo({
					userName: (data![0].username),
					userScore: data![0].score
				})
				if (error) {
					console.error(error.message)
				}
			}
		});

	}

	useEffect(() => {
		fetchUser();
	}, [])
	return (
		<View className='flex-row mx-2 justify-between mt-2 mb-3 p-2 rounded-2xl bg-white items-center shadow-xl shadow-black' >

			{/* Profile Icon */}
			<TouchableOpacity
				onPress={() => navigation.navigate('Profile')!}
				className="">
				<Avatar
					size={26}
					rounded
					title={((userInfo?.userName)?.charAt(0))?.toLocaleUpperCase()}
					containerStyle={{ backgroundColor: "blue" }}
				/>
			</TouchableOpacity>
			{/* Game title */}
			<View className=' items-center absolute w-full'>
				<Text className='text-xl font-bold' style={{ fontFamily: 'monospace' }}>
					Rydle
				</Text>
			</View>
			{/* score*/}
			<View className='p-2 px-4 rounded-xl bg-violet-500'>
				<Text className='font-semibold text-white'>
					{userInfo?.userScore}
				</Text>
			</View>

		</View>
	)
}

export default Header