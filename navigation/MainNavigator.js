import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import userProfile from '../screens/perfilUsuario'

export default createAppContainer(createSwitchNavigator({
    userProfile: userProfile,
    login: login,
    registro: registro,
}));