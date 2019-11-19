import React, {Component} from 'react';
import { View , Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import CardInfo from '../components/cardInfo';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class perfilPerro extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--
render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.contSup}>
        <TouchableOpacity style = {styles.back} onPress = {() => {this.props.navigation.navigate('perfilUsuario')}}>
            <Icon name='angle-left' color='#FF3980' size={55}/>
        </TouchableOpacity>
        <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto2}/>
          <Text style = {styles.username}>Fulanito  </Text>
          <View style = {styles.contBotonCirc}>
            <View style = {styles.contBtnTxt}>
            </View>
          </View>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer}>
            <CardInfo seccion = 'Nombre y Apellido' contenido = 'aqui va el texto'/>
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