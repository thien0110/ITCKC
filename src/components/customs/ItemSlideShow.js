import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SlideShowItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}
        numberOfLines={4}>{item.description}</Text>
      </View>
      <Image style={styles.image} source={{uri: item.url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 30,
    height: height / 5,
    backgroundColor: 'white',
    marginHorizontal:15,
    marginVertical:15,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
  },

  textView: {flex: 1,overflow:'hidden'},
  image: {
    width: width / 2 - 20,
    flex: 1,
    height: height / 5 - 20,
    borderRadius: 10,
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

export default SlideShowItem;