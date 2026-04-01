import { View, Text } from 'react-native';
import React from 'react';

interface CounterProps {
  countValue: number;
}

const Counter = ({ countValue }: CounterProps) => {
  return (
    <View>
      <Text style={TextStyle}>Counter Value: {countValue}</Text>
    </View>
  );
};

const TextStyle = {
  fontSize: 50,
  fontWeight: '900',
} as const;

export { Counter };
