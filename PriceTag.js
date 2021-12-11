import { Text, View } from 'react-native';
import React from 'react';
import palette from './palette';

export default function PriceTag({ price }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <View
        style={{
          width: 60,
          height: 55,
          borderRadius: 10,
          backgroundColor: 'white',
          shadowRadius: 5,
          shadowColor: 'red',
          shadowOpacity: 0.1,
          shadowOffset: { width: 1, height: 1 },
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text style={{ color: palette.pink, fontSize: 17, fontWeight: 'bold' }}>$</Text>
        <Text style={{ color: palette.pink, fontSize: 25, fontWeight: 'bold' }}>{price}</Text>
      </View>
    </View>
  );
}
