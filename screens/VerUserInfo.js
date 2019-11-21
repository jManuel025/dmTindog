import React, {Component} from 'react';
import { View , Text, TextInput, Picker, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';
import Boton from '../components/botones';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VerUserInfo extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      sexo: true,
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
              <Text style = {styles.subadd}>Agregar foto</Text>
              <TextInput placeholder='Nombre' style={styles.inputRegistro}/>
              
              <TextInput placeholder='Correo' style={styles.inputRegistro}/>
              <TextInput placeholder='Edad' style={styles.inputRegistro}/>
              <TextInput placeholder='Telefono' style={styles.inputRegistro}/>
              
              <View style = {styles.prueba}>
                <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('perfilUsuario')}>
                  <Text style = {styles.btnftext}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('perfilUsuario')}>
                  <Text style = {styles.btnftext}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
}

