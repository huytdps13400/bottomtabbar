import React from 'react';
import {StyleSheet, Image, View, Platform} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';
import {icons} from '../assets';
import {colors} from '../theme';
import {getSize} from '../utils/responsive';
import TabBarCart from './TabBarCart';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

const BottomtabNavigation = () => {
  const Safe = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBar={props => (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }}>
          <BottomTabBar {...props} />
          {
            (Platform.OS = 'ios' && (
              <View
                style={{
                  position: 'absolute',
                  paddingBottom: Safe.bottom - getSize.v(3),
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: '#FFFFFF',
                }}></View>
            ))
          }
        </View>
      )}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.lightGray,
        style: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 30,
        },
        tabStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={icons.home}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode={'contain'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.PRODUCTSCREENS}
        component={bottom.PRODUCTSCREENS}
        options={{
          tabBarLabel: 'Sản phẩm',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={icons.product}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode={'contain'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.CARTSCREENS}
        component={bottom.CARTSCREENS}
        options={{
          tabBarButton: props => <TabBarCart {...props} />,
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={icons.notification}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode={'contain'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.PROFILESCREENS}
        component={bottom.PROFILESCREENS}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color}) => {
            return (
              <Image
                source={icons.users}
                style={{...styles.icoBottom, tintColor: color}}
                resizeMode={'contain'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomtabNavigation;

const styles = StyleSheet.create({
  icoBottom: {
    height: getSize.s(22),
    width: getSize.s(22),
  },
});
