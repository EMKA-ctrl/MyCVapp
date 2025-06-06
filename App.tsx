import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';

import WorkExperience from './screens/work_exp';
import CoursesCertificates from './screens/courses_certificates';
import ContactForm from './screens/contactForm';
import Studies from './screens/mystudies';




const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerTitleAlign:'center',contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false,title:""}} />
        <Stack.Screen name="Courses & Certificates" component={CoursesCertificates} options={{title:"Courses & Certificates 🏅"}} />
        <Stack.Screen name="Studies" component={Studies} options={{title:"Studies 🎓"}}/>
        <Stack.Screen name="WorkExperience" component={WorkExperience} options={{title:"Work Experience 💼"}}/>
        <Stack.Screen name="ContactForm" component={ContactForm} options={{title:"Contact Form 📨 "}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



