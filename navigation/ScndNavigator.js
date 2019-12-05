import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import editUsuario from '../screens/editaPerfilUsuario';
import addPerro from '../screens/formAddDog';
import configuracion from '../screens/configuracion';
import politicas from '../screens/politicas';
import terminos from '../screens/terminos';
import perfilPerro from '../screens/perfilPerro';
import VerUserInfo from '../screens/VerUserInfo'
import editPerro from '../screens/formEditarPerro'
export default createStackNavigator({
    main:  TabNavigator,
    formPerro:  addPerro,
    formEditarPerro:  editPerro,
    formUsuario: editUsuario,
    configuracion: configuracion,
    perfilPerro: perfilPerro,
    verUserInfo:VerUserInfo,
    politicas:politicas,
    terminos:terminos,
}, 
{
    headerMode: "none",

});