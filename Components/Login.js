import * as React from 'react';
import {StyleSheet, View, Text , Button, TextInput , TouchableOpacity } from 'react-native';
import { AuthContext } from '../Context';
import { Entypo } from '@expo/vector-icons';

function LoginScreen({ navigation }) {    
    const { signIn , error , cleanError } = React.useContext(AuthContext);  
    const [email , setEmail] = React.useState('')
    const [password , setPassword] = React.useState('')
    
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
            <View style={styles.logo}>
                <Entypo name="github-with-circle" size={60} color="white" />
            </View> 
            <Text style={styles.title}>Paisapp</Text>
            <Text style={styles.subTitle}>Comienza a manejar tu vida financiera</Text>
        </View> 
        <View style={styles.view2}>
            <Text style={styles.text}>Email</Text>
            <TextInput        
            style={styles.input}
            autoCorrect={false}
            placeholder='Ingresa tu email'
            autoCapitalize='none'
            onChangeText={(value)=>setEmail(value)}
            onFocus={()=>cleanError()}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
            type='password'
            secureTextEntry={true}
            style={styles.input}
            autoCapitalize='none'
            placeholder='Ingresa tu contraseña'
            onChangeText={(value)=>setPassword(value)}
            onFocus={()=>cleanError()}
            />            
            <Text style={{color:'red'}}>{error}</Text> 
        </View>            
        <View style={styles.view3}>
            <Text>  
                <Text style={styles.subTitle}>No tienes cuenta?</Text>
                <Text style={styles.subTitleBlue}> Registrate</Text>
            </Text> 
            <TouchableOpacity onPress={() => signIn( email , password )} style={styles.signin}>
                <Text style={{color:'white' , fontWeight: 'bold'}}>Ingresar</Text>
            </TouchableOpacity>           
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
    },logo:{
        width:100,
        height:100,
        margin:20,
        backgroundColor:'#005CEE',
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
    },input:{
        width:'80%',
        height:50,      
        borderRadius:10,
        padding:10,
        margin:10,        
        backgroundColor:'rgba(255,255,255,0.8)',
        shadowColor:'#B8B8B8',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:1,
        shadowRadius:20
    },
    text: {        
        width:'80%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        color:'#89929D',
        fontWeight:'bold'     
    },title:{
        width:'80%',
        textAlign: 'center',
        justifyContent: 'center',
        color:'#005CEE',        
        fontSize:45,
        fontWeight:'600'        
    },subTitle:{
        width:'80%',
        textAlign: 'center',
        justifyContent: 'center',
        color:'#717E95',       
        fontSize:15,        
    },subTitleBlue:{
        width:'80%',
        textAlign: 'center',
        justifyContent: 'center',
        color:'#005CEE',       
        fontSize:15,         
    },view1:{
        flex:1,       
        alignItems:'center',
        justifyContent:'flex-end',
        // backgroundColor:'gray'
    },view2:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },view3:{
        flex:1,       
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom:50        
    },signin:{
        width:'80%',
        height:50,
        backgroundColor:'#005CEE',
        borderRadius:10,
        margin:15,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
  
  export default LoginScreen;  