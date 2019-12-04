import React, {Component} from 'react';
import { View , Text, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import CardInfo from '../components/cardInfo';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
export default class VerUserInfo extends Component {


  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this._getUserInfo();
  }

  _getUserInfo = async() => {
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);

    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/auth/loggedUser/',{
        method: 'POST',
        headers: myheader,
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log( responseJson.data.user);
          
          this.setState({
            name: responseJson.data.user.name,
            email: responseJson.data.user.email,
            location: responseJson.data.user.location.city +" , "+responseJson.data.user.location.country,
            phone: responseJson.data.user.phone,
            age: responseJson.data.user.age,
          }, function(){

          });
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
          <Text style = {styles.username}>{this.state.name}</Text>
          <View style = {styles.contBotonCirc}>
            <View style = {styles.contBtnTxt}>
            </View>
          </View>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer}>
            <CardInfo seccion = 'Nombre y Apellido' contenido = {this.state.name}/>
            <CardInfo seccion = 'Correo'contenido = {this.state.email}/>
            <CardInfo seccion = 'Edad'contenido = {this.state.age}/>
            <CardInfo seccion = 'Telefono'contenido = {this.state.phone}/>
            <CardInfo seccion = 'Ubicacion'contenido = {this.state.location}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

