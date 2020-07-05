import React, { Component } from 'react'
import { Text, View ,Image, TouchableOpacity, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
export default class Article extends Component {
   
    render() {
        const {title,
            content,
            time,
            onClick, 
        }= this.props
        return (
            <TouchableOpacity onPress={onClick}>
            <View style={{borderRadius:10 , padding:10, backgroundColor:'#fff', marginBottom:10, width:'100%'}}>
                <View style={{borderRadius:10 ,backgroundColor:'#CAFFBF', width:windowWidth-40, height:100}}></View>
                <Text numberOfLines={1} style={{fontSize:20, fontWeight:'bold', marginVertical:5}}>{title}</Text>
                <Text numberOfLines={2}>{content}</Text>
                <Text style={{color:'#909090',textAlign:'right' }}>{time}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}
Article.defaultProps = {
    title:"Post Title",
    content:"lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus",
    time:"1 giờ trước",
    onClick: () => {},
  };
