import React, {Component} from 'react';
import { View , Text, Image, ScrollView,StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem} from "react-native-elements"
import Boton from '../components/botones'
export default class configuracion extends Component {
// No se bien en pantallas más chicas --arreglar contBotonCirc--

constructor(){
    super();
    this.state={
        menuItems:[
            {
                title:"Ubicación",
                iconType:"FontAwesome",
                iconNameRight:"chevron-right",
                iconColorRight:"#ccc",
                
                onPress:()=>console.log("Click")
            },{
                title:"Politica de Privacidad",
                iconType:"FontAwesome",
                iconNameRight:"chevron-right",
                iconColorRight:"#ccc",
                
                onPress:()=>console.log("Click")
            },{
                title:"Terminos y Condiciones",
                iconType:"FontAwesome",
                iconNameRight:"chevron-right",
                iconColorRight:"#ccc",
                
                onPress:()=>console.log("Click")
            },{
                title:"Licencias",
                iconType:"FontAwesome",
                iconNameRight:"chevron-right",
                iconColorRight:"#ccc",
                
                onPress:()=>console.log("Click")
            }
        ]
    }
}



render() {
    const{menuItems}=this.state;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>Configuración</Text>
            </View>
        
            <View >
                {
                    menuItems.map((item,index)=>(
                        <ListItem
                            key={index}
                            title={item.title}
                            leftIcon={{
                                type:item.iconType,
                                name:item.iconNameLeft,
                                color:item.iconColorLeft
                            }}
                            rightIcon={{
                                type:item.iconType,
                                name:item.iconNameRight,
                                color:item.iconColorRight,
                            }}
                            onPress={item.onPress}
                            containerStyle={styles.contentContainerStyle}
                        />
                    ))
                }
                
            </View> 
            <View style={styles.footer}>
                <TouchableOpacity style = {styles.boton} onPress={this.props.onPress}>  
                    <Text style = {styles.textoBoton1}> Cerrar Sesion</Text>
                </TouchableOpacity> 
                <TouchableOpacity style = {styles.boton} onPress={this.props.onPress}>  
                    <Text style = {styles.textoBoton2}> Eliminar Cuenta</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FCFCFC"
    },header:{
        width:"100%",
        height:60,
        borderBottomWidth:2,
        borderBottomColor:"#e3e3d3",
    },texto:{
        textAlign: "center",
        color: '#888F94',
        margin:17.5,
        fontWeight: 'bold',
        fontSize:20

    },
    contentContainerStyle:{
        borderBottomWidth:1,
        borderBottomColor:"#e3e3d3",
        
    },footer:{
        marginTop:350,
    },boton: {
        
        justifyContent: "center",
        backgroundColor: '#FCFCFC',
        padding: 7.5,
        margin: 9.0,
        borderRadius: 10,
        width: 300,
        height: 40,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        elevation: 4,
    },  
    textoBoton1:{
        color: '#FF3980',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },textoBoton2:{
        color: '#E64543',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
    
})