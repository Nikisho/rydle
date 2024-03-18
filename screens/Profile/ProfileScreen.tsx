import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from '@rneui/themed'
import { firebase } from '@react-native-firebase/auth';
import { supabase } from '../../supabase';
import { getRandomColor } from '../../utils/getRandomColor';
import Navbar from '../../components/Navbar/Navbar';

interface userInfoProps {
	userName: string,
	userScore: number,
	userColor: string,
}

const ProfileScreen = () => {
	const [userDetails, setUserDetails] = useState<userInfoProps | null>(null);

	const fetchUserDetails = () => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {

				const { error, data } = await supabase
					.from('users')
					.select()
					.eq('uid', user.uid);

				if (data) {
					setUserDetails({
						userName: (data![0].username),
						userScore: data![0].score,
						userColor: getRandomColor(),
					})
				}
				if (error) {
					console.error(error.message)
				}
			}
		})
	}

	useEffect(() => {
		fetchUserDetails();
	}, []);

	return (
		<SafeAreaView >
			<View className='flex flex-col h-full items-center   '>

				<View className='border-b w-full items-center justify-end h-1/2 bg-purple-500'>
					<View className='bg-white w-full p-4 h-1/2 items-center rounded-t-full '>

						<Avatar
							size={120}
							rounded
							title={((userDetails?.userName)?.charAt(0))?.toLocaleUpperCase()}
							containerStyle={{ backgroundColor: 'blue' }}
						/>
					</View>
				</View>

				<View className='w-full items-center justify-center h-24 flex flex-row space-x-3'

				>
					<Text className='text-2xl ' style={{ fontFamily: 'monospace' }}>
						Hey
					</Text>
					<Text className='text-2xl ' style={{ fontFamily: 'monospace' }}>
						{userDetails?.userName}!
					</Text>
				</View>

				<View className='border-t  w-full items-center flex flex-col p-6 justify-center space-y-4 '

				>

					<Text className='text-2xl ' style={{ fontFamily: 'monospace' }}>
						Your score is
					</Text>
					<View className='p-8 rounded-full bg-amber-600'>

						<Text className='text-2xl text-white font-mono font-bold'
							style={{ fontFamily: 'monospace' }}
						>
							{userDetails?.userScore}
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ProfileScreen