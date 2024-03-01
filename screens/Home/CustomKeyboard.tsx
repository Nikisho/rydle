import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
interface CustomKeyboardProps {
  onPress: (key: string) => void;
};
const windowWidth = Dimensions.get('window').width;
const CustomKeyboard: React.FC<CustomKeyboardProps> = ({onPress}) => {
  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<'],
    [' '], // Space bar,
    
  ];

  return (
    <View style={styles.keyboard} className='mt-3' >
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              style={key === ' ' ? styles.largeKey : styles.key}
              onPress={() => onPress(key)}
              className={key==='<' ? 'bg-violet-500':''}
            >
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 9,
    margin: 1,
    borderRadius: 5,
    width: windowWidth / 11, // Adjust the divisor to make keys narrower or wider
  },
  largeKey: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: windowWidth / 3, // Adjust the divisor to make the space bar larger
  },
  keyText: {
    fontSize: 13,
  },
});



export default CustomKeyboard