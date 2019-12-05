import React, {Component} from 'react';
import { View , Text, TextInput, Picker, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../styles/globalStyles';
import Boton from '../components/botones';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
export default class addPerro extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      sex: '',
    }
  }

  updatePicker = (sex) => {
    this.setState({ sex: sex })
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
        const source =  response.data ;
        this.setState({
          photo: source,
        })
        console.log(source);
      }
    });
  }

  _addDog = async() => {
    // var datos = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   age: this.state.age,
    //   breed: this.state.breed,
    //   sex: this.state.sex,
    //   // vaccines: this.state.vaccines,
    //   // accolades: this.state.accolades
    // };
    // console.log(datos);
    
    var token = await AsyncStorage.getItem('usertoken');
    var auth = 'Bearer ' + token;
    // Crea objeto headers
    var myheader = new Headers();
    myheader.append('Authorization', auth);
    myheader.append('Content-Type', 'application/json');
    myheader.append('Accept', 'application/json');
    myheader.append('Content-Type', 'multipart/form-data');

    const data = new FormData();
    data.append('name', this.state.name);
    data.append('description', this.state.description);
    data.append('age', this.state.age);
    data.append('breed', this.state.breed);
    data.append('sex', this.state.sex);
    data.append('photo', this.state.photo);
    
    fetch('https://tindog-api.herokuapp.com/api/v1/user/dogs',{
      method: 'POST',
      headers: myheader,
      // body: JSON.stringify(datos)
      body: data
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.success){
          alert("Perro creado exitosamente");
          this.props.navigation.navigate('perfilUsuario');
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
                <Icon name='camera-retro' color='#fff' size={60} onPress={this._handleImagePicker}/>
              </TouchableOpacity>
              <Text style = {styles.subadd}>Agregar foto</Text>
              <TextInput placeholder='Nombre' style={styles.inputRegistro} onChangeText={(name) => this.setState({name})}/>
              <TextInput placeholder='Descripción' style={styles.inputRegistro} multiline={true} numberOfLines={4} onChangeText={(description) => this.setState({description})}/>
              <View style={styles.contSelect}>
                <Picker style = {styles.picker} itemStyle={styles.pickeri} selectedValue = {this.state.sex} onValueChange = {this.updatePicker}>
                    <Picker.Item label = "Selecciona el sexo" value = "" />
                    <Picker.Item label = "Macho" value = "Macho" />
                    <Picker.Item label = "Hembra" value = "Hembra" />
                </Picker>
              </View>
              <TextInput placeholder='Raza' style={styles.inputRegistro} onChangeText={(breed) => this.setState({breed})}/>
              <TextInput placeholder='Edad' style={styles.inputRegistro} onChangeText={(age) => this.setState({age})}/>
              {/* <TextInput placeholder='Vacunas' style={styles.inputRegistro} onChangeText={(vaccines) => this.setState({vaccines})}/>
              <TextInput placeholder='Certificados' style={styles.inputRegistro} onChangeText={(accolades) => this.setState({accolades})}/> */}
              <View style = {styles.prueba}>
                <TouchableOpacity style = {styles.btnform} onPress = {() => this.props.navigation.navigate('perfilUsuario')}>
                  <Text style = {styles.btnftext}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btnform} onPress = {this._addDog}>
                  <Text style = {styles.btnftext}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
}

