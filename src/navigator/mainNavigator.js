import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile154961Navigator from '../features/UserProfile154961/navigator';
import Tutorial154960Navigator from '../features/Tutorial154960/navigator';
import NotificationList154932Navigator from '../features/NotificationList154932/navigator';
import Settings154931Navigator from '../features/Settings154931/navigator';
import Settings154923Navigator from '../features/Settings154923/navigator';
import UserProfile154921Navigator from '../features/UserProfile154921/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile154961: { screen: UserProfile154961Navigator },
Tutorial154960: { screen: Tutorial154960Navigator },
NotificationList154932: { screen: NotificationList154932Navigator },
Settings154931: { screen: Settings154931Navigator },
Settings154923: { screen: Settings154923Navigator },
UserProfile154921: { screen: UserProfile154921Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
