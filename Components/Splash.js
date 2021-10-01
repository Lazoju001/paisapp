import * as React from 'react';
import {StyleSheet, View, Text , Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';

function Splash() {
    return (
      <View style={styles.container}>
        <Entypo name="github-with-circle" size={100} color="white" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#005CEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  
export default Splash; 