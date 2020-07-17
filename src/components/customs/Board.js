import React, { Component } from 'react'
import { Text, View ,Image, TouchableOpacity, Dimensions} from 'react-native'
import Colors from '../../res/Colors';

const windowWidth = Dimensions.get('window').width;
export default class Board extends Component {
   
    render() {
        const {
            studentName,
            name,
            semester,
            teacherName,
            onClick, 
        }= this.props
        return (
            <TouchableOpacity onPress={onClick}>
            <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginVertical:5, color:Colors.navigation}}>{studentName}</Text>
            <View style=
            {{
                borderRadius:10 ,
                padding:10,
                backgroundColor:Colors.navigation,
                marginBottom:10,
                width:windowWidth - (windowWidth*1/15),
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5
            }}>
                <Text numberOfLines={1} style={{fontSize:20, fontWeight:'bold', marginVertical:5, color:'#fff'}}>{name}</Text>
                <Text numberOfLines={2} style={{fontWeight:'bold', marginVertical:5, color:'#fff'}}>{semester}</Text>
                <Text style={{color:'#909090', fontStyle:'italic' }}>{teacherName}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}
Board.defaultProps = {
    studentName:"",
    name:"",
    semester:"",
    teacherName:"",
    onClick: () => {},
  };
