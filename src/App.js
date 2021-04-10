import 'fontsource-roboto'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MainScreen from './MainScreen'

function App() {
  return (
    <Router>
      <MainScreen />
    </Router>
  )
}

export default App
