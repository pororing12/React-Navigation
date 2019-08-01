import React,{Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>상세 스크린!</Text>
                <TouchableOpacity onPress ={() =>  this.props.navigation.push('Detail')}  > 
                    <Text style = {styles.button1} >디테일의 디테일 가기</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.props.navigation.goBack()}> 
                    <Text style = {styles.button2}>뒤로 가기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => this.props.navigation.popToTop()} style = {styles.button3} >
                    <Text style = {styles.button3}>처음으로 가기</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    
    text : {
        marginBottom  : 15,
        fontSize : 30
    },

    button1 : {
        color : 'blue',
        marginBottom : 15,
        fontSize : 20
    },
    button2 : {
        color : 'orange',
        marginBottom : 15,
       fontSize : 20
    },
    button3 : {
        color : 'red',
        marginBottom : 15,
       fontSize : 20
    },

})