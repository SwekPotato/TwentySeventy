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
    </View>
        <Title text="History"/>
        <FlatList 
            style={styles.list}
            data={[
                {
                    key: 1,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'food',
                    date:'1/3/17',
                    id: 'CheeseMelon',
                },
                {
                    key: 2,
                    teacher:'https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png', 
                    topic:'bathroom',
                    date:'12/1/17',
                    id: 'BootySickle',
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
)

History.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="history" size={30} color={tintColor} />
    )
}
const styles = StyleSheet.create ({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})

export default History