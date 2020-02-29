import React, { Component } from 'react';
import { PricingCard } from 'react-native-elements';
import { ORDER } from '../shared/order';
import { ScrollView, FlatList, Alert } from 'react-native';

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: ORDER,
        };
    }

    static navigationOptions = {
        title: "Order One Of Our Popular Blends"
    };

   

    render() {

        const renderItems = ({item}) => {
            return (
                <PricingCard
                    color="#294452"
                    title={item.title}
                    titleStyle={{fontSize: 25}}
                    price={item.price}
                    pricingStyle={{fontSize: 20}}
                    info={[item.description, ""]}
                    button={{ title: 'Add Item', icon: 'shopping-cart' }}
                    onButtonPress={() => {
                        Alert.alert(
                            'Shopping Cart',
                            'Your item was added to the shopping cart',
                            [
                                {
                                    text: 'OK',
                                }
                            ]
                        )
                      }
                    }
                /> 
            );
        };
     
        return(
            
            <ScrollView>
                <FlatList
                    data={this.state.order}
                    renderItem={renderItems}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        ); 
    }
}

export default Orders;