import { Text, View } from 'react-native';
import { FlatListStyles } from '../styles';

interface RenderItemProps {
  item: {
    id: number;
    title: string;
    rollNo: string;
  };
}

const RenderItem = ({ item }: RenderItemProps) => {
  return (
    <View style={FlatListStyles.itemContainer}>
      <Text style={FlatListStyles.itemTitle}>{item.title}</Text>
      <Text style={FlatListStyles.itemRollNo}>Roll No: {item.rollNo}</Text>
    </View>
  );
};

export { RenderItem };
