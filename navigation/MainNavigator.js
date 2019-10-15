import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import userProfile from '../screens/perfilUsuario'

export default createAppContainer(createSwitchNavigator({
    
    login: login,
    userProfile: userProfile,
    registro: registro,
    
    userProfile: userProfile,
    
}));