import React, {Component} from 'react';
import { View , Text, TextInput, Picker } from 'react-native';
import styles from '../styles/globalStyles';
import Boton from '../components/botones';

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
          <TextInput placeholder='Nombre' style={styles.inputRegistro}/>
          <TextInput placeholder='Descripción' style={styles.inputRegistro} multiline={true} numberOfLines={4}/>
          <View style={styles.contSelect}>
            <Text>Sexo</Text>
            <Picker
              selectedValue={this.state.sexo}
              style={styles.select}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({sexo: itemValue})
              }>
              <Picker.Item label="Macho" value="macho" />
              <Picker.Item label="Hembra" value="hembra" />
            </Picker>
          </View>
          <TextInput placeholder='Raza' style={styles.inputRegistro}/>
          <TextInput placeholder='Edad' style={styles.inputRegistro}/>
          <TextInput placeholder='Vacunas' style={styles.inputRegistro}/>
          <TextInput placeholder='Certificados' style={styles.inputRegistro}/>
          <Boton texto = 'Agregar' onPress = {() => this.props.navigation.navigate('perfilUsuario')}/>
        </View>
      );
    }
}

