import React, { Component } from 'react';
import {  Text, Image , ScrollView} from 'react-native';


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Image 
                    source={require('./images/img15.jpg')} />
                <Text>Home Component</Text>
            </ScrollView>
        );
    }
}

export default Home;

