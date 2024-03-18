import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface SubmitButtonProps {
    submitAnswer: () => void;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({submitAnswer}) => {
    return (
        <TouchableOpacity onPress={submitAnswer} className='flex-row self-center bg-violet-500 rounded-2xl p-3 w-2/3 justify-center my-2'>
            <Text className=' text-white font-bold justify-center'>
                Submit
            </Text>
        </TouchableOpacity>
    )
}

export default SubmitButton
