import React, {Component} from 'react';
import { View , Text, Image, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import CardInfo from '../components/cardInfo';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class perfilPerro extends Component {

constructor(props){
  super(props);
  this.state = {}
}

componentDidMount(){
  this._getDogData()
}

_getDogData = async() => {
  var id = this.props.navigation.getParam('id', null)
  console.log(id)

    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);
    var url = 'https://tindog-api.herokuapp.com/api/v1/user/dogs/' + id; 
    try{
      fetch(url, {
        method: 'GET',
        headers: myheader,
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.dog);
          this.setState({
            name: responseJson.dog.name,
            description: responseJson.dog.description,
            sex: responseJson.dog.sex,
            breed: responseJson.dog.breed,
            age: responseJson.dog.age,
            sex: responseJson.dog.sex,
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
          <Text style = {styles.username}>{this.state.name}</Text>
          <View style = {styles.contBotonCirc}>
            <View style = {styles.contBtnTxt}>
            </View>
          </View>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer}>
            <CardInfo seccion = 'Descripción' contenido = {this.state.description}/>
            <CardInfo seccion = 'Sexo' contenido = {this.state.sex}/>
            <CardInfo seccion = 'Raza' contenido = {this.state.breed}/>
            <CardInfo seccion = 'Edad' contenido = {this.state.age}/>
            {/* <CardInfo seccion = 'Vacunas'/>
            <CardInfo seccion = 'Certificados'/> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}