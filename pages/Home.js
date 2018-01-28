import React from 'react'
import HomeTeacher from './HomeTeacher'
import HomeStudent from './HomeStudent'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = (props) => {
    if(props.navigation.state.params.type === "teacher") {
        // Display HomeTeacher
        return (
            <HomeTeacher {...props} />
        )
    } else {
        // Display HomeStudent
        return (
            <HomeStudent {...props} />
        )
    }
}

Home.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
    )
}

export default Home