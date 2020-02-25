import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuItems from './MenuItemsComponent';
import Locations from './LocationsComponent';
import Reservation from './ReservationComponent';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { View } from 'react-native';


const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);


const MenuNavigator = createStackNavigator(
    {
        Menu: {screen: Menu},
        MenuItems: {screen: MenuItems}
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Menu: { screen: MenuNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);




class Main extends Component{
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
      }
}

export default Main;