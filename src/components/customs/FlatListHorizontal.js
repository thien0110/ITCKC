import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {stringIsEmpty} from '../../res/Functions'
import {URL } from '../../config'

// const Item = ({item}) => {
//   return (

//    <TouchableOpacity >
//     <View style={styles.cardView}>
//      <Image style={styles.image} source={{uri: item.url}} />
//       <View style={styles.textView}>
//         <Text style={styles.itemTitle}>{item.title}</Text>
//         <Text style={styles.itemDescription}
//         numberOfLines={3}>{item.description}</Text>
//       </View>

//     </View>
//     </TouchableOpacity>

//   );
// };
export const FlatListHorizontal = ({data, onPress}) => {
  // console.warn(data)
  if (data && data.length) {
    // console.warn(data)
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=>{onPress(item)}}>
              <View style={styles.cardView}>
                <Image style={styles.image} source={{uri: URL+item.anhBia}} />
                <View style={styles.textView}>
                  <Text style={styles.itemTitle}>{item.tieuDe}</Text>
                  <Text style={styles.itemDescription} numberOfLines={3}>
                    {item.moTaNgan}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
  return null;
};
// export default class Board extends Component {
//   render() {
//     return(

//     )
//   }
// }
// FlatListHorizontal.defaultProps = {
//   onPress: () => {},
//   data: {},
// };

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: (width * 2) / 3,
    height: height / 4,
    backgroundColor: 'white',
    marginLeft: 7.5,
    marginRight: 7.5,
    marginVertical: 7.5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {flex: 1, overflow: 'hidden', padding: 10},
  image: {
    width: '100%',
    flex: 1,
    height: height / 6 - 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  itemTitle: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 12,
  },
});
