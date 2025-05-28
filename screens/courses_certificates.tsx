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
      <View style={styles.titlescontainer}><Text style={styles.titles}>IT  <Text style={{fontSize:23}}>🖥️🛠️</Text></Text></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://drive.google.com/file/d/1IE1nBDTRteiojjt0-_Z9h5lMj0xukbL7/view?usp=sharing')}>
          <FlickeringImage source={require('../assets/google_act_logo.png')}/>
          <Text style={{fontWeight:'200',width:80,textAlign:'center'}}>Certificate 🔗 </Text>
        </TouchableOpacity>
        
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>MOBILE APPS DEVELOPMENT</Text>
          <Text style={styles.text}>Just finishing my degree I attended an Open Class of <Text style={{ fontWeight: 'bold' }}>React Native</Text>, I did know some React from the last internship I did, but it opened a new world for me and I started to code and learn right away, this apps course is an example of my interest!  </Text>
        </View>

      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://www.hackerrank.com/certificates/e8f000b4351b')}>
          <FlickeringImage source={require('../assets/python_logo.png')} />
          <Text style={{fontWeight:'200',width:80,textAlign:'center'}}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>HACKER RANK</Text>
          <Text style={styles.text}>Since I finished highschool I stayed in touch with coding languages, yeah you guessed it right, <Text style={{ fontWeight: 'bold' }}>Python</Text></Text>
        </View>
        
      </View>
      
      <View style={styles.titlescontainer}><Text style={styles.titles}>QA  <Text style={{fontSize:23}}>🧪✅</Text></Text></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://drive.google.com/file/d/1Lnvar0kaS9MUQVsGo1Nx1A6kJPzuXCjB/view?usp=sharing')}>
          <FlickeringImage source={require('../assets/istqb.png')} />
          <Text style={{fontWeight:'200',width:80,textAlign:'center'}}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>ISTQB CERTIFICATE</Text>
          <Text style={styles.text}>I was able to aquire the Foundation Level of the <Text style={{ fontWeight: 'bold' }}>ISTQB</Text> Certificate while i was working at FICOSA as a Test Engineer in 2024</Text>
        </View>
        
      </View>
      <View style={styles.titlescontainer}><Text style={styles.titles}>Languages  <Text style={{fontSize:23}}>🌍🗣️</Text></Text></View>

      
      <View style={[styles.container,{flexDirection:'row'}]}>
        
        <Text style={{fontFamily:'sans-serif-thin',fontSize:20,flex:1, textAlign: 'left',marginHorizontal:5}}>🇪🇦 CATALAN   </Text>
        <Text style={{flex:1,textAlign:'center',fontSize:21,marginHorizontal:5}}> ◉ ◉ ◉ ◉ ◉ ◉ </Text>
        <Text style={{flex:1,textAlign: 'right',marginHorizontal:5,fontFamily:'sans-serif-thin',fontSize:20}}> Native</Text>
      </View>
            <View style={[styles.container,{flexDirection:'row'}]}>
        
        <Text style={{fontFamily:'sans-serif-thin',fontSize:20,flex:1, textAlign: 'left',marginHorizontal:5}}>🇪🇦 SPANISH  </Text>
        <Text style={{flex:1,textAlign:'center',fontSize:21,marginHorizontal:5}}> ◉ ◉ ◉ ◉ ◉ ◉ </Text>
        <Text style={{flex:1,textAlign: 'right',marginHorizontal:5,fontFamily:'sans-serif-thin',fontSize:20}}> Native</Text>
      </View>
            <View style={[styles.container,{flexDirection:'row'}]}>
        
        <Text style={{fontFamily:'sans-serif-thin',fontSize:20,flex:1, textAlign: 'left',marginHorizontal:5}}>🇬🇧 ENGLISH  </Text>
        <Text style={{flex:1,textAlign:'center',fontSize:21,marginHorizontal:5}}> ◉ ◉ ◉ ◉ ○ ○ </Text>
        <Text style={{flex:1,textAlign: 'right',marginHorizontal:5,fontFamily:'sans-serif-thin',fontSize:20}}> B2 | C1</Text>
      </View>
            <View style={[styles.container,{flexDirection:'row'}]}>
        
        <Text style={{fontFamily:'sans-serif-thin',fontSize:20,flex:1, textAlign: 'left',marginHorizontal:5}}>🇲🇫 FRENCH  </Text>
        <Text style={{flex:1,textAlign:'center',fontSize:21,marginHorizontal:5}}> ◉ ◉ ○ ○ ○ ○ </Text>
        <Text style={{flex:1,textAlign: 'right',marginHorizontal:5,fontFamily:'sans-serif-thin',fontSize:20,}}> A2</Text>
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
    marginBottom: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
     
    },
  text: {flexShrink:1,fontSize: 15,textAlign:'justify'},

  titles:{fontFamily:'sans-serif-thin',fontSize:30},
  titlescontainer:{
    flex:1,
    alignItems:'center',
    borderWidth:0,
    borderColor:'black',
    margin:15, 

  }
});