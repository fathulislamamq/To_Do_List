import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Splash extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 4000);
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5E5E5' }}>

        <Image style={{ width: 40, height: 70 }}
          source={require('../image/logo.jpg')} />

        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>  To Do List</Text>

        <ActivityIndicator size='large' color='#0A9EBE' />
      
      </View>
    );
  }
}
export default Splash;
