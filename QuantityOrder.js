import { Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import React from 'react';
import palette from './palette';
import { SCREEN_WIDTH } from './dimensions';

export default function QuantityOrder() {
  return (
    <View
      style={{
        width: SCREEN_WIDTH * 0.32,
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: palette.grayBorder,
        alignItems: 'center',
      }}
    >
      <Entypo name="minus" color="silver" size={20} />
      <Text style={{ color: palette.black, fontSize: 20 }}>1</Text>
      <Entypo name="plus" color="silver" size={20} />
    </View>
  );
}
