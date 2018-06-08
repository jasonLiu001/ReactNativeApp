import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

type Props = {};
export default class AboutScreen extends Component<Props> {
    static navigationOptions = {
        title: '关于页',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="返回首页" onPress={() => this.props.navigation.navigate('Index')}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    tipText: {
        backgroundColor: '#67a7ff'
    }
});