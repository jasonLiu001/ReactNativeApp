import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

type Props = {};
export default class ModalView extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Model页面</Text>
                <Text style={styles.paragraphStyle}>这个页面不会显示StackNavigation统一的导航头，我是独立的页面，我有自己的过渡效果</Text>
                <View style={styles.closeBtnStyle}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="关闭"
                    />
                </View>

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
    textStyle: {
        textAlign: 'center',
        fontSize: 30
    },
    paragraphStyle: {
        fontSize: 14
    },
    closeBtnStyle: {
        marginTop: 10
    }
});