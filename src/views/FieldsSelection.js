import React, {Component} from 'react';
import {
    Text,
    View,
    SectionList,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

type Props = {};
const dimension = Dimensions.get('window');
export default class FieldsSelectionScreen extends Component<Props> {
    static navigationOptions = {
        title: '表1'
    };

    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
            selectMap: new Map()
        };
    }

    componentDidMount() {

    }

    _renderItem(info) {
        let isChecked = false;

        return (
            <View style={styles.selectionListItem}>
                <Image style={{borderColor: ''}}
                       source={isChecked ? require("../images/icon_box-checked.png") :
                           require("../images/icon_box-empty.png")}/>
                <Text style={{borderColor: ''}} key={info.item.title}>{info.item.name}</Text>
            </View>
        )
    }

    _renderSectionHeader(info) {
        let txt = 'section' + info.section.key + '头部';
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
            <View style={{backgroundColor: 'yellow'}}><Text>选择查询字段</Text></View>
        )
    }

    _listFooterComponent() {
        return (
            <View style={{backgroundColor: 'red', alignItems: 'center'}}><Text>已加载全部</Text></View>
        )
    }

    render() {
        const sections = [];

        for (let i = 0; i < 2; i++) {
            let data = [];
            for (let j = 0; j < 10; j++) {
                data.push(
                    {
                        name: '字段' + i + j
                    }
                );
            }
            sections.push({key: i, data: data});
        }

        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    sections={sections}
                    refreshing={false}
                    onRefresh={() => {
                        //alert("刷新");
                    }}
                    ItemSeparatorComponent={this._itemSeparatorComponent}
                    SectionSeparatorComponent={this._sectionSeparatorComponent}
                    onEndReached={(info) => {
                        //alert("到达底部")
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
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    selectionListItem: {
        flexDirection: 'row'
    }
});