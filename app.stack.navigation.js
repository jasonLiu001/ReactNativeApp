import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import IndexScreen from "./src/views/Index";
import AboutScreen from "./src/views/About";
import ModalScreen from "./src/components/Modal";

const MainStack = createStackNavigator({
        Index: {
            screen: IndexScreen
        },
        About: {
            screen: AboutScreen
        },
    },
    {
        initialRouteName: 'Index'
    });

/**
 *
 * 配置全局stackNavigator导航路由
 */
const RootStack = createStackNavigator({
        Main: {
            screen: MainStack
        },
        Modal: {
            screen: ModalScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
    });

type Props = {};
export default class StackNavigatorApp extends Component<Props> {
    render() {
        return <RootStack/>;
    }
}