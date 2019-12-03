import React, {Component} from 'react';
import { View , Text, Image, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import CardInfo from '../components/cardInfo';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class perfilPerro extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--
render() {
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor='#F03579' barStyle="light-content"/>
        <View style = {styles.barTitle}>
          {/* <Text style = {styles.titleBar}>Perfil perro</Text> */}
          <TouchableOpacity style = {styles.back} onPress = {() => {this.props.navigation.navigate('perfilUsuario')}}>
            <Icon name='long-arrow-left' color='#fff' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.editar} onPress = {() => {this.props.navigation.navigate('formEditarPerro')}}>
            <Icon name='edit' color='#fff' size={20}/>
          </TouchableOpacity>
        </View>
        <View style = {styles.contSup}>
          <Image source = {require('../images/perro.png')} style = {styles.profilePhoto}/>
          <Text style = {styles.username}>Firulais</Text>
          <View style = {styles.contBotonCirc}>
            <View style = {styles.contBtnTxt}>
            </View>
          </View>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer}>
            <CardInfo seccion = 'Descripción' contenido = 'Ingrese el texto aquí'/>
            <CardInfo seccion = 'Sexo'/>
            <CardInfo seccion = 'Raza'/>
            <CardInfo seccion = 'Edad'/>
            <CardInfo seccion = 'Vacunas'/>
            <CardInfo seccion = 'Certificados'/>
          </ScrollView>
        </View>
      </View>
    );
  }
}