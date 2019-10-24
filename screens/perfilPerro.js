import React, {Component} from 'react';
import { View , Text, Image, ScrollView} from 'react-native';
import CircleButton from '../components/circleButton';
import CardInfo from '../components/cardInfo';
import styles from '../styles/globalStyles';

export default class perfilPerro extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--
render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.contSup}>
          <Image source = {require('../images/perro.png')} style = {styles.profilePhoto}/>
          <Text style = {styles.username}>Firulais</Text>
          <View style = {styles.contBotonCirc}>
            <View style = {styles.contBtnTxt}>
              {/* <CircleButton icono = 'edit' icolor = '#00aced'/> */}
              {/* <Text style = {styles.btnName}>Editar</Text> */}
            </View>
          </View>
        </View>
        <View style = {styles.contInf}>
          <ScrollView contentContainerStyle={styles.dogContainer}>
            <CardInfo seccion = 'Descripción' contenido = ' desacascadjksmc ksancka sklasnd kas oasdklas ksa ksadesacascadjksmc ksancka sklasnd kas oasdklas ksa ksadesacascadjksmc ksancka sklasnd kas oasdklas ksa ksadesacascadjksmc ksancka sklasnd kas oasdklas ksa ksadesacascadjksmc ksancka sklasnd kas oasdklas ksa ksa'/>
            <CardInfo seccion = 'Sexo'/>
            <CardInfo seccion = 'Raza'/>
            <CardInfo seccion = 'Tamaño'/>
            <CardInfo seccion = 'Edad'/>
            <CardInfo seccion = 'Vacunas'/>
            <CardInfo seccion = 'Certificados'/>
          </ScrollView>
        </View>
      </View>
    );
  }
}