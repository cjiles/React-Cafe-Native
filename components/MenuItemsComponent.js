import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { MENU } from '../shared/Menu';
import { MENUITEMS } from '../shared/MenuItems';

function RenderMenu({menu}) {

    if (menu) {
        return (
            <Card
                featuredTitle={menu.name}
                featuredTitleStyle={{fontSize: 40}}
                image={menu.image} 
                imageStyle={{height: 300}}
                >
            </Card>
        );
    }
    return <View />
}

function RenderItems({items}) {
    const renderMenuItem = ({item}) => {
        return(
            <View style={{margin: 10}}>
                <Text style={{fontSize: 20}}>{item.title} ............. {item.price}</Text>
                <Text style={{fontSize: 16}}>{item.description}</Text>
            </View>
        );
    };
    
    return (
        <Card> 
            <FlatList
                data={items}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class MenuItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: MENU,
            items: MENUITEMS
        };
    }



    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menu = this.state.menu.filter(menu => menu.id === menuId)[0];
        const items = this.state.items.filter(item => item.menuId === menuId);
        return (
            <ScrollView style={{marginBottom: 20}}>
                <RenderMenu menu={menu} />
                <RenderItems items={items} /> 
            </ScrollView>
        )
    }
}

export default MenuItems;