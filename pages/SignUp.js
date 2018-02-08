import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import base64 from 'base-64'
import KeyboardAwareView from '../components/KeyboardAwareView'
import DropdownInput from '../components/DropdownInput'
import { apiClient } from '../services/api'

async function valideUsername(username) {
    const url = `auth/validate?username=${username}`
    const response = await apiClient(url, {
        method: "GET",  
    })
    if(!response.ok) {
        return 'Username already taken'
    } 
    return null
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(email.toLowerCase())

    if(email === '') { 
        return null 
    }
    if(!valid) {
        return "Not a valid email"
    }

    return null
}

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            type: '',
            password: '',
            confirmPassword: '',
            timezone: '',
        }
    }

    validatePassword = (text) => {
        const password = this.state.password
        if(password !== text) {
            return "Not the same password"
        }
    }

    makeHandler = (name) => (text) => {
        this.setState({ [name]: text })
    }

    handleSignUp = async () => {
        const user = Object.assign({}, this.state)
        if (user.password !== user.confirmPassword) {
            // Display error
            return
        }
        user.password = base64.encode(user.password)
        delete user.confirmPassword
        user.type = user.type.toLowerCase()

        const response = await apiClient('user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })

        if (!response.ok) {
            // Display error message
            return
        }

        const { navigate } = this.props.navigation
        navigate('LogIn', { email: user.email })
    }

    render() {
        console.log(this.state)
        const { goBack } = this.props.navigation
        return (
            <View style={styles.container}>
            <KeyboardAwareView>
                <TextInput
                    label="Username"
                    size={20}
                    value={this.state.username}
                    onChange={this.makeHandler('username')}
                    validate={valideUsername}
                />
                <TextInput
                    label="Email"
                    size={20}
                    value={this.state.email}
                    onChange={this.makeHandler('email')}
                    validate={validateEmail}
                />
                <DropdownInput
                    label="You Are a"
                    options={["Teacher", "Student"]}
                    value={this.state.type}
                    onChange={this.makeHandler('type')}
                />
                <DropdownInput
                    label="Timezone"
                    options={["GMT-8", "GMT+9"]}
                    value={this.state.timezone}
                    onChange={this.makeHandler('timezone')}
                />
                <TextInput
                    label="Password"
                    size={20}
                    value={this.state.password}
                    onChange={this.makeHandler('password')}
                />
                <TextInput
                    label="Confirm Password"
                    size={20}
                    value={this.state.confirmPassword}
                    onChange={this.makeHandler('confirmPassword')}
                    validate={this.validatePassword}
                />
                <View style={styles.buttonContainer}>
                    <Button text="Cancel" size={26} onPress={() => goBack()} />
                    <Button text="Sign Up" size={26} onPress={this.handleSignUp} />
                </View>
            </KeyboardAwareView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    container: {
        backgroundColor: '#99CCFF',
    },
})

SignUp.navigationOptions = {
    gesturesEnabled: false,
}

export default SignUp