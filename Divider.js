import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SCREEN_WIDTH } from './dimensions';

const Divider = () => {
  const refAnimate = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      refAnimate.current?.rubberBand();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          width: SCREEN_WIDTH / 3,
          height: 1,
          backgroundColor: '#FAD5D8',
        }}
      />
      <Animatable.View ref={refAnimate} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="flower-poppy" size={20} color="pink" />
        <MaterialCommunityIcons name="flower-poppy" size={30} color="#f7adb5" />
        <MaterialCommunityIcons name="flower-poppy" size={20} color="pink" />
      </Animatable.View>
      <View
        style={{
          width: SCREEN_WIDTH / 3,
          height: 1,
          backgroundColor: '#FAD5D8',
        }}
      />
    </View>
  );
};

export default Divider;
