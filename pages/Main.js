import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title' 
import Button from '../components/Button'

class Main extends React.Component {
  handleSignUp = () => {
    const { navigate } = this.props.navigation 
    navigate('SignUp')
  }

  handleLogIn = () => {
    const { navigate } = this.props.navigation 
    navigate('LogIn')
  }
  render() {
    return (
      <View style={styles.container}>
        <Title text="2070" />
        <View style={styles.buttonContainer}>
          <Button text="Sign Up" onPress={this.handleSignUp} />
          <Button text="Log in"  onPress={this.handleLogIn} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#99CCFF',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default Main