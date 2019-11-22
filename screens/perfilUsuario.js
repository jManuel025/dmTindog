import React, {Component} from 'react';
import { View , Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Card from '../components/cardDog';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class perfilUsuario extends Component {
  render() {
    return (
      <View style = {styles.container}> 
        <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
        <View style = {styles.contSup}>
          <TouchableOpacity style = {styles.settings} onPress = {() => this.props.navigation.navigate('configuracion')}>
            <Icon name='cog' color='#FF3980' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('verUserInfo')}>
            <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}/>
          </TouchableOpacity>
          <Text style = {styles.username}>jManuel</Text>
          <Text style = {styles.subtitle}>Mis perros</Text>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer} >
            <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
          </ScrollView>
        </View>
        <TouchableOpacity style = {styles.floatButton} onPress = {() => {this.props.navigation.navigate('formPerro')}}>
          <Icon name='plus' color='#fff' size={25}/>
        </TouchableOpacity>
      </View>
    );
  }
}
