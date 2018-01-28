import { StackNavigator, TabNavigator } from 'react-navigation'
import MainPage from './pages/Main'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/LogIn'
import HomePage from './pages/Home'
import SettingsPage from './pages/Settings'
import HistoryPage from './pages/History'
import CallPage from './pages/Call'
import TopicsPage from './pages/Topics'
import TranscriptPage from './pages/Transcript'

const App = StackNavigator({
  Main: { screen: MainPage }, 
  SignUp: { screen: SignUpPage },
  LogIn: {screen: LogInPage},
  Home: { 
    screen: TabNavigator({
      Call: {screen: CallPage},
      Topics: {screen: TopicsPage},
      Home: {screen: HomePage},
      History: {screen: HistoryPage},
      Settings: {screen: SettingsPage},
    }, {
      initialRouteName: "Home"
    }),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Transcript: { screen: TranscriptPage },
})

export default App