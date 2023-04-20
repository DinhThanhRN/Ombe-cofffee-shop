import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import OwnOrder from './OwnOrder';
import OverviewScreen from './OverviewScreen';
import ProductDetail from './ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentScreen from './PaymentScreen';
import CategoryScreen from './CategoryScreen';
import WishlistScreen from './WishlistScreen';
import {Colors} from '../../config/colors';
import DeliveryTracking from './DeliveryTracking';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../reducers/store';
import {logout} from '../../reducers/authentication';
import {clearUserInfor} from '../../reducers/user';
import Coupon from '../../components/MainScreens/Payment/screens/Coupon';
import PaymentMethod from '../../components/MainScreens/Payment/screens/PaymentMethod';
import ShippingAddress from '../../components/MainScreens/Payment/screens/ShippingAddress';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const CustomDrawerContent = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserInfor());
  };
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        icon={() => <Icon name="logout" color={Colors.theme} size={30} />}
        style={{flex: 1, justifyContent: 'flex-end'}}
      />
    </DrawerContentScrollView>
  );
};

const MainDrawer = (): JSX.Element => {
  return (
    <Drawer.Navigator
      // useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.theme,
        drawerActiveBackgroundColor: 'none',
        drawerType: 'slide',
        swipeEdgeWidth: 12,
      }}>
      <Drawer.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        options={{
          title: 'Overview',
          drawerIcon: () => <Icon name="home" size={30} color={Colors.theme} />,
        }}
      />
      <Drawer.Screen
        name="OwnOrder"
        component={OwnOrder}
        options={{
          title: 'My Order',
          drawerIcon: () => (
            <Icon name="cart-outline" size={30} color={Colors.theme} />
          ),
        }}
      />
      <Drawer.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          title: 'Wishlist',
          drawerIcon: () => (
            <Icon name="heart-outline" size={30} color={Colors.theme} />
          ),
        }}
      />
      <Drawer.Screen
        name="DeliveryTracking"
        component={DeliveryTracking}
        options={{
          title: 'Delivery Tracking',
          drawerIcon: () => (
            <Icon name="clock-outline" size={30} color={Colors.theme} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const MainScreen = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainDrawer" component={MainDrawer} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default MainScreen;
