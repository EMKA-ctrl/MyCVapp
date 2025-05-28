
import React from 'react';
import { useWindowDimensions,SafeAreaView,TouchableOpacity,Image,View, Text, StyleSheet,Linking } from 'react-native';


const {width,height} = useWindowDimensions();


const openLinkedIn = async () => {
  const appUrl = 'linkedin://in/marc-sebastia';
  const webUrl = 'https://www.linkedin.com/in/marc-sebastia';


  const supported = await Linking.canOpenURL(appUrl);
  if (supported) {
    await Linking.openURL(appUrl);
  } else {
    await Linking.openURL(webUrl);
  }
};

const openMail = async () => {
  const email = 'sebastiamarc@gmail.com';
  const subject = 'Contact from App';
  const webUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  const supported = await Linking.canOpenURL(webUrl);
  if (supported) {
    await Linking.openURL(webUrl);
  } 
};

const openGithub = async () => {
  const webUrl = 'https://github.com/EMKA-ctrl';

  const supported = await Linking.canOpenURL(webUrl);
  if (supported) {
    await Linking.openURL(webUrl);
  } 
};

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={[styles.container,{paddingBottom:10}]}>
      <View style={styles.container}>
        <Text style={styles.name}>Marc Sebastià</Text>
        <Image source={require('../assets/perfil.jpg')} style={styles.FotoPerfil} />
        <Text style={styles.welcome}>Dear curious, </Text>
        <Text style={styles.welcome}>Welcome to my extended CV  😄</Text>
        {/* 
        <View>
          <TouchableOpacity style={styles.btnTopics} onPress={() => navigation.navigate('courses & certificates')}><Text style={styles.txtTopics}>Projects</Text></TouchableOpacity>
        </View>
        */}
        <View>
          <TouchableOpacity style={styles.btnTopics} onPress={() => navigation.navigate('WorkExperience')}><Text style={styles.txtTopics}>Work Experience 💼</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnTopics} onPress={() => navigation.navigate('Studies')}><Text style={styles.txtTopics}>Studies 🎓</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnTopics} onPress={() => navigation.navigate('Courses & Certificates')}><Text style={styles.txtTopics}>Courses & Certificates 🏅</Text></TouchableOpacity>  
        </View>
        
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={openLinkedIn}>
                  <Image style={styles.logos} source={require('../assets/linkedin_logo.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={openGithub}>
                  <Image style={styles.logos} source={require('../assets/github_logo.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={openMail}>
                  <Image style={styles.logos} source={require('../assets/mail_logo.png')} ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.botstuff}>
        <Text>I made this with React Native and Expo!</Text>
          <View style={styles.logoscontainer}>
            <Image style={styles.logo} source={require('../assets/rn_logo.png')}></Image>
            <Image style={styles.explogo} source={require('../assets/expo_logo.png')}></Image>    
          </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    gap:20,
    backgroundColor:'white'
  },
  FotoPerfil:{
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  btnTopics:{
    borderRadius:18,
    backgroundColor: '#f5f5f5',
    alignItems:'center',
    padding:9,
    width:330,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  txtTopics:{
    fontSize:25,
    fontFamily:'sans-serif-bold',
    
  },
  welcome:{
    fontFamily:'sans-therif-bold',
    fontSize:18,
  },
  name:{
    fontFamily:'sans-serif-thin',
    fontSize: 45
  },
  logo:{
    width: 60,
    height: 60
  },
  explogo:{width:120,height:60},
  botstuff:{
    justifyContent:'flex-end',
    paddingVertical:20
  },
  logoscontainer:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  logos:{
    width:60,
    height:60
  },
  logoContainer:{
    flexDirection: 'row',
    gap:25
  }
});
