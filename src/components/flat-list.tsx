import {
  View,
  Text,
  FlatList as RNFlatList,
  ListRenderItemInfo,
} from 'react-native';
import React from 'react';
import { FlatListStyles } from '../styles';
import { FLATLISTDATA } from '../constants';

interface ListItem {
  id: number;
  title: string;
  rollNo: string;
}

const FlatListComponent = () => {
  const renderItem = ({ item }: ListRenderItemInfo<ListItem>) => {
    return (
      <View style={FlatListStyles.itemContainer}>
        <Text style={FlatListStyles.itemTitle}>{item.title}</Text>
        <Text style={FlatListStyles.itemRollNo}>Roll No: {item.rollNo}</Text>
      </View>
    );
  };

  return (
    <View style={FlatListStyles.container}>
      <Text style={FlatListStyles.headerText}>Student List</Text>
      <RNFlatList
        data={FLATLISTDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={true}
      />
    </View>
  );
};

export default FlatListComponent;
