import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import editUsuario from '../screens/editaPerfilUsuario';
import addPerro from '../screens/formAddDog';
import configuracion from '../screens/configuracion';
import perfilPerro from '../screens/perfilPerro';

export default createStackNavigator({
    main:  TabNavigator,
    formPerro:  addPerro,
    formUsuario: editUsuario,
    configuracion: configuracion,
    perfilPerro: perfilPerro,
}, 
{
    headerMode: "none",
});