import React, {Component} from 'react';
import { View , Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/cardDog';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class perfilUsuario extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--
    render() {
      return (
        <View style = {styles.container}> 
          <View style = {styles.contSup}>
            <TouchableOpacity style = {styles.settings} onPress = {() => this.props.navigation.navigate('configuracion')}>
              <Icon name='cog' color='#888F94' size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.edit} onPress = {() => {this.props.navigation.navigate('formUsuario')}}>
              <Icon name='edit' color='#888F94' size={25}/>
            </TouchableOpacity>
            <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}/>
            <Text style = {styles.username}>jManuel  </Text>
            <Text style = {styles.subtitle}>Mis perros</Text>
          </View>
          <View style = {styles.contInf}>
            <ScrollView contentContainerStyle={styles.dogContainer} >
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
            </ScrollView>
          </View>
          <TouchableOpacity style = {styles.floatButton} onPress = {() => {this.props.navigation.navigate('formPerro')}}>
            <Icon name='plus' color='#fff' size={20}/>
          </TouchableOpacity>
        </View>
      );
    }
}

