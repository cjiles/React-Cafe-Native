import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuItems from './MenuItemsComponent';
import Locations from './LocationsComponent';
import Order from './OrderComponent';
import { createStackNavigator, createDrawerNavigator, DrawerItems, createTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { View } from 'react-native';


const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#294452'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#F3F2F4',
                marginBottom: 20
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
        initialRouteName: 'Menu',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#294452'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#F3F2F4',
                marginBottom: 20
            }
        })
    }
);

const LocationNavigator = createStackNavigator(
    {
        Locations: { screen: Locations }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#294452'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#F3F2F4',
                marginBottom: 20
            }
        }
    }
);

const OrderNavigator = createStackNavigator(
    {
        Order: { screen: Order }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#294452'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#F3F2F4',
                marginBottom: 20
            }
        }
    }
);
// const MainNavigator = createDrawerNavigator(
//     {
//         Home: { screen: HomeNavigator },
//         Menu: { screen: MenuNavigator},
//         Locations: { screen: LocationNavigator}
//     },
//     {
//         drawerBackgroundColor: '#CEC8FF'
//     }
// );

const MainNavigator = createMaterialTopTabNavigator(
    {
        Home: HomeNavigator,
        Menu: MenuNavigator,
        Locations: LocationNavigator,
        Order: OrderNavigator
    },
    {
        tabBarOptions: {
            activeTintColor: '#F3F2F4',
            inactiveTintColor: 'black', 
            labelStyle: {fontSize: 16},
            showIcon: true,
            style: {backgroundColor: '#81A2B7'},
            indicatorStyle: {color: 'black'}
        }
    }
)



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