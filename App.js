/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnTable}>
                    <Text style={styles.btnText}>表1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTable}>
                    <Text style={styles.btnText}>表2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTable}>
                    <Text style={styles.btnText}>表3</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTable: {
        padding: 8,
        marginTop: 10,
        backgroundColor: '#79fdff',
        width: 400
    },
    btnText: {
        textAlign: 'center'
    }
});
