import {
  View,
  Text,
  Button,
  TextInput as RNTextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

const TextInput = () => {
  const [agenda, setAgenda] = useState('');

  const handleTextChange = (value: string) => {
    setAgenda(value);
  };

  return (
    <View>
      <Text style={TextInputStyles.TextStyle}>TextInput</Text>
      <Text style={TextInputStyles.TextStyle}>Agenda: {agenda}</Text>
      <RNTextInput
        placeholder="Please enter your dream...."
        onChangeText={handleTextChange}
        value={agenda}
        style={TextInputStyles.input}
      />
      <Button title="Clear text" onPress={() => setAgenda('')} />
    </View>
  );
};

const TextInputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  TextStyle: {
    fontSize: 40,
  },
});

export { TextInput };
