import React, {Component} from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import IndexScreen from "./src/views/Index";
import AboutScreen from "./src/views/About";
import ModalScreen from "./src/components/Modal";

const HomeStack = createStackNavigator({
        Index: IndexScreen,
        Modal: ModalScreen
    },
    {
        mode: 'modal'
    });

const AboutStack = createStackNavigator({
    About: AboutScreen
});

const RootBottomTabNavigation = createBottomTabNavigator({
        Home: HomeStack,
        About: AboutStack
    },
    {
        initialRouteName: 'Home'
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    });

type Props = {};
export default class TabNavigationApp extends Component<Props> {
    render() {
        return (
            <RootBottomTabNavigation/>
        );
    }
}