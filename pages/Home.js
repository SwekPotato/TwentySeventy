import React from 'react'
import HomeTeacher from './HomeTeacher'
import HomeStudent from './HomeStudent'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import KeyboardAwareView from '../components/KeyboardAwareView';

const Home = (props) => {
    if(props.navigation.state.params.type === "teacher") {
        // Display HomeTeacher
        return (
            <View style={styles.titleContainer}>
                <Title text="Scheduling"/>
                <KeyboardAwareView>
                <View style={styles.container}>
                    <TextInput
                        label="Date"
                        size={20}
                    />
                    <TextInput
                        label="Time"
                        size={20}
                    />
                    <TextInput
                        label="Tutor"
                        size={20}
                    />
                </View>
                </KeyboardAwareView>
            </View>
        )
    } else {
        // Display HomeStudent
        return (
            <View style={styles.titleContainer}>
                <Title text="Scheduling"/>
            </View>
        )
    }
}

Home.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#99CCFF',
    },
});

export default Home