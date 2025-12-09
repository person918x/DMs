import { Provider } from 'react-redux';

import './App.css';
import Chat from './components/Chat';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Chat />
    </Provider>
  );
}

export default App;
