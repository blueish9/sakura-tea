import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import palette from './palette';
import { View } from 'react-native';

export default function FiveStars() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FontAwesome name="star" size={20} color={palette.yellow} style={{ marginRight: 4 }} />
      <FontAwesome name="star" size={20} color={palette.yellow} style={{ marginRight: 4 }} />
      <FontAwesome name="star" size={20} color={palette.yellow} style={{ marginRight: 4 }} />
      <FontAwesome name="star" size={20} color={palette.yellow} style={{ marginRight: 4 }} />
      <FontAwesome name="star" size={20} color={palette.yellow} style={{ marginRight: 10 }} />
    </View>
  );
}
