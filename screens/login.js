import React, {Component} from 'react';
import { View , Text, Image, TouchableOpacity } from 'react-native';
// Componentes
import Boton from '../components/botones'
import Input from '../components/inputs' //-- revisar --
//Estilos
import styles from '../styles/globalStyles'

export default class login extends Component {
  //funciones
  _prueba(){
    console.log('sirve')
  }

  _otraFuncion(){
    console.log('sirvex2')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Image source = {require('../images/logo.png')} style = {styles.logo}></Image>
            <Text style = {styles.titles}>Tindog   </Text>
            <Input placeholder = "Usuario"/>
            <Input placeholder = "Contraseña" secureTextEntry = {true}/>
            <View style={styles.RegisterContainer}>
            <Boton onPress = {() => this._prueba()} texto = "Entrar"/> 
            
            {/* <View style = {styles.prueba1}>
              <TouchableOpacity style = {styles.gl}><Text>Google</Text></TouchableOpacity>
              <TouchableOpacity style = {styles.fb}><Text>Facebook</Text></TouchableOpacity>
            </View> */}
            <Text style = {styles.texto}>Crear cuenta</Text> 
            <Text style = {styles.texto}>¿Olvidaste tu contraseña?</Text>
            </View>
        </View>
      </View>
    );
  }
}
// Estilos en globalStyles