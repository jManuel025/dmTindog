import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import editUsuario from '../screens/editaPerfilUsuario';
import addPerro from '../screens/formAddDog';

export default createStackNavigator({
    main:  TabNavigator,
    formPerro:  addPerro,
    formUsuario: editUsuario,
}, 
{
    headerMode: "none",
});