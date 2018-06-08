import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import IndexScreen from "./src/views/Index";
import AboutScreen from "./src/views/About";

const RootNavigation = createBottomTabNavigator({
        Index: IndexScreen,
        About: AboutScreen
    },
    {
        initialRouteName: 'Index'
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
            <RootNavigation/>
        );
    }
}