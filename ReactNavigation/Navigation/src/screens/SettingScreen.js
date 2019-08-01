import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingScreen extends Component{
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title : '환경설정',
            tabBarIcon : (
                <Ionicons name = "md-settings" size = {20} color = "#ff6666"/>
            ),
        }
    }
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity>
                <Text style = {styles.text}> Setting을 위한 스크린  </Text>
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
        color : 'orange',
        fontSize : 15
    }
})
