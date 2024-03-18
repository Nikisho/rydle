import { View, Text } from 'react-native'
import React from 'react'

interface LivesProps {
    remainingAttempts: number;
}
const Lives: React.FC<LivesProps> = ({ remainingAttempts }) => {
    return (
        <View className='w-full flex flex-row justify-center space-x-3'>
            {
                [...Array(remainingAttempts)].map((e, i) => (
                    <Text className='text-xl' key={i}>
                        &#x2764;
                    </Text>
                ))
            }

        </View>
    )
}

export default Lives