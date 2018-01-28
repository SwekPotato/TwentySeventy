import React from 'react'
import { StyleSheet, Text } from 'react-native'

class Title extends React.Component {
    render() {
        const { text } = this.props
        return (
            <Text style={styles.title}>
                {text}
            </Text>
        )
    }
}

/*
Renders with
<Title text='2070" />
*/

const styles = StyleSheet.create({
    title : {
        fontSize : 80,
    },
})

export default Title
