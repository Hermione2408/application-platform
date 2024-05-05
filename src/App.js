import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Joblisting from './components/Joblisting';
import { appStore } from './utils/appStore';
function App() {
  return (
  <Provider store ={appStore}>
    <div className='grid-container'>

  <Header/>
  <Joblisting />
  </div>

  </Provider>
)
}

export default App;
