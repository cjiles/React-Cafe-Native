import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuItems from './MenuItemsComponent';
import Locations from './LocationsComponent';
import Order from './OrderComponent';
import ShoppingCart from './ShoppingCartComponent';
import ShoppingCartIcon from './ShoppingCartIconComponent';
import { createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
console.disableYellowBox = true;


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
            },
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

const ShoppingCartNavigator = createStackNavigator(
    {
        ShoppingCart: { screen: ShoppingCart }
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
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        },
        Locations: {
            screen: LocationNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='map-marker'
                        type='font-awesome'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        },
        Order: {
            screen: OrderNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='coffee'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        ShoppingCart: {
            screen: ShoppingCartNavigator,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name='coffee'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }

    },

    {
        tabBarOptions: {
            activeTintColor: '#F3F2F4',
            inactiveTintColor: 'black',
            labelStyle: {fontSize: 12, fontWeight: 'bold'},
            showIcon: true,
            style: {backgroundColor: '#81A2B7'},
        }
    }
)



class Main extends Component{
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <Header
                    centerComponent={{ text: "React Cafe", style: { color: 'white', fontSize: 30, marginBottom: 10}}}
                    rightComponent={{icon:'shopping-cart'}}
                    containerStyle={{backgroundColor: '#98977C'}}
                    containerStyle={{
                        backgroundColor: '#98977C',
                        justifyContent: 'space-around'}}
                />
                <MainNavigator />
            </View>
        );
      }
}

export default Main;