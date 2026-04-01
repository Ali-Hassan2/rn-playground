import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextStyles } from '../styles';

const UseEffect = () => {
  const [name, setName] = useState<string>('Ali Hassan');
  useEffect(() => {
    console.log('Hello first render');
  }, []);

  const updateName = () => {
    setName(prev => (prev === 'Ali Hassan' ? 'Faaiz' : 'Ali Hassan'));
  };
  return (
    <View>
      <Text style={TextStyles.text}>UseEffet</Text>
      <Text style={TextStyles.text}>{name}</Text>
      <Button title="Update Name" onPress={updateName} />
    </View>
  );
};

export { UseEffect };
