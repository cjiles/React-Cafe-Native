import React, { Component } from 'react';
import { FlatList, Button, Icon, Image } from 'react-native';
import { ListItem, Card, Text, Tile } from 'react-native-elements';
import { MENU } from '../shared/Menu';

class Menu extends Component {


    constructor(props) {
        super(props);
        this.state = {
            menu: MENU
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        const renderMenu = ({item}) => {
            return (
                
                <Card
                    title={item.name}
                    image={item.image}
                    imageStyle={{height: 300}} >
                    <Text>
                        {item.description}    
                    </Text>
                    
                    <Button
                        buttonStyle={{borderRadius: 1, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress={() => navigate('MenuItems', {menuId: item.id})}
                        title={`View All ${item.name}`} 
                        color="#282c34"/> 
                </Card>
            );
        };

        return (
            <FlatList
                data={this.state.menu}
                renderItem={renderMenu}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Menu;