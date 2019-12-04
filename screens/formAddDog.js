import React, {Component} from 'react';
import { View , Text, TextInput, Picker, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../styles/globalStyles';
import Boton from '../components/botones';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
export default class addPerro extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      sex: "Macho",
    }
  }
  _addDog = async() => {
    var datos = {
      name: this.state.name,
      description: this.state.description,
      age: this.state.age,
      breed: this.state.breed,
      sex: this.state.sex,
      vaccines: this.state.vaccines,
      accolades: this.state.accolades
    };
    console.log(datos);
    
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);
    fetch('https://tindog-api.herokuapp.com/api/v1/user/dogs',{
      method: 'POST',
      headers: myheader,
      body: JSON.stringify(datos),
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        
        if(responseJson.success){
          alert("Perro creado exitosamente");
          this.props.navigation.navigate('main');
          // console.log(responseJson.token);
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
    render() {
      return (
        <View style = {styles.container}>
          <StatusBar backgroundColor='#F03579' barStyle="light-content"/>
          <View style = {styles.barTitle}>
            <Text style = {styles.titleBar}>Añadir</Text>
            <TouchableOpacity style = {styles.back} onPress = {() => {this.props.navigation.navigate('perfilUsuario')}}>
              <Icon name='long-arrow-left' color='#fff' size={20}/>
            </TouchableOpacity>
          </View>
          <View style = {styles.prueba3}>
            <ScrollView contentContainerStyle={styles.prueba2}>
              <TouchableOpacity style = {styles.addphoto}>
                <Icon name='camera-retro' color='#fff' size={60}/>
              </TouchableOpacity>
              <Text style = {styles.subadd}>Agregar foto</Text>
              <TextInput placeholder='Nombre' style={styles.inputRegistro} onChangeText={(name) => this.setState({name})}/>
              <TextInput placeholder='Descripción' style={styles.inputRegistro} multiline={true} numberOfLines={4} onChangeText={(description) => this.setState({description})}/>
              <View style={styles.contSelect}>
                <Text style = {styles.subadd}>Sexo</Text>
                <Picker selectedValue={this.state.sex} style={styles.select} onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
                  <Picker.Item label="Macho" value="macho" style={styles.inputRegistro}/>
                  <Picker.Item label="Hembra" value="hembra" style={styles.inputRegistro}/>
                </Picker>
              </View>
              <TextInput placeholder='Raza' style={styles.inputRegistro} onChangeText={(breed) => this.setState({breed})}/>
              <TextInput placeholder='Edad' style={styles.inputRegistro} onChangeText={(age) => this.setState({age})}/>
              <TextInput placeholder='Vacunas' style={styles.inputRegistro} onChangeText={(vaccines) => this.setState({vaccines})}/>
              <TextInput placeholder='Certificados' style={styles.inputRegistro} onChangeText={(accolades) => this.setState({accolades})}/>
              <View style = {styles.prueba}>
                <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('perfilUsuario')}>
                  <Text style = {styles.btnftext}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btnform} onPress = {() => this._addDog()}>
                  <Text style = {styles.btnftext}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
}

