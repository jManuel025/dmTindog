import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import perfilUsuario from '../screens/perfilUsuario'
import perfilPerro from '../screens/perfilPerro';
import mensajes from '../screens/mensajes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// export default createBottomTabNavigator({  
//     perfilUsuario: {
//         screen: perfilUsuario,
//         navigationOptions: {
//             tabBarLabel: "Perritos",
//             tabBarIcon: ({tintColor}) => (
//                 <Icon name="glass" size={20} color={tintColor}/>
//             ),
//         }
//     },
//     perfilPerro: {
//         screen: perfilPerro,
//         navigationOptions: {
//             tabBarLabel: "Perfil",
//             tabBarIcon: ({tintColor}) => (
//                 <Icon name="user" size={20} color={tintColor}/>
//             ),
//         }
//     },
//     mensajes: {
//         screen: mensajes,
//         navigationOptions: {
//             tabBarLabel: "Busqueda",
//             tabBarIcon: ({tintColor}) => (
//                 <Icon name="search" size={20} color={tintColor}/>
//             ),
//         }
//     },   
// },
// {
//     tabBarOptions: {
//         activeTintColor: '#3498D7'
//     }
// });

export default createMaterialBottomTabNavigator(
    {
        perfilUsuario:{
            screen: perfilUsuario,
            tabBarIcon: <Icon name='glass'/>
        },
        perfilUsuario: {screen: perfilPerro},
        mensajes: {screen: mensajes},
    },
    {
        initialRouteName: 'perfilUsuario',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
);