import { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { TextStyles } from '../styles';

interface States {
  personalName: string;
}

class ContactsFooter extends Component<{}, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      personalName: 'Ali Hassan',
    };
  }

  getName = () => {
    return this.state.personalName;
  };

  setName = () => {
    return this.setState(prev => ({
      personalName: prev.personalName === 'Ali Hassan' ? 'Faaiz' : 'Ali Hassan',
    }));
  };
  render() {
    return (
      <View>
        <Text style={TextStyles.text}>Your Name: {this.getName()}</Text>
        <Button title="Update Name" onPress={this.setName} />
      </View>
    );
  }
}

export { ContactsFooter };
