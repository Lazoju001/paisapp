import * as React from 'react';
import {StyleSheet, View, Text , Dimensions , FlatList } from 'react-native';


const { widht , height } = Dimensions.get('screen')



const SPACING = 20;
const AVATAR_SIZE = 70;


function List(props) {
  const DATA = props.contacts
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          contentContainerStyle={{
            padding:SPACING
          }}
          keyExtractor={item => item.id}
          renderItem={({ item , index })=>{
              return <View style={{flexDirection:'row' , padding:SPACING/3 , marginBottom:SPACING/3 , borderRadius:12, backgroundColor:'rgba(255,255,255,0.8)',
                shadowColor:'#B8B8B8',
                shadowOffset:{
                  width:0,
                  height:10
                },
                shadowOpacity:1,
                shadowRadius:20
              }}>
                  <View style={{alignContent: "center", alignItems: "center" ,justifyContent:'center', backgroundColor:'#CAF0FF', marginRight:SPACING/2 , width:AVATAR_SIZE , height:AVATAR_SIZE, borderRadius:20}}>
                     <Text style={{color:"#68C5E5"}}>{item.name[0]}{item.lastName[0]}</Text>          
                  </View>
                  <View style={{ width:'60%',justifyContent:'center'}}>
                    <Text>{item.name}{" "+item.lastName}</Text>
                    <Text style={{opacity:0.7}}>{item.phone}</Text>
                  </View>
            </View>
          }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width:'100%',
        backgroundColor:'#E8E8E8',      
    },
});
  
export default List; 