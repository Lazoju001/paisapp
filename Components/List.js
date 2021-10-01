import * as React from 'react';
import {StyleSheet, View, Text , Dimensions , FlatList } from 'react-native';
import { Feather , MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from 'axios'

const { widht , height } = Dimensions.get('screen')

const SPACING = 20;
const AVATAR_SIZE = 70;


function List(props) {

  const [transactions , setTransactions] = React.useState([])
  React.useEffect(() => {
     async function getTransactions(){
      let transactions = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisapp/transactions')
      setTransactions(transactions.data.data)
     } 
     getTransactions()
    }, []);
 
    return (
      <View style={styles.container}>
        <FlatList
          data={transactions}
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
                  <View style={{alignContent: "center", alignItems: "center" ,justifyContent:'center', backgroundColor: item.type == 'PAYMENT' ? '#EEE3FF':'#E4FFF0', marginRight:SPACING/2 , width:AVATAR_SIZE , height:AVATAR_SIZE, borderRadius:20}}>
                  {item.type == 'PAYMENT'? <MaterialCommunityIcons name="compare-vertical" size={24} color='#B946FF' /> :<Feather name="arrow-down" size={24} color='#73CC9B' />}
                    
                  </View>
                  <View style={{ width:'60%',justifyContent:'center'}}>
                    <Text>{item.title}</Text>
                    <Text style={{opacity:0.7}}>{item.description}</Text>
                  </View>
                  <View style={{width:'20%', justifyContent:'center'}}>
                    <Text>${item.total}</Text>                    
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
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
  
export default List; 