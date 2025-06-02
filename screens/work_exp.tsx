
import { SafeAreaView,Image,ScrollView,View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native';
import { gen_styles } from '../aux_functions/styles';
import { ch } from '../aux_functions/dimensions';



export default function WorkExperience() {
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.maincontainer}>
      <View style={styles.titlescontainer}><Text style={styles.titles}>Full-Time Positions <Text style={{fontSize:23}}>💼📄</Text></Text></View>
       
        <View style={styles.container}>
          
            <Image style = {[gen_styles.images_logos,{width:ch(80),height:ch(50)}]} source={require('../assets/ficosa_logo.png')}/>
          <View style={{flex:1,borderWidth:0,flexShrink:1}}>
            
              <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>ADAS TEST ENGINEER | ETHERNET  </Text>
              <Text style = {{fontSize:ch(14.5)}} >🕒 May 2022 - Present </Text>
              <Text style={styles.text}>At Ficosa, I worked as a <Text style={{ fontWeight: 'bold' }}>System Test Engineer</Text> testing and validating ECUs and cameras for ADAS vehicles using 
                <Text style={{ fontWeight: 'bold' }}> DoIP, CAN, and Ethernet</Text>. I performed endurance, FMVSS, temperature, and real-car tests with tools like 
                <Text style={{ fontWeight: 'bold' }}> CANoe, vTest, ODIS, and Vector tools</Text>. I also visited 
                <Text style={{ fontWeight: 'bold' }}> Volkswagen factories</Text> to investigate and document issues. Currently, I’m developing 
                <Text style={{ fontWeight: 'bold' }}> deep learning models with HuggingFace and TensorFlow</Text> to enhance product validation.</Text>
            
          </View>
        
        
        </View>
      
      <View style={styles.container}>
        <Image style = {gen_styles.images_logos} source={require('../assets/logo_abast.png')}/>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>IT TECHNICIAN</Text>
          <Text style = {{fontSize:ch(14.5)}}>🕒 Oct 2021 - Feb 2022 </Text>
          <Text style={styles.text}>
             During this period I was maintaining and developing a system of <Text style={{ fontWeight: 'bold' }}> Jmeter and Javascript probes</Text>, the main purpose of this 
             probes were to exist in a continuous executing loop, to monitor important web pages like
            <Text style={{ fontWeight: 'bold' }}> Banc Sabadell</Text>.
            
          </Text>
        </View>
        
      </View>
      
      <View style={styles.titlescontainer}><Text style={styles.titles}>Internships<Text style={{fontSize:23}}> 📖</Text></Text></View>
      <View style={styles.container}>
        <Image style = {[gen_styles.images_logos,{width:ch(80),height:ch(70)}]} source={require('../assets/hitachi_logo.png')} />
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>FULLSTACK DEVELOPER</Text>
          <Text style = {{fontSize:ch(14.5)}}>🕒 Oct 2021 - Feb 2022 </Text>
          <Text style={styles.text}>In this internship, I was helping in the development of both frontend,  with<Text style={{ fontWeight: 'bold' }}> React and Typescript</Text> languages, 
          and backend systems, mainly PHP, for production lines, this frontends were displayed in few stations of the line on screens with 
          several <Text style={{ fontWeight: 'bold' }}>Raspberry Pi computers</Text> connected to the localhost.  </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Image style = {gen_styles.images_logos} source={require('../assets/logo_upc.png')} />
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>UNIVERSITAT POLITÈCNICA DE CATALUNYA</Text>
          <Text style = {{fontSize:ch(14.5)}}>🕒 Feb 2021 - Jun 2022 </Text>
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
  text: {flexShrink:1,fontSize: ch(15),textAlign:'justify'},
  titles:{fontFamily:'sans-serif-thin',fontSize:ch(30)},
  titlescontainer:{
    flex:1,
    alignItems:'center',
    borderColor:'black',
    

  }
});