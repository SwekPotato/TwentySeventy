import React from 'react'
import Button from '../components/Button'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Settings = () => (
    <View style={styles.container}>
        <Button text="Account"/>
        <Button text="About Me"/>
        <Button text="Password"/>
    </View>
)

Settings.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="cogs" size={30} color={tintColor} />
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
})

export default Settings