import React, { useEffect, useRef } from 'react';
import { SafeAreaView,Image,Animated,ScrollView,View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {FlickeringImage} from '../aux_functions/aux_functions'

const openLink = async (url:string) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    await Linking.openURL(url);
  }
};


export default function CoursesCertificates() {
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(moveAnim, {
            toValue: 10,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(moveAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, []);



  return (
    <SafeAreaView style={{  }}>
    <ScrollView contentContainerStyle={styles.maincontainer}>
      <View style={styles.titlescontainer}><Text style={styles.titles}>REGULATED</Text></View>
      
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://www.talent.upc.edu/cat/estudis/formacio/curs/310401/postgrau-artificial-intelligence-deep-learning/')}>
          <FlickeringImage source={require('../assets/logo_upc.png')}/>
          <Text style={{fontWeight:'200',width:80,textAlign:'center'}}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>ARTIFICIAL INTELLIGE & DEEP LEARNING </Text>
          <Text style={styles.text}>I would be a fool if I wasn't interested in AI, so I started this postgraduate specialized in <Text style={{ fontWeight: 'bold' }}>deep learning</Text> where we learned to understand neuronal networks, how are they trained and how to mold them to resolve tasks related with <Text style={{ fontWeight: 'bold' }}>NLP, Computer Vision, Speech Processing...</Text></Text>
        </View>

      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://www.upc.edu/ca/graus/enginyeria-de-sistemes-audiovisuals-terrassa-eseiaat')}>
          <FlickeringImage source={require('../assets/logo_upc.png')}  />
          <Text style={{fontWeight:'200',width:80,textAlign:'center'}}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>TELECOMMUNICATIONS ENGINEERING</Text>
          <Text style={styles.text}>
            Specifically I completed the <Text style={{ fontWeight: 'bold' }}>Audiovisual Systems Engineering</Text> degree, which is a branch of telecomms, where as a core competencies I learned
            fundamentals & applications of <Text style={{ fontWeight: 'bold' }}>audio and video</Text> systems. 
            Analysis and synthesis of <Text style={{ fontWeight: 'bold' }}>electrical & electronic </Text>circuits.    
            <Text style={{ fontWeight: 'bold' }}> Digital & analogue</Text> communications.
            Specialization in <Text style={{ fontWeight: 'bold' }}>digital signal processing, acoustics, communcation systems and multimedia techniques</Text>.
          </Text>
        </View>
        
      </View>
      
      <View style={styles.titlescontainer}><Text style={styles.titles}>OTHERS<Text style={{fontSize:23}}>🧪✅</Text></Text></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://drive.google.com/file/d/1bS2iu1KAXqgd-IdXJcJ1hKMmGmWs6FH2/view?usp=sharing')}>
          <FlickeringImage source={require('../assets/btc_logo.png')} />
          <Text style={{fontWeight:'200',width:80,textAlign:'center'}}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>BLOCKCHAIN BASICS</Text>
          <Text style={styles.text}>I am also interested in the whole blockchain system and how smart contracts and cryptocurrencies really work on the backend, for sure I'm always prioritizing learning about economics & stock market over wasting on scam coins if that's what you thought😁</Text>
        </View>
        
      </View>
      
      
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: { 
    backgroundColor:'white',
    justifyContent:'flex-start',
    margin:20,
    paddingBottom:32
    },
  container: { 
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    margin:10,
    padding: 7,
    borderRadius: 15,
    marginBottom: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
     
    },
  text: {flexShrink:1,fontSize: 15,textAlign:'justify'},
  logoscerts:{
    width:80,
    height:80,
    margin:3

  },
  titles:{fontFamily:'sans-serif-thin',fontSize:30},
  titlescontainer:{
    flex:1,
    alignItems:'center',
    borderWidth:0,
    borderColor:'black',
    margin:20, 

  }
});