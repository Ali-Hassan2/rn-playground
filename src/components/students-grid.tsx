import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { STUDENT_GRID_DATA } from '../constants';

const StudentGrid = () => {
  return (
    <View style={GridStyles.mainContainer}>
      <Text style={GridStyles.TextContainer}>StudentGrid</Text>
      <ScrollView contentContainerStyle={GridStyles.ScrollContainer}>
        {STUDENT_GRID_DATA.map(grid => {
          return (
            <View key={grid.id} style={GridStyles.GridItem}>
              <Text style={GridStyles.GridTextStyle}>{grid.name}</Text>
              <Text style={GridStyles.GridTextStyle}>{grid.persona}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const GridStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  TextContainer: {
    fontSize: 30,
    backgroundColor: 'yellow',
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
    padding: 20,
    marginVertical: 20,
  },
  ScrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  GridItem: {
    width: '48%',
    height: 120,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    color: 'white',
    backgroundColor: 'crimson',
    padding: 10,
    elevation: 5,
  },
  GridTextStyle: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
  },
});
export { StudentGrid };
