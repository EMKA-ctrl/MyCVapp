
import { SafeAreaView,Image,ScrollView,View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native';
import { gen_styles } from '../aux_functions/styles';
import { ch } from '../aux_functions/dimensions';


const openLink = async (url:string) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    await Linking.openURL(url);
  }
};


export default function CoursesCertificates() {

  return (
    <SafeAreaView style={{  }}>
    <ScrollView contentContainerStyle={styles.maincontainer}>
      <View style={styles.titlescontainer}><Text style={styles.titles}>IT  <Text style={{fontSize:ch(23)}}>🖥️🛠️</Text></Text></View>
      <View style={gen_styles.container}>
        <TouchableOpacity onPress={() => openLink('https://drive.google.com/file/d/1IE1nBDTRteiojjt0-_Z9h5lMj0xukbL7/view?usp=sharing')}>
          <Image resizeMode = 'contain' style={gen_styles.images_logos} source={require('../assets/google_act_logo.png')}/>
          <Text style={gen_styles.certificates}>Certificate 🔗 </Text>
        </TouchableOpacity>
        
        <View style={{flex:1,flexShrink:1,minWidth: 0}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>MOBILE APPS DEVELOPMENT</Text>
          <Text style={styles.text}>Just finishing my degree I attended an Open Class of <Text style={{ fontWeight: 'bold' }}>React Native</Text>, I did know some React from the last internship I did, but it opened a new world for me and I started to code and learn right away, this apps course is an example of my interest!  </Text>
        </View>

      </View>
      <View style={gen_styles.container}>
        <TouchableOpacity onPress={() => openLink('https://www.hackerrank.com/certificates/e8f000b4351b')}>
          <Image resizeMode = 'contain' style={gen_styles.images_logos} source={require('../assets/python_logo.png')} />
          <Text style={gen_styles.certificates}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>HACKER RANK</Text>
          <Text style={styles.text}>Since I finished highschool I stayed in touch with coding languages, yeah you guessed it right, <Text style={{ fontWeight: 'bold' }}>Python</Text></Text>
        </View>
        
      </View>
      
      <View style={styles.titlescontainer}><Text style={styles.titles}>QA  <Text style={{fontSize:ch(23)}}>🧪✅</Text></Text></View>
      <View style={gen_styles.container}>
        <TouchableOpacity onPress={() => openLink('https://drive.google.com/file/d/1Lnvar0kaS9MUQVsGo1Nx1A6kJPzuXCjB/view?usp=sharing')}>
          <Image  resizeMode = 'contain' style={gen_styles.images_logos} source={require('../assets/istqb.png')} />
          <Text  style={gen_styles.certificates}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>ISTQB CERTIFICATE</Text>
          <Text style={styles.text}>I was able to aquire the Foundation Level of the <Text style={{ fontWeight: 'bold' }}>ISTQB</Text> Certificate while i was working at FICOSA as a Test Engineer in 2024</Text>
        </View>
        
      </View>
      <View style={styles.titlescontainer}><Text style={styles.titles}>Languages  <Text style={{fontSize:ch(23)}}>🌍🗣️</Text></Text></View>

      
      <View style={[gen_styles.container,{flexDirection:'row'}]}>
        
        <Text style={styles.lang_1}>🇪🇦 CATALAN</Text>
        <Text style={styles.lang_2}> ◉ ◉ ◉ ◉ ◉ ◉ </Text>
        <Text style={styles.lang_3}> Native</Text>
      </View>
            <View style={[gen_styles.container,{flexDirection:'row'}]}>
        
        <Text style={styles.lang_1}>🇪🇦 SPANISH</Text>
        <Text style={styles.lang_2}> ◉ ◉ ◉ ◉ ◉ ◉ </Text>
        <Text style={styles.lang_3}> Native</Text>
      </View>
            <View style={[gen_styles.container,{flexDirection:'row'}]}>
        
        <Text style={styles.lang_1}>🇬🇧 ENGLISH  </Text>
        <Text style={styles.lang_2}> ◉ ◉ ◉ ◉ ○ ○ </Text>
        <Text style={styles.lang_3}> B2 | C1</Text>
      </View>
            <View style={[gen_styles.container,{flexDirection:'row'}]}>
        
        <Text style={styles.lang_1}>🇲🇫 FRENCH  </Text>
        <Text style={styles.lang_2}> ◉ ◉ ○ ○ ○ ○ </Text>
        <Text style={styles.lang_3}> A2</Text>
      </View>

      
      
    </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: { 
    backgroundColor:'white',
    justifyContent:'flex-start',
    margin:ch(20),
    paddingBottom:ch(12),
    

    },

  text: {flexWrap:'wrap',flexShrink:1,fontSize: ch(15),textAlign:'justify',},
  lang_1:{fontFamily:'sans-serif-thin',fontSize:ch(19),flex:1, textAlign: 'left',marginHorizontal:ch(5)},
  lang_2:{flex:1,textAlign:'center',fontSize:ch(20),marginHorizontal:ch(5)},
  lang_3:{flex:1,textAlign: 'right',marginHorizontal:ch(5),fontFamily:'sans-serif-thin',fontSize:ch(20)},
  titles:{fontFamily:'sans-serif-thin',fontSize:ch(30)},
  titlescontainer:{
    flex:1,
    alignItems:'center',
    margin:ch(10), 

  },
  
});