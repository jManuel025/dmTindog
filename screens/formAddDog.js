import React, {Component} from 'react';
import { View , Text, TextInput } from 'react-native';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Boton from '../components/botones'

export default class addPerro extends Component {
    render() {
      return (
        <View style = {styles.container}>
          <View style = {styles.barTitle}>
            <Text style = {styles.titleBar}>Añadir perro</Text>
          </View>
          <TextInput placeholder='Descripción' style={styles.inputRegistro}/>
          <TextInput placeholder='Nombre' style={styles.inputRegistro}/>
          <TextInput placeholder='Sexo' style={styles.inputRegistro}/>
          <TextInput placeholder='Raza' style={styles.inputRegistro}/>
          <TextInput placeholder='Edad' style={styles.inputRegistro}/>
          <TextInput placeholder='Vacunas' style={styles.inputRegistro}/>
          <TextInput placeholder='Certificados' style={styles.inputRegistro}/>
        </View>
      );
    }
}

