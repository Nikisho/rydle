import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const resetAsyncStorage = async (setState: any) => {
    try {
      // Clear all items in AsyncStorage
      await AsyncStorage.clear();
      // Reset UI state
      setState(3);
      Alert.alert('AsyncStorage has been reset.');
    } catch (error) {
      console.error('Error resetting AsyncStorage:', error);
    }
};