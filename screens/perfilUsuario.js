import React, {Component} from 'react';
import { View , Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/cardDog';
import styles from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class perfilUsuario extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--
    render() {
      return (
        <View style = {styles.container}> 
          <View style = {styles.contSup}>
            <TouchableOpacity style = {styles.settings}>
              <Icon name = 'undo' color = '#888F94'/>
            </TouchableOpacity>
            <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}/>
            <Text style = {styles.username}>jManuel</Text>
            {/* <View style = {styles.contBotonCirc}>
              <View style = {styles.contBtnTxt}>
                <CircleButton icono = 'edit' icolor = '#00aced'/>
                <Text style = {styles.btnName}>Agregar</Text>
              </View>
              <View style = {styles.contBtnTxt}>
                <CircleButton icono = 'edit' icolor = '#00aced'/>
                <Text style = {styles.btnName}>Editar</Text>
              </View>
              <View style = {styles.contBtnTxt}>
                <CircleButton icono = 'edit' icolor = '#00aced'/>
                <Text style = {styles.btnName}>Ajustes</Text>
              </View>
            </View> */}
            <Text style = {styles.subtitle}>Mis perros</Text>
          </View>
          <View style = {styles.contInf}>
            <ScrollView contentContainerStyle={styles.dogContainer} >
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
              <Card imageUri = {require('../images/dog.jpg')} onPress = {() => this.props.navigation.navigate('perfilPerro')}/>
            </ScrollView>
          </View>
          <TouchableOpacity style = {styles.floatButton}>
            <Icon name='undo' color='#fff'/>
          </TouchableOpacity>
        </View>
      );
    }
}

