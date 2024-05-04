import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Joblisting from './components/Joblisting';
import { appStore } from './utils/appStore';
function App() {
  return (
  <Provider store ={appStore}>
  <Header/>
  <Joblisting />
  </Provider>
)
}

export default App;
