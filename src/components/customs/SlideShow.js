import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import SlideShowItem from './ItemSlideShow'


const { width, height } = Dimensions.get('window')

function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }

        this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 2000)
}


const SlideShow = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(()=> {
        // setDataList(data)
        // infiniteScroll(dataList)
    })


    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    // ref = {(flatList) => {this.flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <SlideShowItem item={item} />
                    }}
                    // onScroll={Animated.event(
                    //     { nativeEvent: { contentOffset: { x: scrollX } }, }
                    // )}
                />

                {/* <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View> */}
            </View>
        )
    }

    console.log('Please provide Images')
    return (
        <View style={{
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
    justifyContent:'center',
    alignItems:'center'
        }}><Text style={{color:'#f0f0f0', fontSize:24}} >~~~ NO NEWS !!</Text></View>
    )
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default SlideShow