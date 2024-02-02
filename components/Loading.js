import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loading = ({theme = 'white', size = 'large'}) => {
  const color = theme === 'white' ? '#ea580c' : '#ea580c';
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.8,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
      }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};