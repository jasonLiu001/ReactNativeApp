import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import IndexView from "./src/views/Index";
import AboutView from "./src/views/About";

/**
 *
 * 配置全局stackNavigator导航路由
 */
const RootStack = createStackNavigator({
        Index: IndexView,
        About: AboutView
    },
    {
        initialRouteName: 'Index',
    });

type Props = {};
export default class StackNavigatorApp extends Component<Props> {
    render() {
        return <RootStack/>;
    }
}