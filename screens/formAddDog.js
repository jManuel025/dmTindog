import React, {Component} from 'react';
import { View , Text } from 'react-native';
import styles from '../styles/globalStyles';
export default class addPerro extends Component {
    render() {
      return (
        <View style = {styles.container}>
          <Text>Añadir perro</Text>
        </View>
      );
    }
}

