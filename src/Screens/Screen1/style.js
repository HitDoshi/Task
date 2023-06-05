import {StyleSheet} from 'react-native';
export const styles = () =>
  StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textInput: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });
