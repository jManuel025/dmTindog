import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import ScndNavigator from './ScndNavigator';

export default createAppContainer(createSwitchNavigator({
    login: login,
    registro: registro,
    app: ScndNavigator,
}));

