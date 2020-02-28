import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import  ShoppingCart  from './ShoppingCartComponent';



class ShoppingCartIcon extends Component {
render() {
    const ShoppingCartScreen = createStackNavigator(
        {
              ShoppingCart: ShoppingCart
      
        }    
      );

      const { navigate } = this.props.navigation;
return(
    <View>
        <Button  
          title="Go to URL"  
        //   onPress={() => navigate('ShoppingCart')}  
        />  
        {/* <Icon
            name='shopping-cart'
            type='font-awesome'
            onPress={() => this.props.navigation.navigate('ShoppingCartNavigator')}  
        /> */}
    </View>
   );
}
}

export default ShoppingCartIcon;