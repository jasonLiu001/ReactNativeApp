import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

type Props = {};
/**
 *
 * App首页
 */
export default class IndexScreen extends Component<Props> {
    static navigationOptions = {
        title: '首页'
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="导航到下一个页面"
                        onPress={() => this.props.navigation.navigate('About')}></Button>
                <Button title="当前页打开Modal页" onPress={() => {
                    this.props.navigation.navigate('Modal')
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingLeft: 10,
        paddingRight: 10
    },
    tipText: {
        backgroundColor: '#67a7ff'
    },
    headerLeftBtnStyle: {
        color: '#e926ff'
    }
});