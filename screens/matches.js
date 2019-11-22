import React, {Component} from "react";
import { View, Text, StatusBar } from 'react-native';
import styles from '../styles/globalStyles';



export default class matches extends Component {
  render() {
    return (
      <View style = {styles.container}> 
        <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
        <Text>matches</Text>
      </View>
    );
  }
}