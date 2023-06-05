import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Strings } from '../../common/string';
import { styles } from './style';

const Screen1 = ({navigation}) => {

    const [numOfGrid, setNumOfGrid] = useState(0);

    function handlerOnClick() {
        navigation.navigate('Screen2', {numOfGrid: numOfGrid})
    }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles().rootContainer}>        
        <TextInput 
        value={numOfGrid}
        keyboardType='numeric'
        onChangeText={ (text) => setNumOfGrid(text)}
        placeholder={Strings?.TextInput_Hint}
        style={styles().textInput}
        />

        <Button title={Strings?.Generate_Grid_Item} onPress={handlerOnClick} style={styles().button}/>        
      </View>
    </SafeAreaView>
  )
}

export default Screen1