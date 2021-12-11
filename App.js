import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import palette from './palette';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './dimensions';
import { Option, OptionPicker } from './OptionPicker';
import LeftIcon from './LeftIcon';
import Divider from './Divider';
import FiveStars from './FiveStars';
import HeartIcon from './HeartIcon';
import QuantityOrder from './QuantityOrder';
import PriceTag from './PriceTag';

export default function App() {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <ImageBackground
        source={{ uri: 'https://img.icons8.com/dusk/256/000000/chicken.png' }}
        style={{ width: 256, height: 256, marginTop: 50, marginLeft: 30 }}
      ></ImageBackground>
      <OptionPicker title="Sugar Level">
        <Option title="0%" />
        <Option title="25%" />
        <Option title="50%" />
        <Option title="100%" selected />
      </OptionPicker>
      <View style={{ alignItems: 'center' }}>
        <HeartIcon />
        <LeftIcon />
        <FiveStars />
        <QuantityOrder />
      </View>
    </ScrollView>
  );
}
