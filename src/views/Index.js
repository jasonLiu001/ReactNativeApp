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
    render() {
        return (
            <View>
                <Button title="About Me"
                        onPress={() => this.props.navigation.navigate('About')}></Button>
                <Text style={styles.tipText}>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tipText: {
        backgroundColor: '#67a7ff'
    },
    btnStyle: {
        width: 400
    }
});