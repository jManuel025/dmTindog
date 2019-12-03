import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
  _login = async() => {
    var datos = {
      email: this.state.email,
      password: this.state.password
    };
    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/auth/login',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.success){
            alert("Inicio de sesión exitoso");
            AsyncStorage.setItem('usertoken', responseJson.token);
            this.props.navigation.navigate('app');
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    catch(e){
      console.log(e);
    }

    
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
        <Image source = {require('../images/logo.png')} style = {styles.logo}></Image>
        <Text style = {styles.titles}>Tindog</Text>
        <Input placeholder = "Correo" onChangeText={(email) => this.setState({email})}/>
        <Input placeholder = "Contraseña" secureTextEntry = {true} onChangeText={(password) => this.setState({password})}/>
        <View style={styles.RegisterContainer}>
          <Boton onPress = {this._login} texto = "Entrar"/> 
          <BotonTrans onPress = {() => this.props.navigation.navigate('registro')} texto = "Crear cuenta"/> 
        </View>
      </View>
    );
  }
}