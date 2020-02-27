import React, { Component } from 'react';
import { FlatList, Button, Icon, Image, ScrollView, StyleSheet } from 'react-native';
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
        title: 'Choose From Any of Our Signature Items'
    };

    render() {
        const { navigate } = this.props.navigation;
        
        const renderMenu = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    titleStyle={{fontSize: 25}}
                    subtitle={item.description}
                    leftAvatar={{source: item.image}}
                    chevron={{ color: 'black' }}
                    onPress={() => navigate('MenuItems', { menuId: item.id })}
                />
            );
        };

        return (
            <ScrollView>
                {/* <Text style={styles.title}>Choose From Any of Our Signature Items</Text> */}
                <FlatList
                    data={this.state.menu}
                    renderItem={renderMenu}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    title: {
        fontSize: 30,
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#98977C'
    }
});

export default Menu;