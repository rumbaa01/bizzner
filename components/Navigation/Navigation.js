/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator, ScrollView, DrawerItems, createStackNavigator } from 'react-navigation';
import { SettingsScreen, ComplainScreen, CurrentEventsScreen, HistoryScreen, EditProfileScreen, MessagesScreen } from './Screens';
import MainScreen from '../Main';

const drawerItemStyle = { borderBottomWidth: 1, borderBottomColor: '#f3f3f3', height: 60, textAlign: 'left' };
const drawerLabelStyle = { margin: 0, fontSize: 16, fontFamily: 'Roboto-Medium' };

const Drawer = createDrawerNavigator({
    ['CURRENT EVENTS']: {
        screen: CurrentEventsScreen
    },
    ['MESSAGES']: {
        screen: MessagesScreen
    },
    ['PROFILE']: {
        screen: EditProfileScreen,
    },
    ['HISTORY']: {
        screen: HistoryScreen
    },
    [`COMPLAIN`]: {
        screen: ComplainScreen,
    },
    [`SETTINGS`]: {
        screen: SettingsScreen,
    },
},
    {
        overlayColor: 'rgba(0, 0, 0, 0.2)',
        contentComponent: props =>
            <ScrollView>
                <TouchableOpacity style={{ paddingLeft: 12 }} onPress={props.navigation.closeDrawer}>
                    <Icon name="bars" style={{ fontSize: 22, color: '#8da6d5' }} />
                </TouchableOpacity>
                <DrawerItems
                    {...props}
                    itemStyle={drawerItemStyle}
                    inactiveTintColor={'#3d6cba'}
                    itemsContainerStyle={{ paddingHorizontal: 20 }}
                    labelStyle={drawerLabelStyle}
                    iconContainerStyle={{ marginHorizontal: 0, marginRight: 16 }}
                    activeBackgroundColor={'#fff'}
                />

            </ScrollView>
    });

const shadow = {
    shadowColor: '#000', shadowRadius: 5, shadowOpacity: 0.6, shadowOffset: {
        width: 5, height: 0
    }
}


export default createStackNavigator({
    Auth: {
        screen: MainScreen
    },
    Home: {
        screen: Drawer,
        navigationOptions: {
            header: null
        }
    }
}, {
        containerOptions: {
            style: {
                backgroundColor: '#f00',
                flex: 1

            }
        }
    });