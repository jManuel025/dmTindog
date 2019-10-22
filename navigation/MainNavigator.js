import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import TabNavigator from './TabNavigator';

export default createAppContainer(createSwitchNavigator({
    login: login,
    registro: registro,
    app: TabNavigator,
}));

