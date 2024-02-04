import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const SubmitButton = () => {
    return (
        <TouchableOpacity className='flex-row self-center bg-violet-500 rounded-2xl p-3 w-1/2 justify-center my-4'>
            <Text className=' text-white font-bold justify-center'>
                Submit
            </Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({})