import React, {Component} from 'react';
import { View , Text, Image, ScrollView} from 'react-native';
import styles from '../styles/globalStyles';

export default class mensajes extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--
    render() {
      return (
        <View style = {styles.container}>
            <Text>mensajes</Text>
        </View>
      );
    }
}