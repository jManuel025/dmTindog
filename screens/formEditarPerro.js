import React, {Component} from 'react';
import { View , Text, TextInput, Picker, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class editPerro extends Component {
    render() {
      return (
        <View style = {styles.container}>
          <StatusBar backgroundColor='#F03579' barStyle="light-content"/>
          <View style = {styles.barTitle}>
            <Text style = {styles.titleBar}>Editar</Text>
            <TouchableOpacity style = {styles.back} onPress = {() => {this.props.navigation.navigate('perfilPerro')}}>
                <Icon name='long-arrow-left' color='#fff' size={20}/>
            </TouchableOpacity>
          </View>
          <View style = {styles.prueba3}>
            <ScrollView contentContainerStyle={styles.prueba2}>
              <TouchableOpacity style = {styles.addphoto}>
                <Icon name='camera-retro' color='#fff' size={60}/>
              </TouchableOpacity>
              <Text style = {styles.subadd}>Actualizar foto</Text>
              <TextInput placeholder='Nombre' style={styles.inputRegistro}/>
              <TextInput placeholder='Descripción' style={styles.inputRegistro} multiline={true} numberOfLines={4}/>
              <TextInput placeholder='Edad' style={styles.inputRegistro}/>
              <TextInput placeholder='Vacunas' style={styles.inputRegistro}/>
              <TextInput placeholder='Certificados' style={styles.inputRegistro}/>
              <View style = {styles.prueba}>
                <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('perfilPerro')}>
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

