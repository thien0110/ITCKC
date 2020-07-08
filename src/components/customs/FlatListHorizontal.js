import React ,{ useState, useEffect } from 'react';
import {View, StyleSheet, Text, Image, Dimensions, FlatList} from 'react-native';

const {width, height} = Dimensions.get('window');

const Item = ({item}) => {
  return (
   
   
    <View style={styles.cardView}>
     <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}
        numberOfLines={4}>{item.description}</Text>
      </View>
     
    </View>
    
  );
};
const FlatListHorizontal =({data})=>{
    if (data && data.length) {
        return (
                <FlatList data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <Item item={item} />
                    }}
                />
        )
    }
    console.log('Please provide Images')
    return null
  
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width *2/3,
    height: height / 4,
    backgroundColor: 'white',
    marginLeft:15,
    marginVertical:7.5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {flex: 1,overflow:'hidden', padding:10},
  image: {
    width: "100%",
    flex: 1,
    height: height / 6 - 20,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
  },
  itemTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 12,
  },
});

export default FlatListHorizontal;
