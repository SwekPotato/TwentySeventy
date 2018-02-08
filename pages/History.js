import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import HistoryListItem from '../components/HistoryListItem';
import Title from '../components/Title'
import Label from '../components/Label'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'

const History = (props) => (
    <View>
        <View style={styles.buttonContainer}>
        <Title text="History"/>
        </View>
        <View style={styles.container}>
        <FlatList 
            style={styles.list}
            data={[
                {
                    key: 1,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'Food',
                    date:'1/3/17',
                    id: 'Melon',
                },
                {
                    key: 2,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'Hobby',
                    date:'12/1/17',
                    id: 'Reading',
                },
                {
                    key: 3,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'Education',
                    date:'12/1/17',
                    id: 'Math',
                },
                {
                    key: 4,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'Movies',
                    date:'12/1/17',
                    id: 'Despicable Me',
                },
                {
                    key: 5,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'Sports',
                    date:'12/1/17',
                    id: 'Football',
                }
            ]}
            renderItem={ ( itemProps ) => (  
                <HistoryListItem 
                    item={itemProps.item} 
                    navigate={props.navigation.navigate}
                />
            )}
        />
        </View>
    </View>
)

History.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="history" size={30} color={tintColor} />
    )
}
const styles = StyleSheet.create ({
    buttonContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#99CCFF',
    }
})

export default History