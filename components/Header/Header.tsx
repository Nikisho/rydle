import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';
interface userInfoProps {
	userInfo : {
		userName: string,
		userScore: number,
		userColor: string
	}
}
const Header = ({userInfo}: userInfoProps) => {
	return (
		<View className='flex-row mx-2 justify-between mt-2 mb-3 p-2 rounded-2xl bg-white items-center shadow-xl shadow-black' >

			{/* Profile Icon */}
			<View
				className="rounded-full ">
				<Avatar
					size={28}
					rounded 
					title={((userInfo?.userName)?.charAt(0))?.toLocaleUpperCase()}
					containerStyle={{ backgroundColor: userInfo?.userColor }}
				/>
			</View>
			{/* Game title */}
			<View className=' items-center absolute w-full'>
				<Text className='text-xl font-bold' style={{ fontFamily: 'monospace' }}>
					Rydle
				</Text>
			</View>
			{/* score*/}
			<View className='p-1 px-3 rounded-lg bg-violet-500'>
				<Text className='font-semibold text-xl text-white'>
					{userInfo?.userScore}
				</Text>
			</View>

		</View>
	)
}

export default Header