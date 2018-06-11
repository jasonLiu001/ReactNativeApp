import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    StyleSheet,
    Dimensions
} from 'react-native';

type Props = {};
const dimension = Dimensions.get('window');
export default class FieldsSelectionScreen extends Component<Props> {
    static navigationOptions = {
        title: '表1'
    };

    _renderItem(info) {
        return (
            <View>
                <Text key={info.item.title}>{info.item.name}</Text>
                <Text>{info.item.phone}</Text>
            </View>
        )
    }

    _renderSectionHeader(info) {
        let txt = '第' + info.section.key + '部分';
        return (
            <View><Text key={info.section.key} style={{
                width: dimension.width,
                height: 52,
                textAlign: 'center',
                backgroundColor: '#21c6cd',
                color: '#fff'
            }}>{txt}</Text></View>
        )
    }

    _itemSeparatorComponent() {
        return (
            <View style={{height: 4, width: 500, backgroundColor: 'orange'}}></View>
        )
    }

    _sectionSeparatorComponent() {
        return (
            <View style={{height: 20, backgroundColor: 'blue'}}></View>
        )
    }

    _listHeaderComponent() {
        return (
            <View style={{backgroundColor: 'yellow', alignItems: 'center'}}><Text>SectionList简易通讯录</Text></View>
        )
    }

    _listFooterComponent() {
        return (
            <View style={{backgroundColor: 'red', alignItems: 'center'}}><Text>SectionList简易通讯录尾部</Text></View>
        )
    }

    render() {
        const sections = [];

        for (let i = 0; i < 10; i++) {
            let datas = [];
            for (let j = 0; j < 10; j++) {
                datas.push(
                    {
                        name: '用户' + i + j,
                        phone: '01234567890'
                    }
                );
            }

            sections.push({key: i, data: datas});

        }

        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    sections={sections}
                    refreshing={false}
                    onRefresh={() => {
                        alert("刷新")
                    }}
                    ItemSeparatorComponent={this._itemSeparatorComponent}
                    SectionSeparatorComponent={this._sectionSeparatorComponent}
                    onEndReached={(info) => {
                        alert("到达底部")
                    }}
                    onEndReachedThreshold={0}
                    stickySectionHeadersEnabled={true}
                    ListHeaderComponent={this._listHeaderComponent}
                    ListFooterComponent={this._listFooterComponent}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10
    }
});