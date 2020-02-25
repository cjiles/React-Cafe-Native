import React, { Component } from 'react';
import { Text, View, ScrollView, Flatlist } from 'react-native';
import { Card } from 'react-native-elements';
import { MENU } from '../shared/Menu';
import { MENUITEMS } from '../shared/MenuItems';

function RenderMenu(props) {

    const {menu} = props;

    if (menu) {
        return (
            <Card
                title={menu.name}
                image={menu.image} >
                <Text>
                    {menu.description}
                </Text>
            </Card>
        )
    }
    return <View />
}

function RenderMenus({menuitem}) {
    const renderMenuItem = ({menuitems}) => {
        return(
            <View>
                <Text>
                    {menuitems.title}......{menuitems.price}
                </Text>
                <Text>
                    {menuitems.description}
                </Text>
            </View>
        )
    };

    return(
        <Flatlist
            data={menuitem}
            renderItem={RenderMenus}
            keyExtractor={item => item.id.toString()}
        />
    );
}

class MenuItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: MENU,
            item: MENUITEMS
        };
    }

    static navigationOptions = {
        title: "Menu Items"
    }

    render() {
        const menuId = this.props.navigation.getParam('menuId');
        const menu = this.state.menu.filter(menu => menu.id === menuId)[0];
        // const menuItems = this.state.item.filter(item => item.menuId === menuId);
        return (
            <ScrollView>
                <RenderMenu menu={menu} />
                {/* <RenderMenus menuItems={menuItems} /> */}
            </ScrollView>
        )
    }
}

export default MenuItems;