import * as React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from './Components/Login';
import HomeScreen from './Components/Home';
import ContactsScreen from './Components/Contacts';
import LogoutScreen from './Components/LogOut'
import Splash from './Components/Splash';
import { AuthContext } from "./Context";
import axios from 'axios'
import { AntDesign  } from '@expo/vector-icons';



const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator >
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Sign In",
      headerShown: false,
     }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();




const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon:(focused , size , color) => {
          let icon;
          if(route.name == 'Home'){
            size= focused ? 25 : 20
            icon = <AntDesign name="home" size={size} color={color} />
          }else if (route.name == 'Contacts') {
            size= focused ? 25 : 20
            icon = <AntDesign name="contacts" size={size} color={color} />
          }else if(route.name == 'LogOut'){
            size= focused ? 25 : 20
            icon = <AntDesign name="logout" size={size} color={color} />
          }
          return(
            icon
          )
        }
      })
    }  
  >
    <Tabs.Screen options={{
          animationEnabled: false,
          headerShown: false,          
        }}  name="Home" component={HomeScreen} />
    <Tabs.Screen options={{
          animationEnabled: false,
          headerShown: false,          
        }} name="Contacts" component={ContactsScreen} />
    <Tabs.Screen options={{
          animationEnabled: false,
          headerShown: false,          
        }} name="LogOut" component={LogoutScreen} />
  </Tabs.Navigator>
);



const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none" >
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}        
        options={{
          animationEnabled: false,
          headerShown: false,          
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    )}
  </RootStack.Navigator>
);


function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [error , setError] = React.useState('')
  const [userToken, setUserToken] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: async( email , password) => {
        setIsLoading(false);
        let status = false
        try{
        const { data } = await axios.post('https://paisa-challange.herokuapp.com/api/v1/paisapp/login' , {
          email,
          password    
        })
        if (data) {          
          setUserToken("asdf"); 
          setError('')                 
        } 
        }catch(e){
          setError('Email o Contraseña no validos')
        }          
     },     
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
       cleanError: () => {
        setIsLoading(false);
        setError('');
      },
      error,    
    };
  }, [error]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
