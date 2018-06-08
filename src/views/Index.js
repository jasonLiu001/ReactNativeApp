import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};
/**
 *
 * App首页
 */
export default class IndexView extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.tipText}>文本</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tipText: {
        backgroundColor: '#67a7ff'
    }
});