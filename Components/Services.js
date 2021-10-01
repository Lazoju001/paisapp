import * as React from 'react';
import {StyleSheet, View, Text , Pressable , TouchableOpacity ,Dimensions , Image } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

function Services() {
    return (
      <View style={s.container}>    
        <TouchableOpacity onPress={() => console.log('funcion desactivada')}>
        <View style={{alignContent: "center", alignItems: "center" ,justifyContent:'center', backgroundColor:'#E4FFF0', marginHorizontal:5, width:70 , height:70 , borderRadius:20}}>
        
            <Image style={{ color:'#73CC9B',width:25, height:25, alignSelf: "center"}} resizeMode={'cover'} source={require('./assets/wallet.png')} />
            
        </View>
        <Text style={{marginTop:10, alignSelf:'center',fontSize: 14, color: "#616161"}}>Billetera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('funcion desactivada')}>
        <View style={{alignContent: "center", alignItems: "center" ,justifyContent:'center', backgroundColor:'#FEEAD4', marginHorizontal:5 , width:70 , height:70 , borderRadius:20}}>
       
            <Image style={{ color:'#73CC9B',width:25, height:25, alignSelf: "center"}} resizeMode={'cover'} source={require('./assets/transfer.png')} />
            
        </View>
        <Text style={{marginTop:10, alignSelf:'center',fontSize: 14, color: "#616161"}}>Transferir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('funcion desactivada')}>
        <View style={{alignContent: "center", alignItems: "center" ,justifyContent:'center', backgroundColor:'#EEE3FF', marginHorizontal:5 , width:70 , height:70 , borderRadius:20}}>
       
            <Image style={{ color:'#73CC9B',width:25, height:25, alignSelf: "center"}} resizeMode={'cover'} source={require('./assets/google-docs.png')} />
            
        </View>
        <Text style={{marginTop:10, alignSelf:'center',fontSize: 14, color: "#616161"}}>Pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('funcion desactivada')}>
        <View style={{alignContent: "center", alignItems: "center" ,justifyContent:'center', backgroundColor:'#CAF0FF', marginHorizontal:5 , width:70 , height:70 , borderRadius:20}}>
        <Fontisto name="mobile" size={26} color="#68C5E5" />           
        </View>
        <Text style={{marginTop:10, alignSelf:'center',fontSize: 14, color: "#616161"}}>Recargar</Text>
      </TouchableOpacity>
      

      
  </View>
    );
  }

  const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        marginTop: 10,
        height: Dimensions.get("window").height * 0.15,
        width: Dimensions.get("window").width,
        justifyContent:'center',
        alignItems: "center",
    },
    shadow: {
        elevation: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.25, 
        shadowOffset: {width: 0, heigth: 2}, 
        shadowRadius: 3.84, 
        backgroundColor: "white", 
        paddingTop: 10,
    },
});
  
export default Services; 