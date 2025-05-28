import React, { useEffect, useRef } from 'react';
import { ImageProps,ImageSourcePropType,GestureResponderEvent,TouchableOpacity,View, Animated, StyleSheet } from 'react-native';




export const FlickeringImage = ({  ...rest }) => {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.5,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    
      <Animated.Image
      {...rest} // ← pass all Image props
      style=
      {{
        opacity:opacityAnim,
        width:80,
        height:80,
        margin:3}}
      />
    
  );
};
