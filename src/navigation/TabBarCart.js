import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {icons} from '../assets';
import TabBg from './TabBg';
const TabBarCart = props => {
  return (
    <View
      pointerEvents="box-none"
      style={{position: 'relative', width: 75, alignItems: 'center'}}>
      <TabBg style={{position: 'absolute', top: 0}} />
      <Pressable
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#006EFE',
          height: 50,
          width: 50,
          top: -22.5,
          borderRadius: 50 / 2,
          borderColor: '#fff',
          borderWidth: 1,
        }}
        onPress={props.onPress}>
        <Image
          source={icons.shoppingcart}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      </Pressable>
    </View>
  );
};

export default TabBarCart;
