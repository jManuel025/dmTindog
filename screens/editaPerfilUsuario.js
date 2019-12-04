import React, {Component} from 'react';
import { View , Text, ScrollView,TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
export default class editaPerfilUsuario extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Nname:"",
      Nemail:"",
      Nage:"",
      Nphone:""
    }
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
  _UpdateUserInfo= async() => { 
    console.log(this.state.Nname);
    
    var datos = {
      name:this.state.Nname,
      email:this.state.Nemail,
      age:this.state.Nage,
      phone:this.state.Nphone,
      
    };
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);

    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/auth/user',{
        method: 'PUT',
        headers: myheader,
        body: JSON.stringify(datos),
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          
          if(responseJson.success){
            alert("Inicio de sesión exitoso");
            AsyncStorage.setItem('usertoken', responseJson.token);
            this.props.navigation.navigate('app');
          }
          else{
            alert("Datos incorrectos, intenta otra vez");
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
      <View style = {styles.container}>
        <View style = {styles.barTitle}>
          <Text style = {styles.titleBar}>Edita tu información</Text>
        </View>
        <View style = {styles.prueba3}>
          <ScrollView contentContainerStyle={styles.prueba2}>
            <TouchableOpacity style = {styles.addphoto}>
              <Icon name='camera-retro' color='#fff' size={60}/>
            </TouchableOpacity>
            <Text style = {styles.subadd}>Actualizar foto</Text>
            <TextInput placeholder={this.state.name} style={styles.inputRegistro}onChangeText={Nname=>this.setState({Nname})}/>
            
            <TextInput placeholder={this.state.email} style={styles.inputRegistro} onChangeText={Nemail=>this.setState({Nemail})} />
            <TextInput placeholder={this.state.age} style={styles.inputRegistro} onChangeText={Nage=>this.setState({Nage})}/>
            <TextInput placeholder={this.state.phone} style={styles.inputRegistro} onChangeText={Nphone=>this.setState({Nphone})}/>
            
            <View style = {styles.prueba}>
              <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('verUserInfo')}>
                <Text style = {styles.btnftext}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnform} onPress = {() => this._UpdateUserInfo()}>
                <Text style = {styles.btnftext}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}