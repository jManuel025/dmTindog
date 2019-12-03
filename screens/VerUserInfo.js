import React, {Component} from 'react';
import { View , Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import CardInfo from '../components/cardInfo';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VerUserInfo extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor='#F03579' barStyle="light-content"/>
        <View style = {styles.contSup}>
        <View style = {styles.barTitle}>
          {/* <Text style = {styles.titleBar}>Perfil perro</Text> */}
          <TouchableOpacity style = {styles.back} onPress = {() => {this.props.navigation.navigate('perfilUsuario')}}>
            <Icon name='long-arrow-left' color='#fff' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.editar} onPress = {() => {this.props.navigation.navigate('formUsuario')}}>
            <Icon name='edit' color='#fff' size={20}/>
          </TouchableOpacity>
        </View>
        <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}/>
          <Text style = {styles.username}>Fulanito</Text>
          <View style = {styles.contBotonCirc}>
            <View style = {styles.contBtnTxt}>
            </View>
          </View>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer}>
            <CardInfo seccion = 'Nombre' contenido = 'Aqui va el texto'/>
            <CardInfo seccion = 'Correo'/>
            <CardInfo seccion = 'Edad'/>
            <CardInfo seccion = 'Telefono'/>
            <CardInfo seccion = 'Ubicacion'/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

