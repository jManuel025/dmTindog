import React, {Component} from 'react';
import { View , Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import CircleButton from '../components/circleButton'
//Estilos
import styles from '../styles/globalStyles'

export default class userProfile extends Component {
    render() {
      return (
        <View contentContainerStyle={styles.container}> 
          <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}></Image>
          <View style = {styles.contBotonCirc}>
            <CircleButton/>
            <CircleButton/>
            <CircleButton/>
          </View>
          <ScrollView contentContainerStyle={styles.container}>
            
          </ScrollView>
        </View>
      );
    }
}