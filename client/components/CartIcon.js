import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slices/CartSlice'
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../slices/RestaurantSlice';
import { themeColors } from '../theme';

export default function CartIcon() {
  const CartItems = useSelector(selectCartItems);
  const CartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();
  if (!CartItems.length) return null;
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate('Cart')}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
          <Text className="font-extrabold text-white text-lg">{CartItems.length}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${CartTotal}</Text>

      </TouchableOpacity>

    </View>
  )
}