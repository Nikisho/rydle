import { View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RiddleCard from './RiddleCard'
import InputField from './InputField'
import CustomKeyboard from './CustomKeyboard'
import SubmitButton from './SubmitButton'
import { supabase } from '../../supabase'
import { signInAnonymously } from '../../utils/signInAnonymously'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth'
import { getRandomColor } from '../../utils/getRandomColor'
import { resetAsyncStorage } from '../../utils/resetAsyncStorage'
import Lives from './Lives'

interface userInfoProps {
	userName: string,
	userScore: number,
	userColor: string,
	uid: string
}

const HomeScreen = () => {
	const [input, setInput] = useState<string>('');
	const todaysDate = new Date();
	const [dailyRiddle, setDailyRiddle] = useState('');
	const [dailyRiddleAnswer, setDailyRiddleAnswer] = useState('');
	const maxAttemptsPerDay = 3;
	const storageKey = 'playerAttempts';
	const [remainingAttempts, setRemainingAttempts] = useState<number>(maxAttemptsPerDay);

	const fetchDailyRiddle = async () => {
		const { data, error } = await supabase
			.from('riddle-table')
			.select()
			.eq('date', todaysDate)
		setDailyRiddle((data![0].riddle).toUpperCase());
		setDailyRiddleAnswer((data![0].answer).toUpperCase())
		if (error) {
			console.log(error.message);
		}
	};
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
					userScore: data![0].score,
					userColor: getRandomColor(),
					uid: data![0].uid
				})
				if (error) {
					console.error(error.message)
				}
			}
		});
	}

	useEffect(() => {
		const loadAttempts = async () => {
			try {
				// Get the current date
				const currentDate = new Date().toISOString().slice(0, 10);

				// Get stored date and attempts
				const storedDate = await AsyncStorage.getItem('lastAttemptDate');
				const storedAttempts = await AsyncStorage.getItem(storageKey);

				// If there's no stored date or it's not today, reset attempts
				if (!storedDate || storedDate !== currentDate) {
					setRemainingAttempts(maxAttemptsPerDay);
					await AsyncStorage.setItem(storageKey, maxAttemptsPerDay.toString());
					await AsyncStorage.setItem('lastAttemptDate', currentDate);
				} else {
					// Otherwise, load stored attempts
					setRemainingAttempts(storedAttempts ? parseInt(storedAttempts, 10) : maxAttemptsPerDay);
				}
			} catch (error) {
				console.error('Error loading attempts:', error);
			}
		};

		loadAttempts();
		signInAnonymously();
		fetchDailyRiddle();
		fetchUser();
		// resetAsyncStorage(setRemainingAttempts)
	}, []);

	const saveAttempts = async (attempts: number) => {
		try {
			await AsyncStorage.setItem(storageKey, attempts.toString());
		} catch (error) {
			console.error('Error saving attempts:', error);
		}
	};

	const submitAnswer = async () => {
		if (input === '') return;

		let updatedAttempts = remainingAttempts;
		let points = 0;

		//Do nothing if there are no attempts left
		if (updatedAttempts === 0) {
			Alert.alert('No more attempts left for today :(');
			return;
		}

		//Update user score depending on the number of attempts remaining
		if (input === dailyRiddleAnswer) {
			points = updatedAttempts === 3 ? 15 : updatedAttempts === 2 ? 10 : updatedAttempts === 1 ? 5 : 0;
			const { error } = await supabase
				.from('users')
				.update({ score: userInfo?.userScore! + points! })
				.eq('uid', userInfo?.uid)

			Alert.alert('Well done! You get ' + points + ' points');
			setUserInfo({ ...userInfo!, userScore: userInfo?.userScore! + points! });

			if (error) console.error(error.message);

			//Since the answer is correct. Set the number of attemps to zero. 
			setRemainingAttempts(0);
			return;

		} else {
			Alert.alert('Wrong answer, try again!');
			// Decrease attempts for wrong answer
			if (updatedAttempts > 0) {
				updatedAttempts--;
			}
		}

		// Update UI state and save attempts to AsyncStorage
		setRemainingAttempts(updatedAttempts);
		saveAttempts(updatedAttempts);
	};

	const handleKeyPress = (key: string) => {
		setInput((prevInput) => (key === '   ' ? prevInput + ' ' : key === '<' ? prevInput.slice(0, -1) : prevInput + key));
	};

	return (
		<SafeAreaView >
			<View className='h-full rounded-2xl bg-white shadow-lg shadow-black py-5 '>
				<Header userInfo={userInfo!} />
				<RiddleCard dailyRiddle={dailyRiddle} />
				<InputField input={input} />
				<CustomKeyboard onPress={handleKeyPress} />
				<SubmitButton submitAnswer={submitAnswer} />
				<Lives remainingAttempts={remainingAttempts} />
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen

