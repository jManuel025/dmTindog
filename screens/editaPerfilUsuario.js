import React, {Component} from 'react';
import { View , Text, ScrollView,TouchableOpacity, TextInput} from 'react-native';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
export default class editaPerfilUsuario extends Component {
  constructor(props){
    super(props);
    this.state = {
      Nname:"",
      Nemail:"",
      Nage:"",
      Nphone:"",
      photo: ""
    }
  }
  // probar otra vez con formdata()
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
  _handleImagePicker = () => {
    const options = {
      title: 'Selecciona una foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri, type: 'image/jpg', name: 'image' };
        this.setState({
          photo: source,
        })
        console.log(source);
      }
    });
  }
  _updateUserInfo= async() => { 
    var datos = {
      name:this.state.Nname,
      email:this.state.Nemail,
      age:this.state.Nage,
      phone:this.state.Nphone,
      photo: this.state.photo
    };
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);
    myheader.append('Content-Type', 'application/json');
    myheader.append('Accept', 'application/json');
    myheader.append('Accept', 'multipart/form-data');

    // const data = new FormData();
    // data.append('photo', {
    //   uri: this.state.photo.uri,
    //   type: 'image/jpg',
    //   name: 'photo'
    // })
    // data.append('name', this.state.Nname);
    // data.append('email', this.state.Nemail);
    // data.append('age', this.state.Nage);
    // data.append('phone', this.state.Nphone);
    console.log(this.state.photo);
    try{
      fetch('https://tindog-api.herokuapp.com/api/v1/auth/user/',{
        method: 'PUT',
        headers: myheader,
        // body: JSON.stringify(data),
        body: JSON.stringify(datos),
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.success){
            alert("Actualización exitosa");
            this.props.navigation.navigate('verUserInfo');
            console.log(this.state.photo.uri);
          }
          else{
            alert("Ocurrio un error");
            console.log(responseJson);
            console.log(this.state.photo)
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
              <Icon name='camera-retro' color='#fff' size={60} onPress={this._handleImagePicker}/>
            </TouchableOpacity>
            <Text style = {styles.subadd}>Actualizar foto</Text>
            <TextInput placeholder={this.state.name} style={styles.inputRegistro} onChangeText={Nname=>this.setState({Nname})}/>
            <TextInput placeholder={this.state.email} style={styles.inputRegistro} onChangeText={Nemail=>this.setState({Nemail})} />
            <TextInput placeholder={this.state.age} style={styles.inputRegistro} onChangeText={Nage=>this.setState({Nage})}/>
            <TextInput placeholder={this.state.phone} style={styles.inputRegistro} onChangeText={Nphone=>this.setState({Nphone})}/>
            <View style = {styles.prueba}>
              <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('verUserInfo')}>
                <Text style = {styles.btnftext}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.btnform} onPress = {this._updateUserInfo}>
                <Text style = {styles.btnftext}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}