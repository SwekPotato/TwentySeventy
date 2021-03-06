import React from 'react'
import Label from '../components/Label'
import TextInput from '../components/TextInput'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import Title from '../components/Title'

const HomeTeacher = (props) => (
    <View>
        <Title text="Teacher" />
    </View>
)
const styles = StyleSheet.create ({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})

export default HomeTeacher