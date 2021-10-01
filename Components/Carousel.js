import * as React from 'react';
import {StyleSheet, View, Text , Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';



function Cards (props) {

  const deviceWidth = Dimensions.get('window').width
  const cards = props.cards
  

  const _renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1, alignContent: "center", justifyContent:'center', alignItems: "center"}}>
        <View style={{backgroundColor:'#005CEE', width: "100%", height: "78%", borderRadius: 25 ,padding:28 }}>
          <View style={styles.view1}>
            <View style={{width:'85%' }}>
              <Text style={{color:'white'}}>Balance</Text>       
            </View>   
            <View >              
            <Image style={{ width:40, height:40, alignSelf: "center"}} resizeMode={'contain'} source={require('../assets/master.png')} />
            </View>          
          </View>
          <View style={styles.view2} >
            <Text>            
              <Text style={{ color:'white', backgroundColor:'#89A5FB',fontSize:18,fontWeight:'bold'}}> USD </Text>
              <Text style={{ color:'white',fontSize:20}}> {item.balance}</Text>
            </Text>  
              <Text style={{height:'50%', color:'white',fontSize:20}}>****  ****  **** {item.number.substr(item.number.length - 4)}</Text>
            </View> 
          <View style={styles.view3}>
            <View style={{width:'85%'}}>
              <Text style={{color:'white'}}>Soy Paisanx</Text>       
            </View>   
            <View>              
              <Text style={{color:'white'}}>Exp.Date</Text>
              <Text style={{color:'white'}}>{item.expDate}</Text>
            </View>          
          </View>
        </View>       
    </View>
    );
  }



    return (
      <View
      style={styles.container}
      flex={1}
    >
      <Carousel
        data={cards}
        sliderWidth={deviceWidth}
        itemWidth={props.notPagination ? deviceWidth *0.80 : deviceWidth}
        renderItem={_renderItem}
        autoplay={false}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={5000}       
        loop={false}
        layout={'default'}
      />    
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      height:200,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },   
    track: {
      backgroundColor: '#ccc',
      overflow: 'hidden',
      height: 2,
    },
    bar: {
      backgroundColor: '#025950',
      height: 2,
      position: 'absolute',
      left: 0,
      top: 0,
    },view1:{
      flex:0.5,
      flexDirection:'row',
      width:'90%',      
    },view2:{
      flex:2,     
      width:'90%',
      paddingTop:20,    
      justifyContent: 'space-between'
    },view3:{
      flex:0.7,
      flexDirection:'row',
      width:'90%',    
    }
  })
  
export default Cards; 