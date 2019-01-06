import React from 'react';
import { View, Text } from 'react-native';

const items  = [
  'Item 1',
  "Item 2",
  "Item 3"
];

const CardSet = ({}) => (
  <View>
    {
      // ES6 "funcion map"
      items.map(item => (
        <Text>{item}</Text>
      ))
    }
  </View>
);

export default CardSet;
