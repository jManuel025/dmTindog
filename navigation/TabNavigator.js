import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import perfilUsuario from '../screens/perfilUsuario';
import mensajes from '../screens/mensajes';
import perfilPerro from '../screens/perfilPerro'; 
import principal from '../screens/principal';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

export default createBottomTabNavigator({  
    perfilUsuario: {
        screen: perfilUsuario,
        navigationOptions: {
            tabBarLabel: "Perfil",
            tabBarIcon: ({tintColor}) => (
                <Icon name="glass" size={20} color={tintColor}/>
            ),
        }
    },
    perfilPerro: {
        screen: principal,
        navigationOptions: {
            tabBarLabel: "Inicio",
            tabBarIcon: ({tintColor}) => (
                <Icon name="user" size={20} color={tintColor}/>
            ),
        }
    },
    mensajes: {
        screen: mensajes,
        navigationOptions: {
            tabBarLabel: "Mensajes",
            tabBarIcon: ({tintColor}) => (
                <Icon name="search" size={20} color={tintColor}/>
            ),
        }
    },   
},
{
    tabBarOptions: {
        activeTintColor: '#3498D7'
    }
});

// export default createMaterialBottomTabNavigator(
//     {
//         perfilUsuario:{
//             screen: perfilUsuario,
//             tabBarIcon: <Icon name='glass'/>
//         },
//         // perfilPerro: {
//         //     screen: perfilPerro,
//         //     tabBarIcon: <Icon name='glass'/>
//         // },
//         mensajes: {
//             screen: mensajes,
//             tabBarIcon: <Icon name='glass'/>
//         },
//     },
//     {
//         initialRouteName: 'mensajes',
//         activeColor: '#f0edf6',
//         inactiveColor: '#3e2465',
//         barStyle: { backgroundColor: '#694fad' },
//     }
// );