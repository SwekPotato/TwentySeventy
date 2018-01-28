import React from 'react'
import { StyleSheet, View, Text } from 'react-native' 
import PropTypes from 'prop-types'

const ErrorMessage = (props) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </View>
)

const styles = StyleSheet.create ({
    container: {

    },
    text: {
        color: 'red'
    }
})


ErrorMessage.propTypes = {
    text: PropTypes.string
}

export default ErrorMessage