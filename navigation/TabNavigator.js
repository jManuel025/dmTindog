import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import perfilUsuario from '../screens/perfilUsuario';
import mensajes from '../screens/mensajes';
import principal from '../screens/principal';

export default createBottomTabNavigator({  
    perfilUsuario: {
        screen: perfilUsuario,
        navigationOptions: {
            tabBarLabel: "Perfil",
            tabBarIcon: ({tintColor}) => (
                <Icon name="user" size={20} color={tintColor}/>
            ),
        }
    },
    principal: {
        screen: principal,
        navigationOptions: {
            tabBarLabel: "Inicio",
            tabBarIcon: ({tintColor}) => (
                <Icon name="paw" size={20} color={tintColor}/>
            ),
        }
    },
    mensajes: {
        screen: mensajes,
        navigationOptions: {
            tabBarLabel: "Mensajes",
            tabBarIcon: ({tintColor}) => (
                <Icon name="comments" size={20} color={tintColor}/>
            ),
        }
    },   
},
{
    tabBarOptions: {
        activeTintColor: '#FF3980'
    }
});