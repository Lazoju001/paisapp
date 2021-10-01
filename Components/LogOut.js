import * as React from 'react';
import {StyleSheet, View, Text , Button, TouchableOpacity } from 'react-native';
import { AuthContext } from "../Context";
import { Entypo } from '@expo/vector-icons';

function ContactsScreen() {
  const { signOut } = React.useContext(AuthContext);
    return (
      <View style={styles.container}>  
        <View style={styles.logo}>
            <Entypo name="github-with-circle" size={60} color="white" />
        </View>     
        <TouchableOpacity onPress={() => signOut()} style={styles.signin}>
                <Text style={{color:'white' , fontWeight: 'bold'}}>Cerrar Sesión</Text>
        </TouchableOpacity>        
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },signin:{
      width:'80%',
      height:50,
      backgroundColor:'#005CEE',
      borderRadius:10,
      margin:15,
      alignItems: 'center',
      justifyContent: 'center',
  },logo:{
    width:100,
    height:100,
    margin:20,
    backgroundColor:'#005CEE',
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
}
});
  
export default ContactsScreen; 