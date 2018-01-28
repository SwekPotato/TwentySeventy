import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button as FancyButton, Text} from 'native-base'

const Button = (props) => (
    <FancyButton 
        onPress={props.onPress}
        danger={true}
        style={styles.container}
    >  
        <Text style={styles.text}>
            {props.text}
        </Text>
    </FancyButton>
)

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
    }
})

export default Button