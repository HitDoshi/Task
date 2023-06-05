import {StyleSheet} from 'react-native';
export const styles = () =>
  StyleSheet.create({
    doneButton: {
        position: 'absolute',
        bottom: 30,
        padding: 20,
    },
    flateList: {
        padding: '3%',
    },
    image: {
        width: '30%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
    }
  });
