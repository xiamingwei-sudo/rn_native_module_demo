/**
 * React Native study
 * Author: 夏明伟
 * GitHub:https://github.com/Come-Mile
 * Email:xiamwei@hotmail.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import ImageCrop from './ImageCrop'
const ASPECT_X="200";
const ASPECT_Y="100";
export default class index extends Component {
    state = {
        result: ''
    }

    onSelectCrop() {
        let x=this.aspectX?this.aspectX:ASPECT_X;
        let y=this.aspectY?this.aspectY:ASPECT_Y;
        ImageCrop.selectWithCrop(parseInt(x),parseInt(y)).then(result=> {
            this.setState({
                result: result['imageUrl']?result['imageUrl']:result
            })
        }).catch(e=> {6
            this.setState({
                result: e
            })
        });
    }

    render() {
        let imgUrl = 'file:///' + this.state.result;
        let imageView=this.state.result===""?null:
            <Image
                resizeMode='contain'
                style={{height: 200,width:200}}
                source={{uri: this.state.result}}/>
        return (
            <View style={styles.container}>
                <View
                    style={styles.row}
                >
                    <Text>宽:</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={ASPECT_X}
                        onChangeText={aspectX=>this.aspectX=aspectX}
                    />
                    <Text> 高:</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={ASPECT_Y}
                        onChangeText={aspectY=>this.aspectY=aspectY}
                    />
                    <Text
                        onPress={()=> this.onSelectCrop()}
                    >裁切图片</Text>

                </View>
                <Text>{imgUrl}</Text>
                {imageView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        height:40,
        width:40
    }
});
