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
export default class IndexView extends Component<Props> {
    static navigationOptions = {
        title: '首页',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="About Me"
                        onPress={() => this.props.navigation.navigate('About')}></Button>
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
    },
    btnStyle: {
        width: 400
    }
});