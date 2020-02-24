import React, { Component } from 'react';
import { FlatList, Button, Icon, Image } from 'react-native';
import { ListItem, Card, Text, Tile } from 'react-native-elements';
import { MENU } from '../shared/MenuItems';

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
                    image={{uri: item.image}}>
                    <Text >
                        {item.description}    
                    </Text>
                    <Button
                        
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title={`View All ${item.name}`} /> 
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