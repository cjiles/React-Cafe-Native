import React, { Component } from 'react';
import {  StyleSheet, ScrollView, View, Linking, Text, Share, Button, Image} from 'react-native';
import {Card, Icon, Rating} from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer'

const shareReactCafe = (title, message) => {
    Share.share({
        title: title,
        message: "Check Out the React Cafe App"
    },{
        dialogTitle: 'Share ' + title
    });
};

class Home extends Component {

    static navigationOptions = {
        title: "It's A Great Day For Cofee"
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['info@react-cafe.com'],
            subject: 'App Inquiry',
            body: 'Hello Frineds:'
        })
    }


    render() {
        return (
            <ScrollView>
                <Card 
                    featuredTitle="Welcome to React Cafe"
                    featuredTitleStyle={{fontSize: 50}}
                    image={require('./images/Banner.jpg')}
                    styles={styles.card}
                    imageStyle={{height: 300}}>
                    <Text style={styles.cardText}> Established 2019 </Text>
                </Card>
                <Card 
                    featuredTitle="Daily Specials"
                    image={require('./images/InstagramCoffee.jpg')}
                    styles={styles.card}>
                    <Text style={styles.cardText}>Come See Our Daily Specials</Text>
                    <Button
                        title='Details'
                        color='#294452'
                    />
                </Card>
                <View style={styles.iconRow}>
                    <Icon
                        name='facebook'
                        type='font-awesome'
                        color='#294452'
                        reverse
                        raised
                        onPress={() => { Linking.openURL('//https://www.facebook.com/')}}
                    />
                    <Icon
                        name='instagram'
                        type='font-awesome'
                        color='#294452'
                        reverse
                        raised
                        onPress={() => { Linking.openURL('//https://www.instagram.com/')}}
                    />
                    <Icon
                        name='envelope'
                        type='font-awesome'
                        color='#294452'
                        reverse
                        raised
                        onPress={() => this.sendMail()}
                    />
                     <Icon
                            name={'share'}
                            type='font-awesome'
                            color='#294452'
                            style={styles.cardItem}
                            raised
                            reverse
                            onPress={() => shareReactCafe()} 
                        />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>
                        Are You Enjoying This App?
                    </Text>
                    <Rating
                        startingValue={4}
                        imageSize={40}
                        style={{alignItems:'flex-start', paddingVertical:'5%'}}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginBottom: 20
    },
    iconRow: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 80,
        margin: 20
    },
    cardText:{
        textAlign: 'center',
        fontSize: 20,
        color: '#294452',
        fontWeight: 'bold'
    }
});

export default Home;

