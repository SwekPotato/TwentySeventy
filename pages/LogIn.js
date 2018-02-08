import React from 'react'
import Label from '../components/Label'
import base64 from 'base-64'
import TextInput from '../components/TextInput'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import Button from '../components/Button'
import { apiClient } from '../services/api';

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'Bob@gmail.com',
            password: 'A',
        }
        if (props.navigation && props.navigation.state && props.navigation.state.params) {
            this.state.email = props.navigation.state.params.email
        }
    }
    makeHandler = (name) => (text) => {
        this.setState({ [name]: text })
    }

    handleLogin = async () => {
        const user = Object.assign({}, this.state)
        user.password = base64.encode(user.password)
        const response = await apiClient('auth/login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(user)
        })
        if (!response.ok) {
            //TODO Print an error
            return
        }

        //Save the JSON web token
        const { token, type } = await response.json()
        try {
            await AsyncStorage.setItem('@letsunite:jwt', token)
            await AsyncStorage.setItem('@letsunite:type', type)
        } catch(err) {
            //TODO Print an error
            console.error(err)
            return
        }

        const { navigate } = this.props.navigation
        navigate('Home', { type })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    label="Email"
                    value={this.state.email}
                    onChange={this.makeHandler('email')}
                />
                <TextInput
                    label="Password"
                    value={this.state.password}
                    onChange={this.makeHandler('password')}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        text="Log In"
                        onPress={this.handleLogin}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#99CCFF',
    }
})

LogIn.navigationOptions = {
    gesturesEnabled: false,
}

export default LogIn