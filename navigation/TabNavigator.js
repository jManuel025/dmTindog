import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import perfilUsuario from '../screens/perfilUsuario';
import matches from '../screens/matches';
import principal from '../screens/principal';

export default createMaterialBottomTabNavigator({  
    perfilUsuario: {
        screen: perfilUsuario,
        navigationOptions: {
            title: 'Mis perros',
            tabBarIcon: ({tintColor}) => (
                <Icon name="paw" size={20} color={tintColor}/>
            ),
        }
    },
    principal: {
        screen: principal,
        navigationOptions: {
            title: 'Inicio',
            tabBarIcon: ({tintColor}) => (
                <Icon name="fire" size={20} color={tintColor}/>
            ),
        }
    },
    matches: {
        screen: matches,
        navigationOptions: {
            title: 'Matches',
            tabBarIcon: ({tintColor}) => (
                <Icon name="heart" size={20} color={tintColor}/>
            ),
        }
    },   
},
{
    initialRouteName: 'principal',
    activeColor: '#f0edf6',
    inactiveColor: '#94285C',
    barStyle: { backgroundColor: '#FF3980' },
});