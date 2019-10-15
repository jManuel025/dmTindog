import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import perfilUsuario from '../screens/perfilUsuario'

export default createAppContainer(createSwitchNavigator({
    login: login,
    registro: registro,
    perfilUsuario: perfilUsuario,
}));