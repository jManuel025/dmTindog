import React, {Component} from 'react';
import { View , Text, Image, StatusBar, ScrollView } from 'react-native';
// Componentes
import Boton from '../components/botones'
import BotonTrans from '../components/botonesTrans'
import Input from '../components/inputs' //-- revisar --
//Estilos
import styles from '../styles/globalStyles'
export default class registro extends Component {
  constructor(props){
    super(props);
  }
  _registro = async() => {
    var datos = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      password: this.state.password
    };
    fetch('https://tindog-api.herokuapp.com/api/v1/auth/register',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.success){
          alert("Usuario creado exitosamente");
          this.props.navigation.navigate('login');
          // console.log(responseJson.token);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
          <Image source = {require('../images/logo.png')} style = {styles.logo}></Image>
          <Text style = {styles.Registertitles}>Tindog    </Text>
            <Input placeholder = "Nombre" onChangeText={(name) => this.setState({name})}/>
            <Input placeholder = "Edad" keyboardType='phone-pad' onChangeText={(age) => this.setState({age})}/>
            <Input placeholder = "Correo" keyboardType='email-address' onChangeText={(email) => this.setState({email})}/>
            <Input placeholder = "Teléfono" keyboardType='phone-pad' onChangeText={(phone) => this.setState({phone})}/>
            <Input placeholder = "Dirección" onChangeText={(address) => this.setState({address})}/>
            <Input placeholder = "Contraseña" secureTextEntry = {true} onChangeText={(password) => this.setState({password})}/>
          <View style={styles.RegisterContainer}>
            <Boton onPress = {this._registro} texto = "Registarme"/> 
            <BotonTrans onPress = {() => this.props.navigation.navigate('login')} texto = "Ya tengo una cuenta"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

