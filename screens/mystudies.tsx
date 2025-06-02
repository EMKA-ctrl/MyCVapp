
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
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.maincontainer}>
      <View style={styles.titlescontainer}><Text style={styles.titles}>REGULATED</Text></View>
      
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://www.talent.upc.edu/cat/estudis/formacio/curs/310401/postgrau-artificial-intelligence-deep-learning/')}>
          <Image resizeMode = 'contain' style = {gen_styles.images_logos} source={require('../assets/logo_upc.png')}/>
          <Text style={gen_styles.certificates}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>ARTIFICIAL INTELLIGE & DEEP LEARNING </Text>
          <Text style={styles.text}>I would be a fool if I wasn't interested in AI, so I started this postgraduate specialized in <Text style={{ fontWeight: 'bold' }}>deep learning</Text> where we learned to understand neuronal networks, how are they trained and how to mold them to resolve tasks related with <Text style={{ fontWeight: 'bold' }}>NLP, Computer Vision, Speech Processing...</Text></Text>
        </View>

      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://www.upc.edu/ca/graus/enginyeria-de-sistemes-audiovisuals-terrassa-eseiaat')}>
          <Image resizeMode = 'contain' style = {gen_styles.images_logos} source={require('../assets/logo_upc.png')}  />
          <Text style={gen_styles.certificates}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>TELECOMMUNICATIONS ENGINEERING</Text>
          <Text style={styles.text}>
            Specifically I completed the <Text style={{ fontWeight: 'bold' }}>Audiovisual Systems Engineering</Text> degree, which is a branch of telecomms, where as a core competencies I learned
            fundamentals & applications of <Text style={{ fontWeight: 'bold' }}>audio and video</Text> systems. 
            Analysis and synthesis of <Text style={{ fontWeight: 'bold' }}>electrical & electronic </Text>circuits.    
            <Text style={{ fontWeight: 'bold' }}> Digital & analogue</Text> communications.
            Specialization in <Text style={{ fontWeight: 'bold' }}>digital signal processing, acoustics, communcation systems and multimedia techniques</Text>.
          </Text>
        </View>
        
      </View>
      
      <View style={styles.titlescontainer}><Text style={styles.titles}>OTHERS<Text style={{fontSize:ch(23)}}>🧪✅</Text></Text></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => openLink('https://drive.google.com/file/d/1bS2iu1KAXqgd-IdXJcJ1hKMmGmWs6FH2/view?usp=sharing')}>
          <Image resizeMode = 'contain' style = {[gen_styles.images_logos,{width:ch(90),height:ch(45)}]} source={require('../assets/btc_logo.png')} />
          <Text style={gen_styles.certificates}>Certificate 🔗 </Text>
        </TouchableOpacity>
        <View style={{flex:1,borderWidth:0,flexShrink:1}}>
          <Text style={{ fontWeight: 'bold',fontSize:ch(14.5)}}>BLOCKCHAIN BASICS</Text>
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
  text: {flexShrink:1,fontSize: ch(15),textAlign:'justify'},
  titles:{fontFamily:'sans-serif-thin',fontSize:ch(30)},
  titlescontainer:{
    flex:1,
    alignItems:'center',
    borderColor:'black',
    margin:ch(10), 

  }
});