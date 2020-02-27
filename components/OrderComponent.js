import React, { Component } from 'react';
import { PricingCard, Card } from 'react-native-elements';
import { ORDER } from '../shared/order';
import { ScrollView, FlatList, Text } from 'react-native';

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: ORDER
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
                    titleStyle={{fontSize: 30}}
                    price={item.price}
                    info={[item.description, ""]}
                    button={{ title: 'Add Item', icon: 'list' }}>
                </PricingCard>
              
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

export default Order;