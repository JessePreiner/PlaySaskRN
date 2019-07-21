import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Products } from './product/containers/Products';
import { Blog } from './blog/containers/Blog';

const AppNavigator = createBottomTabNavigator(
    {
        // Home: {
        //     // personally set up shit
        //     screen: HomeScreen,
        // },
        Blog: {
            // blog
            screen: Blog,
        },
        Products: {
            // games
            screen: Products,
        },
    },
    {
        initialRouteName: 'Blog',
    },
);

export const AppContainer = createAppContainer(AppNavigator);
