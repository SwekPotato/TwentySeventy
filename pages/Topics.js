import React from 'react'
import Label from '../components/Label'
import TextInput from '../components/TextInput'
import TopicListItem from '../components/TopicListItem'
import { View, StyleSheet, FlatList } from 'react-native'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'
import Title from '../components/Title'
import { apiClient } from '../services/api'

class Topics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: [],
            loading: true,
        }
    }

    async componentWillMount() {
        const response = await apiClient ('topic', { method: "GET"})
        if(!response.ok || response.status === 204) {
            return
        } 
        const topics = await response.json()
        this.setState({ topics, loading: false })
    }

    render = () => (
        <View style={styles.container}>
            <Title text="Topics"/>
            <FlatList
                style={styles.list}
                data={this.state.topics}
                keyExtractor={(item) => item.id}
                renderItem={ ( itemProps ) => (  
                    <TopicListItem 
                        item={itemProps.item} 
                        navigate={this.props.navigation.navigate}
                    />
                )}
            />
        </View>
    )
}

Topics.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={30} color={tintColor} />
    )
}
const styles = StyleSheet.create ({
    list: {
        backgroundColor: '#99CCFF',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})

export default Topics