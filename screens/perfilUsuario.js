import React, {Component} from 'react';
import { View , Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Card from '../components/cardDog';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class perfilUsuario extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this._getUserInfo();
    this._getUserDogs();
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
          this.setState({
            name: responseJson.data.user.name,
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

  _getUserDogs = async() => {
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);

    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/user/dogs/',{
        method: 'GET',
        headers: myheader,
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            cant: responseJson.count,
            dogs: responseJson.dogs,
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
        <StatusBar backgroundColor='#fff' barStyle="dark-content"/>
        <View style = {styles.contSup}>
          <TouchableOpacity style = {styles.settings} onPress = {() => this.props.navigation.navigate('configuracion')}>
            <Icon name='cog' color='#FF3980' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('verUserInfo')}>
            <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}/>
          </TouchableOpacity>
          <Text style = {styles.username}>{this.state.name}</Text>
          <Text style = {styles.subtitle}>Mis perros</Text>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer} >
            {this.state.cant <= 0 ?
              <Text style={styles.mensajes}>Aún no has registrado ningun perro</Text>
              :
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
            }
          </ScrollView>
        </View>
        <TouchableOpacity style = {styles.floatButton} onPress = {() => {this.props.navigation.navigate('formPerro')}}>
          <Icon name='plus' color='#fff' size={25}/>
        </TouchableOpacity>
      </View>
    );
  }
}
