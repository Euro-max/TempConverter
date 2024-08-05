import { useState,useEffect } from 'react';
import tw from 'twrnc';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaProvider
} from 'react-native';

import bg from './assets/bg.jpg'
import hbg from './assets/hoty.jpg'
import {UNITS,convertTemp,Opp,check} from './tempi.js'

 export default function App() {
  const[input,Setinput]=useState(0);
  const[unit,Setunit]=useState("C");
  const[back,Setback]=useState(bg);
  function Checker(){
    if(isNaN(input)){
      return "";
    }
      else{
        return convertTemp(input,Opp(unit)).toFixed(2);
      }
    }
    useEffect(()=>{
    if(check(input,unit)){
      Setback(bg);
    }
    else{
      Setback(hbg);
    }
    },[input,unit])
  

  return(
 
    <ImageBackground source={back} style={styles.bgy}>
     <SafeAreaView style={styles.root}>
      <View style={tw`h-96  items-center justify-evenly`}>
        <Temp temperature={Checker()} unit={Opp(unit)}></Temp>
       <Input onChange={Setinput} unit={unit}/>
        
      <Convert onPress={()=>{Setunit(Opp(unit))
      }
      }
      unit={unit}/>
      </View>
     </SafeAreaView>
     </ImageBackground>
  
  );
}

function Input({defaultValue,onChange,unit}){
  return(
    <View style={styles.input}>
       <TextInput placeholder='Type your number ..'  maxLength={5} style={tw`h-20 bg-white rounded-md px-12 items-stretch` } defaultValue={defaultValue} onChangeText={function(text){onChange(text);}}></TextInput>
       <Text style={styles.text}>{unit}</Text>
    </View>
  )
}
function Temp({temperature,unit}){
  return(
    <Text style={styles.Temp}>{temperature} {unit}</Text>
  );
}
function Convert({unit,onPress}){
  return(
    <TouchableOpacity style={tw`bg-blue-400 rounded-md px-12 py-4`} onPress={onPress}>
      <Text>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:"center",
  },
  bgy:{
height:"100%",
  },
  input:{
alignItems:"stretch",
justifyContent:"center",
  },
  text:{
position:"absolute",
alignSelf:"flex-end",
paddingRight:25,
fontSize:18,
  },
  Temp:{
    fontSize:70,
    color:"white",
  }
});
