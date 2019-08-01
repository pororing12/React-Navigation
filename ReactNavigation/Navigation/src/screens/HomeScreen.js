import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    onPressButton() {
        alert("버튼 클릭")
    }
    render() {
        return (
            <View style = {styles.container}>

            
                <Text style = {styles.text}> 홈 스크린!</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Detail')} >
                                   <Text> 디테일 가기!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Setting')}>
                    <Text style = {styles.text}> Setting 가기!</Text>
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
        color : 'red',
        fontSize : 15,
        marginBottom : 15,
        marginTop : 15
    },
    
    button :{
        color : 'green'
    }
    
})