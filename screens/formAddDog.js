import React, {Component} from 'react';
import { View , Text, TextInput, Picker, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';
import Boton from '../components/botones';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class addPerro extends Component {
  
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
            <Text style = {styles.titleBar}>Añadir perro</Text>
          </View>
          <View style = {styles.prueba3}>
            <ScrollView contentContainerStyle={styles.prueba2}>
              <TouchableOpacity style = {styles.addphoto}>
                <Icon name='camera-retro' color='#fff' size={60}/>
              </TouchableOpacity>
              <Text style = {styles.subadd}>Agregar foto</Text>
              <TextInput placeholder='Nombre' style={styles.inputRegistro}/>
              <TextInput placeholder='Descripción' style={styles.inputRegistro} multiline={true} numberOfLines={4}/>
              <View style={styles.contSelect}>
                <Text style = {styles.subadd}>Sexo</Text>
                <Picker selectedValue={this.state.sexo} style={styles.select} onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
                  <Picker.Item label="Macho" value="macho" style={styles.inputRegistro}/>
                  <Picker.Item label="Hembra" value="hembra" style={styles.inputRegistro}/>
                </Picker>
              </View>
              <TextInput placeholder='Raza' style={styles.inputRegistro}/>
              <TextInput placeholder='Edad' style={styles.inputRegistro}/>
              <TextInput placeholder='Vacunas' style={styles.inputRegistro}/>
              <TextInput placeholder='Certificados' style={styles.inputRegistro}/>
              <View style = {styles.prueba}>
                <TouchableOpacity style = {styles.btnform}>
                  <Text style = {styles.btnftext}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btnform}>
                  <Text style = {styles.btnftext}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
}

