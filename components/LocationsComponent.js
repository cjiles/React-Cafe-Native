import React, { Component } from 'react';
import {Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: LOCATIONS
        };
    }

    static navigationOptions = {
        title: 'Join Us At Any of Our Three Locations'
    };

    render() {
        const renderLocations = ({item}) => {
            return(
                <Card
                    title={item.name}
                    image={item.image}>
                     <Text style={styles.cardText}>{item.address}</Text>
                     <Text style={styles.cardText}>{item.hours}</Text>
                     <Text style={styles.cardText}>{item.number}</Text>
                </Card>       
            );
        };
        return(
            <ScrollView style={{marginBottom: 20}}>
                <FlatList
                    data={this.state.locations}
                    renderItem={renderLocations}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardText: {
        textAlign: 'center',
        fontSize: 15
    }
});

export default Locations;