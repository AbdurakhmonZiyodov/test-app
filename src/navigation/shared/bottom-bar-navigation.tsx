import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_BAR_ROUTER, BottomBarStackParamList} from 'navigation/types';
import {AddingBooksScreen, AddingUsersScreen} from 'screens/bottom-bar';

const Tab = createBottomTabNavigator<BottomBarStackParamList>();
const BottomBarNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={BOTTOM_BAR_ROUTER.ADD_USERS}
        component={AddingUsersScreen}
      />
      <Tab.Screen
        name={BOTTOM_BAR_ROUTER.ADD_BOOKS}
        component={AddingBooksScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomBarNavigation;
