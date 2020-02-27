import React, { Component } from 'react';
import {  Text, Image , ScrollView} from 'react-native';


class Home extends Component {

    static navigationOptions = {
        title: "It's A Great Day For Cofee"
    }

    render() {
        return (
            <ScrollView>
                <Image 
                    source={require('./images/Cafe.jpg')}
                    style={{height: 300}} />
                <Text>Home Component</Text>
            </ScrollView>
        );
    }
}

export default Home;

