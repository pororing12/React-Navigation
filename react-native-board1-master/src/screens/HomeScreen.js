import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Ionicons } from 'react-native';
// import BoardList from '../components/BoardList';

import MyButton from '../components/MyButton';
import BoardList from '../components/BoardList';

let board = [
  {
    key: '1',
    title: '제목1',
    content: '내용1입니다.'
  },
  {
    key: '2',
    title: "제목2",
    content: '내용2 안녕하세요.'
  }
];

export default class HomeScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      board:board,
      lastBoardId : 2
    }
  }
  deleteBoard(itemKey){
    const board = this.state.board.filter(
      (item)=>{
        if(item.key!=itemKey){
          return item
        }
      }
    )
    this.setState({board:board})

  }
  
  EditBoard(itemKey, title, content){
    const newBoard = this.state.board.map(
      (item) =>{
        if(item.key == itemKey) {
          return {
            key : itemKey,
            title : title,
            content : content
          }
        }
        else {
          return item
        }
      }
    )
    this.setState({board : newBoard})

  }

  createBoard(boardItem){
    // {
    //   key: '2',
    //   title: "제목2",
    //   content: '내용2 안녕하세요.'
    // }
    // const itemKey = (this.state.board.length +1).toString()
    const lastBoardId = this.state.lastBoardId + 1
    const itemKey = (this.state.lastBoardId +1).toString()
    const item ={
      key: itemKey,
      title: boardItem.title,
      content: boardItem.content
    }
    const board = this.state.board.concat(item);
    
    // this.state.board.push(item)
    // console.log(this.state.board)
    this.setState({board: board})
    this.setState({lastBoardId: lastBoardId})

    return 
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{color:'red', fontSize:40}}>홈 스크린!</Text>

        <MyButton title="글 작성" 
          onPress={()=>this.props.navigation.push('Create',{
            'createFunc': this.createBoard.bind(this)
          })}
          // navigation={this.props.navigation}
        />
        

        <BoardList 
        board={this.state.board} 
        navigation={this.props.navigation}
        deleteFunc={this.deleteBoard.bind(this)}
        editFunc = {this.EditBoard.bind(this)}
        />
        {/* <MyButton></MyButton> */}

        {/* <MyButton title="글 작성" /> */}
        {/* <BoardList {...this.props} data={this.state.board} /> */}
      </View>
    )
  }

  // createBoard(item){
  //   this.setState(
  //     {board: this.state.board.concat(item)}
  //   )
  // }
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    alignItems: 'center',
    flexDirection:'column'
  }
})