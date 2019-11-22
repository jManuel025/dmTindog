import React, {Component} from 'react';
import { View , Text, Image, StatusBar } from 'react-native';
// Componentes
import Boton from '../components/botones'
import BotonTrans from '../components/botonesTrans'
import Input from '../components/inputs' //-- revisar --
//Estilos
import styles from '../styles/globalStyles'

export default class login extends Component {

  constructor(props){
    super(props);
  }
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
              <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
              <Image source = {require('../images/logo.png')} style = {styles.logo}></Image>
              <Text style = {styles.titles}>Tindog</Text>
              <Input placeholder = "Usuario"/>
              <Input placeholder = "Contraseña" secureTextEntry = {true}/>
              <View style={styles.RegisterContainer}>
                <Boton onPress = {() => this.props.navigation.navigate('app')} texto = "Entrar"/> 
                <BotonTrans onPress = {() => this.props.navigation.navigate('registro')} texto = "Crear cuenta"/> 
              </View>
      </View>
    );
  }
}