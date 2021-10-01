import * as React from 'react';
import {StyleSheet, View, Text  } from 'react-native';
import Carousel from './Carousel'
import Services from './Services'
import List from './List'
import { AntDesign , Ionicons } from '@expo/vector-icons';
import axios from 'axios'
function HomeScreen() {

    const [cards , setCards] = React.useState([])
    React.useEffect(() => {
       async function getUserInfo(){
        let userInfo = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisapp/user')
        setCards(userInfo.data.data.cards)
       } 
       getUserInfo()
      }, []);
  

    return (
      <View style={styles.container}>
          
          <View style={styles.view1}>              
                <View style={styles.title} >
                    <Text style={styles.greeting}>Hola</Text>
                    <Text style={styles.name}>Soy Paisanx</Text>
                </View>
                <View style={styles.title1}>
                    <AntDesign style={styles.text} name="search1" size={22} color="black" />
                    <Ionicons style={styles.text} name="ios-notifications-outline" size={22} color="black" />
                </View>                    
          </View>
          <View style={styles.view2}>        
              <Carousel cards={cards} notPagination={true}/>
          </View>
          <View style={styles.view3}>
            <Text style={styles.subText}>Servicios</Text>
            <View style={styles.services} >
                <Services/>
            </View>
          </View>
          <View style={styles.view4}>
                <Text style={styles.subText1}>Últimas transacciones</Text>
                <List/>
          </View>     
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#E8E8E8',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding:12
    },view1:{
        flex:0.4, 
        flexDirection:'row',          
        alignItems:'flex-end',      
    },view2:{
        flex:1,      
        alignItems:'center',
        justifyContent:'center'
    },view3:{
        flex:0.7,        
    },view4:{
        flex:1,          
        justifyContent:'center'
    },title:{        
        width:'80%',
        height:'50%'
    }
    ,title1:{
        flex:1, 
        flexDirection:'row',        
        width:'30%',
        alignItems:'center',
        justifyContent:'center',
        height:'50%'        
    },text:{
       margin:3
    },name: {        
        alignItems: 'flex-start',
        justifyContent: 'center',
        color:'#334154',
        fontWeight:'bold',
        fontSize:17    
    },greeting:{        
        alignItems: 'flex-start',
        justifyContent: 'center',
        color:'#334154',        
        fontSize:14
    },services:{
        flex:1,         
        alignItems:'center',    
        justifyContent:'center',
        
    },subText:{
        fontSize:20,
    },subText1:{
        fontSize:20,
        paddingBottom:5
    }

});
  
export default HomeScreen; 