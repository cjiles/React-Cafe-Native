import React, { Component } from 'react';
import { PricingCard, Card } from 'react-native-elements';
import { ORDER } from '../shared/order';
import { ScrollView, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { postCart } from '../redux/ActionCreators';
import { ShoppingCart }  from './ShoppingCartComponent';


const mapStateToProps = state => {
    return {
        order: state.order,
        shoppingcart : state.shoppingcart
    };
};

const mapDispatchToProps = {
    postCart: orderId => (postCart(orderId))
};

// const mapDispatchToProps = (dispatch)=> {
//     return{
//         addItemtoCart:(order) => dispatch({type: 'ADD_CART', payload: order})
//     }
// }

function RenderOrder({order}){
   
    const renderItems = ({item}) => {
        return (
            <PricingCard
                color="#294452"
                title={item.title}
                titleStyle={{fontSize: 30}}
                price={item.price}
                info={[item.description, ""]}
                button={{ title: 'Add Item', icon: 'shopping-cart' }}
                onButtonPress={() => {
                    Alert.alert(
                        'Shopping Cart',
                        'Your item was added to the shopping cart',
                        [
                            {
                                text: 'OK',
                                onPress: () => this.props.addItemtoCart
                            }
                        ]
                    )
                }
            }
            >
            </PricingCard>
        );                  
    };
        
    return (
        <FlatList
            data={order}
            renderItem={renderItems}
        />
    );
    
}
 


class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: ORDER,
            shoppingcart: ShoppingCart
        };
    }

    static navigationOptions = {
        title: "Order One Of Our Popular Blends"
    };

    markOrder(orderId){
        this.props.postCart(orderId)
    }


    render() {
        // const orderId = this.props.navigation.getParam('orderId')
        // const orders = this.state.order.filter(order => order.id === orderId);
        const renderItems = ({item}) => {
            return (
                <PricingCard
                    color="#294452"
                    title={item.title}
                    titleStyle={{fontSize: 30}}
                    price={item.price}
                    info={[item.description, ""]}
                    button={{ title: 'Add Item', icon: 'shopping-cart' }}
                    onButtonPress={() => {
                        Alert.alert(
                            'Shopping Cart',
                            'Your item was added to the shopping cart',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => props.shoppingcart
                                }
                            ]
                        )
                    }
                    }
                >
                </PricingCard>
    
            );
        };
     
        return(
            
            <ScrollView>
                {/* <FlatList
                    data={this.state.order}
                    renderItem={renderItems}
                // keyExtractor={item => item.id.toString()}
                /> */}

             <RenderOrder 
                orders={this.state.order}
                shoppingcart={this.props.shoppingcart} /> 
            </ScrollView>
        ); 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);