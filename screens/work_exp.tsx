import React, { useEffect, useRef } from 'react';
import { SafeAreaView,Image,Animated,ScrollView,View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native';



export default function WorkExperience() {
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.maincontainer}>
      <View style={styles.titlescontainer}><Text style={styles.titles}>Full-Time Positions <Text style={{fontSize:23}}>💼📄</Text></Text></View>
      
      <View style={styles.container}>
          <Image style = {{width:80,height:52,margin:3,}} source={require('../assets/ficosa_logo.png')}/>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>ADAS TEST ENGINEER | ETHERNET  </Text>
          <Text >🕒 May 2022 - Present </Text>
          <Text style={styles.text}>In Ficosa my main tasks as a System Test Engineer, consist on testing and validating both ECUs & Cameras with protocols like 
            <Text style={{ fontWeight: 'bold' }}> DoIP, CAN and Ethernet</Text>, for the SVS of ADAS Vehicles,  this includes endurance, FMVSS, temperature tests, test suites design,
            and also validation in the real car, all of this with tools like CANoe, vTest, ODIS, Vector CAN Cases, VAS ... </Text>
            <Text style={styles.text}>I also have travelled several times to <Text style={{ fontWeight: 'bold' }}>Volkswagen factories</Text> in order to investigate & document issues 
            and different behaviors. Currently I am developing and training <Text style={{ fontWeight: 'bold' }}>deep learning systems with HuggingFace & TensorFlow</Text> to validate these products.  </Text>
        </View>

      </View>
      <View style={styles.container}>
        <Image style = {{width:80,height:70,margin:3}} source={require('../assets/logo_abast.png')}/>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>IT TECHNICIAN</Text>
          <Text >🕒 Oct 2021 - Feb 2022 </Text>
          <Text style={styles.text}>
             During this period I was maintaining and developing a system of <Text style={{ fontWeight: 'bold' }}> Jmeter and Javascript probes</Text>, the main purpose of this 
             probes were to exist in a continuous executing loop, to monitor important web pages like
            <Text style={{ fontWeight: 'bold' }}> Banc Sabadell</Text>.
            
          </Text>
        </View>
        
      </View>
      
      <View style={styles.titlescontainer}><Text style={styles.titles}>Internships<Text style={{fontSize:23}}> 📖</Text></Text></View>
      <View style={styles.container}>
        <Image style = {{width:80,height:70,margin:3}} source={require('../assets/hitachi_logo.png')} />
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>FULLSTACK DEVELOPER</Text>
          <Text >🕒 Oct 2021 - Feb 2022 </Text>
          <Text style={styles.text}>In this internship, I was helping in the development of both frontend,  with<Text style={{ fontWeight: 'bold' }}> React and Typescript</Text> languages, 
          and backend systems, mainly PHP, for production lines, this frontends were displayed in few stations of the line on screens with 
          several <Text style={{ fontWeight: 'bold' }}>Raspberry Pi computers</Text> connected to the localhost.  </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Image style = {{width:80,height:80,margin:3}} source={require('../assets/logo_upc.png')} />
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold'}}>UNIVERSITAT POLITÈCNICA DE CATALUNYA</Text>
          <Text >🕒 Feb 2021 - Jun 2022 </Text>
          <Text style={styles.text}>It was more like a scolarship, but the main activities were to control and mantain an electronic measurement laboratory for the first year students in my university</Text>
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
    marginBottom: 3,
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