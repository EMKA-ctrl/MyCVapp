
import { useState } from 'react';
import {  ActivityIndicator,Button,TextInput,SafeAreaView,Image,ScrollView,View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native';
import { gen_styles } from '../aux_functions/styles';
import { ch } from '../aux_functions/dimensions';
import { send,EmailJSResponseStatus } from '@emailjs/react-native';



export default function ContactForm() {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [showTick, setShowTick] = useState(false);

  const toShowTick = () =>{
      setShowTick(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Simulate a 2-second loading time

    };

  

  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    toShowTick();
  };

  const onSubmit = async () => {
    let time = new Date();

    try {
      await send(
        'service_t91rdgk',
        'template_contactfromApp',
        {
          name,
          email,
          time,
          message,
        },
        {
          publicKey: '-MabDCQwnW4sBrG3a',
        },
      );

      
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        alert(err);
      }

      alert(err);
    }
  };
  

  return (
    <SafeAreaView style={{flex:1,margin:ch(20)}} >
    <ScrollView contentContainerStyle={styles.maincontainer}>

    
      <View style={styles.container}>
        <TextInput
          style={styles.email} 
          inputMode="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.name}
          inputMode="text"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        
        />
      </View>

      <View style={styles.msg_container}>
        <TextInput
          inputMode="text"
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          style={styles.text}
          multiline
          scrollEnabled
          textAlignVertical="top"
          
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.btnTopics} onPress={()=>{onSubmit();toggleLoading();}} >
          <Text style={{fontSize:ch(18)}}>Send  </Text>
          {isLoading ? (<ActivityIndicator size="small" color="#000000" />):showTick ? (<Text>✔️</Text>):null }
          
        </TouchableOpacity>
      </View>
      
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex:1,
    
    backgroundColor:'white',
    justifyContent:'center',
    margin:20,
    paddingBottom:32
    },
  container: { 
      backgroundColor: '#f5f5f5',
      margin:ch(12),
      padding: ch(8),
      borderRadius: 15,
      marginBottom: ch(2),
    
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
      height:ch(60),
      alignItems:'stretch'
    },
    msg_container:{
      backgroundColor: '#f5f5f5',
      margin:ch(12),
      padding: ch(8),
      borderRadius: 15,
      marginBottom: ch(2),
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
      height:ch(150),
      alignItems:'stretch'
    },
  text: {
    flex:1,
    
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: ch(16),
    color: '#333',
    
    justifyContent:'flex-end'
  },
  email:{
    flex:1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: ch(16),
    color: '#333',
    
  },
  name:{
    flex:1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: ch(16),
    color: '#333',
  },
  btnTopics:{
    
    flexDirection:'row',
    margin:20,
    borderRadius:18,
    backgroundColor: '#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    padding:9,
    width:ch(250),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    
  },

});