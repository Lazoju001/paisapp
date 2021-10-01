import * as React from 'react';
import {StyleSheet, View, Text , TextInput } from 'react-native';
import ContactsList from './ContactsList'
import axios from 'axios'


function ContactsScreen() {
    const [word , setWord] = React.useState('')
    const [contacts , setContacts] = React.useState([])

    React.useEffect(() => {
        async function getContacts(){
        let contact = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisapp/contacts')
        
        setContacts(contact.data.data)
        } 
        getContacts()
        }, []);
  

    return (
      <View style={styles.container}>
         <View style={styles.view1}>
         <TextInput        
            style={styles.input}
            autoCorrect={false}
            placeholder='🔍   Ingresa un nombre o un numero'
            autoCapitalize='none'
            onChangeText={(value)=>setWord(value)}
            />
          </View>
          <Text style={styles.subText}>Recents</Text>
          <View style={styles.view2}>         
                <ContactsList contacts={contacts}/>
          </View>   
          <Text style={styles.subText}>All</Text>    
          <View style={styles.view3}>
          
          <ContactsList contacts={contacts}/>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#E8E8E8',
    alignItems: 'stretch',
    justifyContent: 'center',
},view1:{
    flex:0.4,
    backgroundColor:'#E8E8E8',   
    alignItems:'center',
    justifyContent:'flex-end'
},view2:{
    flex:0.8,
    borderTopColor:'gray',
    borderTopWidth:0.5,   
    justifyContent:'center'
},view3:{
    flex:1,
    borderTopColor:'gray',
    borderTopWidth:0.5,  
    justifyContent:'center',    
},subText:{
    fontSize:13,
    margin:20,   
    height:30,
    color:'gray',
    backgroundColor:'#E8E8E8',
},input:{
    width:'90%',
    height:50,      
    borderRadius:10,
    padding:10,
    margin:10,
    backgroundColor: '#FFFFFF',
}
});
  
export default ContactsScreen; 