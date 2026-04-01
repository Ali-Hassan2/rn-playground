import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { Counter, StudentGrid, TextInput, UseEffect } from './src/components';
import FlatListComponent from './src/components/flat-list';
import { ContactsViaClassComponent } from './src/screens';

const App = () => {
  const [namee, setName] = useState<string>('Ali Hassan');
  const [count, setCount] = useState<number>(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  const onChangeName = () => {
    setName('Aaqib Bhai');
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <Text
        style={{
          fontSize: 50,
        }}
      >
        {namee}'s APP.
      </Text>
      <Button title="Change Name" onPress={() => onChangeName()} />
      <Counter countValue={count} />
      <Button title="Increase" onPress={() => updateCount()} />
      <View style={{ margin: 20 }} />
      <TextInput />
      <FlatListComponent /> */}
      {/* <StudentGrid /> */}
      {/* <ContactsViaClassComponent /> */}
      <UseEffect />
    </View>
  );
};

export default App;
