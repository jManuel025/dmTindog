import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import TabNavigator from './TabNavigator';
import configuracion from '../screens/configuracion'
export default createAppContainer(createSwitchNavigator({
    configuracion:configuracion,
    login: login,
    registro: registro,
    app: TabNavigator,
}));

