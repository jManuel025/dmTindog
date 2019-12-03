import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import registro from '../screens/registro';
import login from '../screens/login';
import ScndNavigator from './ScndNavigator';
import loading from '../screens/loading';

export default createAppContainer(createSwitchNavigator({
    loading: loading,
    login: login,
    registro: registro,
    app: ScndNavigator,
}));

