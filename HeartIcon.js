import { View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import React from 'react';
import palette from './palette';

export default function HeartIcon() {
  return (
    <View
      style={{
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 1 },
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4,
      }}
    >
      <Octicons name="heart" size={25} color={palette.red} />
    </View>
  );
}
