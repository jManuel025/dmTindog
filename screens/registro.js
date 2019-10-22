import React, {Component} from 'react';
import { View , Text, Image } from 'react-native';
// Componentes
import Boton from '../components/botones'
import BotonTrans from '../components/botonesTrans'
import Input from '../components/inputs' //-- revisar --
//Estilos
import styles from '../styles/globalStyles'
export default class registro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Image source = {require('../images/logo.png')} style = {styles.logo}></Image>
            <Text style = {styles.Registertitles}>Tindog    </Text>
              <Input placeholder = "Usuario"/>
              <Input placeholder = "Correo"/>
              <Input placeholder = "Contraseña" secureTextEntry = {true}/>
              <Input placeholder = "Confirmar Contraseña" secureTextEntry = {true}/>
            <View style={styles.RegisterContainer}>
              <Boton onPress = {() => this.props.navigation.navigate('app')} texto = "Registarme"/> 
              <BotonTrans onPress = {() => this.props.navigation.navigate('login')} texto = "Ya tengo una cuenta"/>
            </View>
        </View>
      </View>
    );
  }
}

