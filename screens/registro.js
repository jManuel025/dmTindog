import React, {Component} from 'react';
import { StyleSheet, View , Text} from 'react-native';

export default class login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text>Registro</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#685123',
  }
});