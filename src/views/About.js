import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

type Props = {};
export default class AboutView extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.tipText}>关于</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tipText: {
        backgroundColor: '#67a7ff'
    }
});