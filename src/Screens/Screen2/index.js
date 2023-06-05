import { View, Text, Image, Button, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Images } from '../../common/images';
import { Strings } from '../../common/string';
import { styles } from '../style';

const Screen2 = ({navigation}) => {

  const {numOfGrid} = route.params;
  const [checkedData, setCheckedData] = useState([]);
  const numOfColumn = 3;
  const numOfRow = parseInt(numOfGrid / 3) 

  //create array of numOfData
  var numOfData = Array.from( {length: numOfColumn*numOfRow} , (element, index) => ({
    id: index,
    imageUrl: getRandomNumber(0 , 3),
    selected: false
  }));

  function getRandomNumber(min, max) {
    const index =  Math.floor(Math.random() * (max - min) + min);

    return Images[index];
  }

  function passData(numOfData) {

    const checkedData = numOfData.filter( (item) => item.selected);

    navigation.navigate('Screen3', checkedData={checkedData} );

  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>      
        <FlatList
          data={numOfData}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={numOfColumn}
          contentContainerStyle={styles.flateList}
        />

        <Button title={Strings.Done} onPress={passData(numOfData)} style={styles().doneButton}/>

      </View>
    </SafeAreaView>
  )
}


const RenderItem = ({item}) => {
  return(
    
    <View>
      <Image source={item.imageUrl} style={styles().image} />
      <Checkbox onPress={()=>{
        item.selected = !item.selected
      }}
      />
    </View>
  )
}

export default Screen2;
