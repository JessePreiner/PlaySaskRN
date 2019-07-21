import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Products } from './product/containers/Products';
import { Blog } from './blog/containers/Blog';
import { Icon } from 'react-native-material-ui';
import React from 'react';

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
        defaultNavigationOptions: ({
            navigation: {
                state: { routeName },
            },
        }) => {
            return {
                tabBarIcon: ({ tintColor }) => {
                    switch (routeName) {
                        case 'Blog':
                            return <Icon name="person" />;
                        case 'Products':
                            return <Icon name="fa-dollar" />;
                    }
                },
            };
        },
        // defaultNavigationOptions: (({ navigation }) => {
        //   tabBarIcon: ({focused, horizontal, tintColor}) => (

        //   )
        // }
    },
);

export const AppContainer = createAppContainer(AppNavigator);
