import React, {Component} from 'react';
import { View , Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import CircleButton from '../components/circleButton'
import Card from '../components/cardDog'
//Estilos
import styles from '../styles/globalStyles'

export default class userProfile extends Component {
  
    render() {
      return (
        <View style = {styles.container}> 
          <View style = {styles.contSup}>
            <Image source = {require('../images/usuario.png')} style = {styles.profilePhoto}/>
            <Text style = {styles.username}>jManuel</Text>
            <View style = {styles.contBotonCirc}>
              <View style = {styles.contBtnTxt}>
                <CircleButton/>
                <Text style = {styles.btnName}>Agregar</Text>
              </View>
              <View style = {styles.contBtnTxt}>
                <CircleButton/>
                <Text style = {styles.btnName}>Editar</Text>
              </View>
              <View style = {styles.contBtnTxt}>
                <CircleButton/>
                <Text style = {styles.btnName}>Ajustes</Text>
              </View>
            </View>
          </View>
          <View style = {styles.contInf}>
            <ScrollView contentContainerStyle={styles.dogContainer} >
              <Text style = {styles.subtitle}>Mis perros</Text>
              <Card imageUri = {require('../images/dog.jpg')}/>
              <Card imageUri = {require('../images/dog.jpg')}/>
              <Card imageUri = {require('../images/dog.jpg')}/>
              <Card imageUri = {require('../images/dog.jpg')}/>
              <Card imageUri = {require('../images/dog.jpg')}/>
              <Card imageUri = {require('../images/dog.jpg')}/>
            </ScrollView>
          </View>
        </View>
      );
    }
}