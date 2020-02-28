import React, { Component } from 'react';
import { FlatList, View, Text, Alert} from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return{
        order: state.order,
        shoppingcart: state.shoppingcart
    };
};

// const mapDispatchToProps = {
//     addCart: orderId => (addCart(orderId))
// };

class ShoppingCart extends Component {

    static navigationOptions = {
        title: 'Shopping Cart'
    }

    render() {
        const renderOrderItems = ({item}) => {
            return(
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                />
            );
        };
        return(
            <FlatList
                data={this.state.order.filter(
                    order => this.props.shoppingcart.includes(order.id)
                )}
                renderItem={renderOrderItems}
                // keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(ShoppingCart);