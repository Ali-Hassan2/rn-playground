import { Component } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { contactsStyles, TextStyles } from '../styles';
import { FLATLISTDATA } from '../constants';
import { ContactsFooter, RenderItem } from '../components';

interface ItemProps {
  id: number;
  title: string;
  rollNo: string;
}

class ContactsViaClassComponent extends Component {
  render() {
    const renderItems = ({ item }: ListRenderItemInfo<ItemProps>) => (
      <RenderItem item={item} />
    );

    let footerHeading = 'Contacts Footer Side';
    return (
      <View style={contactsStyles.mainContainer}>
        <Text style={TextStyles.text}>Contacts</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={FLATLISTDATA}
            renderItem={renderItems}
            keyExtractor={item => String(item.id)}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
          />
        </View>
        <View>
          <ContactsFooter propsData={footerHeading} />
        </View>
      </View>
    );
  }
}

export { ContactsViaClassComponent };
