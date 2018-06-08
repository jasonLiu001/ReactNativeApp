import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import IndexView from "./src/views/Index";
import AboutView from "./src/views/About";
import ModalView from "./src/components/Modal";

const MainStack = createStackNavigator({
        Index: {
            screen: IndexView
        },
        About: {
            screen: AboutView
        },
    },
    {
        initialRouteName: 'Index',
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
            screen: ModalView
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