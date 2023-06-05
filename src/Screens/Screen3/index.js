import { View, Text, Image, CheckBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Images } from '../../common/images';
import { styles } from './style';

const Screen3 = ({navigation}) => {

  const {checkedData} = route.params;
  const numOfColumn = 3;

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={checkedData}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={numOfColumn}
        contentContainerStyle={{padding: '3%'}}
      />
    </View>
  )
}


const RenderItem = ({item}) => {
  return(
    <View>
      <Image source={item.imageUrl} style={styles().image}/>
    </View>
    
  )
}

export default Screen3;
