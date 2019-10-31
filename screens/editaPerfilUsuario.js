import React, {Component} from 'react';
import { View , Text } from 'react-native';
import {withNavigation} from 'react-navigation'
import styles from '../styles/globalStyles';

export default class editUsuario extends Component {
    render() {
      return (
        <View style = {styles.container}>
          <Text>Editar usuario</Text>
        </View>
      );
    }
}